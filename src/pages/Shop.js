import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import serviceData from '../assets/data/serviceData';

const Shop = () => {
    const [displayProducts,setDisplayProducts] = useState([]);

    const handleSearchField=(e)=>{
        const searchValue = e.target.value;
        const matchProducts =serviceData.filter(product=>product.title.toLowerCase().includes(searchValue.toLowerCase()))
        setDisplayProducts(matchProducts)
    }
    useEffect(()=>{
        setDisplayProducts(serviceData)
    },[])
   
    return (
        <Container>
            <input onChange={handleSearchField} type="text" placeholder = "search your product"></input>
            {displayProducts.map((item) =>
                <div key={item.icon}><h3>{item.title}</h3></div>
            )
            }

        </Container>
    );
};

export default Shop;