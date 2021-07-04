import React from 'react';
import Product from './product';

const Products = ({products, onAddToCart}) => {
    return (
        <div className='items'>
            <div className='collection-name'>
                <h2>SPRING</h2>
                <h1>COLLECTION</h1>
            </div>
                {products.map((product)=>(
                    <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
                ))}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 330">
        <path fill="#C79378" fillOpacity="1" d="M0,96L40,96C80,96,160,96,240,90.7C320,85,400,75,480,106.7C560,139,640,213,720,208C800,203,880,117,960,90.7C1040,64,1120,96,1200,138.7C1280,181,1360,235,1400,261.3L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
        </path>
      </svg>
        <style jsx>{`
        .items{
          background-color: #C79378;
        }

        .collection-name{
            padding: 25px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #fff;
            font-size: 3vw; 
            color: #C79378;
            position: absolute;
            margin-left: 10%;
        }
        `}</style>

        </div>

    );
};

export default Products;