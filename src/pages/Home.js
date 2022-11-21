import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import imageBg from "../assets/images/arm-chair-01.jpg";
import "./Home.css"


const Home = () => {
    return (
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className='img_bg'>
                    </div>
                    <div className='text_part'>
                        <h4>From text part</h4>
                    </div>
                    <Link to="/shop">Shop</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;