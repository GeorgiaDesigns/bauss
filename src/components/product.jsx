import React from 'react';
import '../App.css';


const Product = ({product, onAddToCart}) => {
        return(
        <div className="container-product">
            <div className="infoCard">
                <div className="content">
                <h3 className="price">  {product.name} {product.price.formatted_with_symbol} </h3>
                </div>
                <button onClick={() => onAddToCart(product.id, 1)}>Add to cart</button>
            </div>
            <img className="pic" alt="" src={product.media.source}/>
    
            <style jsx>{`
                .pic {
                    box-shadow: rgba(0, 0, 0, 0.25) 8px 8px 8px 1px;
                    transition: 0.3s;
                    z-index:2;
                    left:0;
                    top:0;
                    max-width: 100%;
                    max-height: 100%;
                    position:absolute;
                }
                  
                .pic:hover {
                    box-shadow:rgba(0, 0, 0, 0.25) 15px 18px 8px 1px;
                }    
                
                .infoCard:hover{
                    left: 91px;
                    top: 65px;
                    background-color:#aeb8a7;
                            }
    
                .infoCard{
                    color: #fff;
                    width: 30vw;
                    height: 43vw;
                    background-color:#c8d1c2;
                    z-index:0;
                    position:absolute;
                    left: 20px;
                    top: 20px;
                    transition: 1s;
                }
    
                .content{
                    position:absolute;
                    bottom: 0px;                
                    left: 50px;
                    text-align:center;
                }
    
                .container-product button{
                    background-color:#C79378;
                    color: #fff;
                    font-size: 20px;
                    position:absolute;
                    transform:  rotate(-90deg) translateX(-100%);
                    right: -10px;
                    bottom: 300px;
                    border-radius: 30px;
                    height: 40px;
                    border-color: #fff;
                }
            `}</style>
        </div>
    );

};

export default Product;