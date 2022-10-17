import React, {useState} from "react";
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from './Rating';
import { 
        FaArrowLeft, 
        FaRegHeart, 
        FaPlus, 
        FaCheck, 
        FaHeart
    } from 'react-icons/fa';
import '../StyleSheets/GameInfo.css'

function GameInfo({
    Games, 
    selectGame, 
    handleCartItems, 
    handleWishList,
    handleRemoveWishList
}) {

    const [showhide,setShowHide] = useState('Show');


    function showHideInfo() {
        // console.log('hello');
        if(showhide === 'Show') {
            setShowHide('Hide');
            document.getElementById('about').style.display="block";
        } else {
            setShowHide('Show');
            document.getElementById('about').style.display="none";
        }
    };

    function CheckItem() {
        if(Games[selectGame].add === 'not') {
            return(
                <Link onClick={() => handleCartItems(selectGame)}>
                    <a href="#home" id="addToCart" >Add to Cart <FaPlus/></a>
                </Link>
            );
        } else {
            return ( <h6 className="addedItem">Added <FaCheck/></h6> );
        }
    };

    function CheckWishlist() {
        if(Games[selectGame].wishlist === 'not') {
            return <Link onClick={() => handleWishList(selectGame)}> <FaRegHeart/> </Link>
        } else {
            return(
                <Link className="wishLishbtn" 
                onClick={() => handleRemoveWishList(Games[selectGame].count,selectGame)}> 
                <FaHeart/> </Link>
            );
        }
    };

    return (
        <div>
            <div className="navbar mt-3 px-5">
                <div>
                    <Link to="/store">
                        <a className="back" href="/store"><FaArrowLeft/><span> Store</span></a>
                    </Link>
                </div>
                <div>
                    <h1 className="gameTitle">{Games[selectGame].name}</h1>
                </div>
            </div>
            <Row className="px-5 pb-5">
                <Col xs={8}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 caourel-item"
                            src={require("../Images/games/"+Games[selectGame].foldername+"/1.jpg")}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 caourel-item"
                            src={require("../Images/games/"+Games[selectGame].foldername+"/2.jpg")}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 caourel-item"
                            src={require("../Images/games/"+Games[selectGame].foldername+"/3.jpg")}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 caourel-item"
                            src={require("../Images/games/"+Games[selectGame].foldername+"/4.jpg")}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 caourel-item"
                            src={require("../Images/games/"+Games[selectGame].foldername+"/5.jpg")}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <div>
                        <div className="aboutGame p-4">
                            <h2>About</h2>
                            <p>{Games[selectGame].description}</p>
                        </div>
                        <div className="moreInfo pt-3">
                            <div id="about" className="p-4">
                                <h3>More info</h3>
                                <h6>Released: {Games[selectGame].release}</h6>
                                <h6>Platforms: {Games[selectGame].platforms}</h6>
                                <h6>Main Genre: {Games[selectGame].genre.toUpperCase()}</h6>
                                <h6>Developers: {Games[selectGame].developer}</h6>
                                <h6>Publisher: {Games[selectGame].publisher}</h6>
                            </div>
                            <Row className="pb-3 px-4">
                                <Col>
                                    <h3>{Games[selectGame].rating}</h3>
                                    <Rating rate={Games[selectGame].rating}/> 
                                </Col>
                                <Col className="mt-5 showHideInfo"> <a href="#home" id="showHide" onClick={showHideInfo}>{showhide}</a> </Col>     
                            </Row>
                        </div>
                    </div>
                    <div className="mt-4 p-3 cartInfo">
                        <h4>$ {Games[selectGame].price}</h4>
                        { CheckWishlist() }
                        { CheckItem() }
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default GameInfo;