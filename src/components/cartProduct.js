import React from 'react';
import * as RiIcons from 'react-icons/ri';    


const CartProduct = ({product, onUpdate, onRemove}) => {
    return (
        <div>
            <div className='cartProduct'>
                <div className='cartImage'>
                    <img alt='' src={product.media.source}></img>
                </div>
                <div className='cartContent'>
                    <div className='name'>{product.name}</div>
                    <div className='price'>{product.line_total.formatted_with_symbol}</div>
                    <div className='description'>
                        <div className='span-left'>
                            <span onClick={()=> onUpdate(product.id, product.quantity-1)}>-</span>                    
                            {product.quantity}
                            <span><RiIcons.RiAddCircleFill onClick={()=> onUpdate(product.id, product.quantity+1)}/></span>
                        </div>
                        <span className='span-right'><RiIcons.RiDeleteBin6Line onClick={()=> onRemove(product.id)}/></span>
                    </div>
                </div>

                
                <style jsx>{`
                .cartProduct{
                    padding: 20px;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: row;
                }

                .cartProduct img{
                    width: 100px;
                    border-radius:5px;
                }
                
                .cartImage {
                    left: 0;
                    flex-basis: 12.5vw;
                }

                .cartContent{
                    position:relative;
                    flex-basis: 21.875vw;
                }

                .cartContent span {
                    padding: 5px;
                }

                .cartContent .name{
                    padding-bottom: 10px;
                }
                .cartContent .price{
                    padding-bottom: 10px;
                }
                .span-right{
                    margin-right: 2vw;
                    position:relative;    
                }
                .span-left{
                    margin-left: 2vw;
                    position:relative;    
                }

                .description{
                    display:flex;  
                    justify-content: space-between;          
                }

                .description span{
                    cursor:pointer;
                }

                `}</style>
            </div>
            <hr/>
        </div>
    );

}



export default CartProduct;
