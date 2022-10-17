import React from 'react';
import Home from '../Home';
import Store from '../Store';
import GameInfo from '../GameInfo';
import CheckOut from '../Checkput';
import { Routes, Route } from 'react-router-dom';

function Router({
    Games, 
    selectGame, 
    handleSelectGame,
    handleCartItems,
    cartItems,
    RemoveItems,
    wishList,
    Rating,
    handleWishList,
    handleRemoveWishList,
    filter,
    handleFilter,
    clearFilter,
    searchItem
}) {
    // console.log(Games);
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home handleSelectGame={handleSelectGame}/>} />
                <Route path='/store' 
                    element={
                        <Store 
                            Games={Games}
                            handleSelectGame={handleSelectGame}
                            Rating={Rating}
                            wishList={wishList}
                            filter={filter}
                            handleFilter={handleFilter}
                            clearFilter={clearFilter}
                            searchItem={searchItem}
                        />} 
                    />
                <Route path='/games' 
                    element={
                        <GameInfo 
                            Games={Games}
                            selectGame={selectGame}
                            handleCartItems={handleCartItems}
                            handleWishList={handleWishList}
                            handleRemoveWishList={handleRemoveWishList}
                        />} 
                    />
                <Route path='/checkout' 
                        element={
                            <CheckOut 
                                cartItems={cartItems}
                                RemoveItems={RemoveItems}
                                Games={Games}
                            />} 
                        />
            </Routes>
        </div>
    );
};

export default Router;