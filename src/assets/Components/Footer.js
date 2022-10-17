import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle  } from 'react-icons/fa';
import '../StyleSheets/footer.css'

function Footer() {

    return (
        <div className='footer px-5'>
            <div> 
            <img src={require('../Images/icon.png')} 
                alt=''
                width="40"
                height="40"
                />
                {" "}
                <h4 className="d-inline-block align-middle">Game Zone</h4>
            </div>
            <Row className='my-3 footerDetails'>
                <Col>
                    <h5>Compony</h5>
                    <p className='mb-2'> <a href="#home" className='infos'>About </a> </p>
                    <p className='mb-2'> <a href="#home" className='infos'>Press Center </a> </p>
                    <p className='mb-2'> <a href="#home" className='infos'>Careers </a> </p>
                </Col>
                <Col>
                    <h5>Consoles</h5>
                    <p className='mb-2'> <a href="#home" className='infos'>Playstation </a> </p>
                    <p className='mb-2'> <a href="#home" className='infos'>Xbox </a> </p>
                    <p className='mb-2'> <a href="#home" className='infos'>Switch </a> </p>
                </Col>
                <Col>
                    <h5>Resources</h5>
                    <p className='mb-2'> <a href="#home" className='infos'>Help Center </a></p>
                    <p className='mb-2'> <a href="#home" className='infos'>Contact </a></p>
                </Col>
                <Col>
                    <h5>Product Help</h5>
                    <p className='mb-2'> <a href="#home" className='infos'>Support </a> </p>
                    <p className='mb-2'> <a href="#home" className='infos'>File a Bug </a> </p>
                </Col>
            </Row>
            <Row className='footerLastSection'>
                <Col className='mt-3' xs={8}>
                    <a href='#home' className='basis'>Privacy </a>
                    <a href='#home' className='basis'>Website Privacy Notice</a>
                    <a href='#home' className='basis'>Cokies</a>
                    <a href='#home' className='basis'>Legal</a>
                    <a href='#home' className='basis'>Collaborative Guidelines</a>
                </Col>
                <Col className='socials'>
                    <a href='#home' className='socialIcons'> <FaFacebook/> </a>
                    <a href='#home' className='socialIcons'><FaTwitter/> </a>
                    <a href='#home' className='socialIcons'> <FaGoogle/> </a>
                    <a href='#home' className='socialIcons'> <FaInstagram/> </a>
                    <a href='#home' className='socialIcons'> <FaLinkedin/> </a>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;