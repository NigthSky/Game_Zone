import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { CgEnter } from 'react-icons/cg';
import { GrFacebook, GrInstagram } from 'react-icons/gr'
import { FaTwitterSquare } from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdOutlineLiveHelp } from 'react-icons/md';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../StyleSheets/Home.css';

function Home({handleSelectGame}) {
    return(
        <Row className='px-5 py-3'>
            <Col xs={9}>
                <Carousel>
                    <Carousel.Item className='carouselItem'>
                        <Link to="/games" onClick={() => handleSelectGame(0)} >
                            <img
                            className="d-block w-100 homeCarosel"
                            src={require('../Images/games/gta5/1.jpg')}
                            alt="First slide"
                            />
                            <Carousel.Caption className='carouselCaption'>
                                <h2>Grand Theft Auto 5</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item className='carouselItem'>
                        <Link to="/games" onClick={() => handleSelectGame(3)}>
                            <img
                            className="d-block w-100 homeCarosel"
                            src={require('../Images/games/minecraft/1.jpg')}
                            alt="Second slide"
                            />
                            <Carousel.Caption className='carouselCaption'>
                                <h2>Minecraft</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item className='carouselItem'>
                        <Link to="/games" onClick={() => handleSelectGame(1)}>
                            <img 
                            className="d-block w-100 homeCarosel"
                            src={require('../Images/games/elden_ring/1.jpg')}
                            alt="Third slide"
                            />
                            <Carousel.Caption className='carouselCaption'>
                                <h2>Elden Ring</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <div className='quickNav'>
                    <h2>Quick Navigation</h2>
                    <Row className='quickNavItem'>
                        <Link to="/store" className='homeLink'>
                            <CgEnter className='quickNavIcon'/>
                            Browse Store
                        </Link>
                    </Row>
                    <div className='quickNavItem'>
                        <Link className='homeLink'>
                            <GrFacebook className='quickNavIcon'/>
                            Face Book
                        </Link>
                    </div>
                    <div className='quickNavItem'>
                        <Link className='homeLink'>
                            <GrInstagram className='quickNavIcon'/>
                            Instagram
                        </Link>
                    </div>
                    <div className='quickNavItem'>
                        <Link className='homeLink'>
                            <FaTwitterSquare className='quickNavIcon'/>
                            Twitter
                        </Link>
                    </div>
                    <div className='quickNavItem'>
                        <Link className='homeLink'>
                            <AiOutlineFileSearch className='quickNavIcon'/>
                            About
                        </Link>
                    </div>
                    <div className='quickNavItem'>
                    <   Link className='homeLink'>
                            <MdOutlineLiveHelp className='quickNavIcon'/>
                            Help Center
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
export default Home;
