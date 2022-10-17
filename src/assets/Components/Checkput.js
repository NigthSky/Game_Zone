import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {IoExitOutline} from 'react-icons/io5'
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../StyleSheets/CheckOut.css';

function CheckOut( {cartItems, RemoveItems, Games} ) {

    console.log(cartItems);
    const totalprice = cartItems.reduce((partialSum, a) => partialSum + Games[a].price,0);
    const [validated, setValidated] = useState(false);
    const [submited,setSubmited] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        } else {
            setSubmited(true);
            RemoveItems();
        }
        setValidated(true);
     };



    if(submited === false) {
        return(
            <div className='checkoutContainer'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h2>Billing Information</h2>
                    <Row>
                        <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback type="invalid">Please provide First Name.</Form.Control.Feedback>

                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback type="invalid" >Please provide Last Name.</Form.Control.Feedback>

                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback type="invalid">Please provide Contact No.</Form.Control.Feedback>

                            <Form.Label>Billing Address</Form.Label>
                            <Form.Control
                                required
                                as="textarea" 
                                rows={3}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="Email@example.com" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Email.
                            </Form.Control.Feedback>

                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>


                            <Form.Label>Zip or Postal code</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>

                            <div className='finalizedItems'>
                                <h4>Total Items: <span className='verifiedItem'>{cartItems.length}</span></h4>
                                <h4>Total Price: <span className='verifiedItem'>$ { totalprice }</span></h4>
                            </div>
                        </Col>
                    </Row>
                        <Form.Check
                        label="Save my Payment Infomation so checkout is easy next time." 
                        className='my-2'
                        />
                    <Button type="submit" variant='success'>Continue</Button>
                    </Form>
            </div>
        );
    } else {
        return(
            <div className='checkoutContainer'>
                <h3>Thank you for your Purchase!</h3>
                <div className='px-3 message'>
                    <p>A receipt will be emailed to you sortly</p>
                    <p>Any digital items in this order are now registered to your account. To access your items, simply visit your Library whenever your ready.</p>
                    <p>Enjoy your new items and games, please visit agin.</p>
                </div>
                <div className='closeMessage'>
                    <Link className='closeBtn' to="/store">close <IoExitOutline/></Link>
                </div>
            </div>)
        ;
    }
}

export default CheckOut;