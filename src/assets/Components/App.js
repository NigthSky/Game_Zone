import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Data from './Games';
import RatingData from './GamesListRating';
import Nav from './NavBar';
import Routes from './Router/Routes';
function App() {

    const Games = Data;
    const Rating = RatingData;
    const [selectGame, setSelectGame] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [wishList, setWishlist] = useState([]);
    const [filter, setFilter] = useState('none');
    const [searchItem, setSeachItem] = useState('');

    function handleSearch(event) {
        setSeachItem(event.target.value);
        if(searchItem.length <= 1){
            setFilter('none');
        } else {
            setFilter('search');
        }
    };

    function handleFilter(itemfilter) {
        setFilter(itemfilter);
    }
    function clearFilter() {
        setFilter('none');
    }

    function handleCartItems(index) {
        setCartItems([...cartItems, index]);
        Games[index].add = "added";
    };
    
    function handleSelectGame(index) {
        setSelectGame(index);
    };

    function handleWishList(index) {
        Games[index].count = wishList.length;
        console.log(Games[index]);
        setWishlist([...wishList, index]);
        Games[index].wishlist = "yes";
    }

    function handleRemoveWishList(i,game) {
        let updateWishList = wishList;
        updateWishList.splice(i, 1);
        // wishList.map((wishgame, index) => wishgame.count = i);
        Games[game].wishlist = "not";
        setCartItems(updateWishList);
    }

    function handleRemove(index,game) {
        let updateItem = cartItems;
        updateItem.splice(index, 1);
        Games[game].add = "not";
        setCartItems(updateItem);
    }

    function RemoveItems() {
        setCartItems([]);
    }

    return (
        <Router>
            <Nav 
                cartItems={cartItems} 
                Games={Games}
                handleRemove={handleRemove}
                handleSearch={handleSearch}
                handleSelectGame={handleSelectGame}
            />
            <Routes 
                Games={Games}
                selectGame={selectGame}
                handleSelectGame={handleSelectGame}
                handleCartItems={handleCartItems}
                cartItems={cartItems}
                RemoveItems={RemoveItems}
                wishList={wishList}
                Rating={Rating}
                handleWishList={handleWishList}
                handleRemoveWishList={handleRemoveWishList}
                filter={filter}
                handleFilter={handleFilter}
                clearFilter={clearFilter}
                searchItem={searchItem}
            />
        </Router>
    );

};

export default App;