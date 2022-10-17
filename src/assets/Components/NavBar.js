import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import {IoExitOutline} from 'react-icons/io5';
import { MdOutlineShoppingBag ,MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../StyleSheets/Nav.css'

function NavBar({
    Games, 
    cartItems, 
    handleRemove, 
    handleSearch,
    handleSelectGame
}) {

    const [showCart, setShowCart] = useState('Show');
    
    if(cartItems.length === 0) {
        if(document.getElementById('Cart') !== null){
            document.getElementById('Cart').style.color="white";
        }
    } else {
        document.getElementById('Cart').style.color="lightgreen";
    }

    // console.log(strUnderscores);
    function handdleCart() {
        // console.log('hello');
        if(showCart === 'Show') {
            setShowCart('Hide');
            document.getElementById('cart').style.display="block";
        } else {
            setShowCart('Show');
            document.getElementById('cart').style.display="none";
        }
    };

    return (
        <div>
        <div id='cart'>
            <div className='closeCart mb-2'><Link onClick={handdleCart}><FaWindowClose/></Link></div>
            <div className='itemContainer'>
                { cartItems.length === 0 && ( <div> <h3>No Items</h3> </div>) }
                {
                    cartItems.map((game, index) => {
                        return(
                            <Link to="/games" onClick={() => handleSelectGame(Games[game].id)}>
                                <div key={index} className="cartItem">
                                    <h6>{Games[game].name}</h6>
                                    <span>$ {Games[game].price}</span>
                                    <Link className='itemRemove' onClick={() => handleRemove(index,game)}> <IoMdClose/> </Link>    
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='mt-4 checkOutBtn'> <Link to="/checkout">Check Out <IoExitOutline/></Link></div>
        </div>
        <Navbar bg="dark" variant="dark">
            <Container fluid className='px-5'>
                <Navbar.Brand >
                    <Link to="/" className='navBrand'>
                        <img
                        alt=""
                        src={require("../Images/icon.png")}
                        width="30"
                        height="30"
                        className="navIcon d-inline-block"
                        />{' '}
                        <span className='navIcon'>Game Zone</span>
                    </Link>
                </Navbar.Brand>
                <Form className="SearchBar d-flex">
                    <input className='SearchInput' onChange={handleSearch}/>
                    <button className='SearchBtn'><MdSearch className='searchIcon'/></button>
                </Form>
                <Link>
                    <Navbar.Brand id='Cart' onClick={handdleCart}>
                        <MdOutlineShoppingBag className='cartIcon'/>
                        <span className='itemCount'>{cartItems.length}</span>
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    </div>
    );
}

export default NavBar