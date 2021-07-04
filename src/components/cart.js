import React from 'react';
import CartProduct from './cartProduct';
import * as RiIcons from 'react-icons/ri';    


const Cart = ({cartProducts, isOpen, showCart, handleUpdateCartQty, handleRemoveFromCart}) => {

    const isEmpty = !cartProducts.total_items;
    console.log(cartProducts)

    const EmptyCart = () => (
        <div className='emptyCart'>
            <h2>Your cart is empty!</h2>
        </div>
    )

    const FilledCart = () => (
        <div className='fullCart'>
           {/*  <div className='header'>
                <h3>Your Cart ({cartProducts.total_items})</h3>
            </div> */}
            <div className='exhibitProducts'>
                {cartProducts.line_items.map((product)=>(
                        <CartProduct key={product.id} product={product} onUpdate={handleUpdateCartQty} onRemove={handleRemoveFromCart}/>
                    ))} 
            </div>
             <div className='checkout'>
                <h3>TOTAL {cartProducts.subtotal.formatted_with_symbol}</h3>
                <a href={cartProducts.hosted_checkout_url} target='_blank'>Checkout</a>

            </div>
        </div>
    )

    return (
        <div className={isOpen ? 'cartMenu active' : 'cartMenu'}>
            <div className='cartProducts'>

                <a className='closebtn'><RiIcons.RiCloseLine onClick={showCart}/></a>

               {isEmpty ? <EmptyCart/> : <FilledCart/> }
             
            </div>

        <style jsx>{`

        .cartMenu {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 3;
            top: 0;
            right: 0;
            background-color: #b0826a;
            transition: 0.5s;
            padding-top: 60px;
            text-align:center;
            color: #bdc8b6;
            overflow-y:hidden;
        }
        .cartMenu.active {
            width: 35vw;
        }

        .cartMenu .closebtn {
            position: absolute;
            top: 25px;
            right: 25px;
            font-size: 36px;
            color: #bdc8b6;
        }

        .fullCart {
            display:flex;
            padding:3vw;
            flex-direction: column;
            justify-content: flex-start;
        }

        .cartMenu .header{
            top: 0px;
            position: fixed;
            height: 5vw;
            display: flex;
            align-items: center;
            font-style: italic;
            text-transform: uppercase;
            font-size: 20px;
            background-color: #b0826a;            

        }

        .fullCart .checkout{
            position: fixed;
            width: 100%;
            bottom: 0;
            height: 5vw;
            display: flex;
            align-items: center;
            font-style: italic;
            text-transform: uppercase;
            background-color: #b0826a;            
        }

        `}</style>

        </div>
    );

}



export default Cart;
