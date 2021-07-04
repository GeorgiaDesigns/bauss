import React, { useState }  from 'react';
import * as RiIcons from 'react-icons/ri';    
import * as IoIcons from 'react-icons/io5';    
import Cart from './cart';

const Header = ({cart, handleUpdateCartQty, handleRemoveFromCart}) => {
    const [cartisOpen, setcartisOpen] = useState(false);
    const showCart = () => setcartisOpen(!cartisOpen);

    return (
        <div className='header'>
            <Cart cartProducts={cart} 
                  isOpen={cartisOpen} 
                  showCart={showCart} 
                  handleUpdateCartQty={handleUpdateCartQty} 
                  handleRemoveFromCart={handleRemoveFromCart}/>
            <div className='logo'>
                <h1>BAUSS</h1>
            </div>
            <div className='nav-wrapper'>
                <nav>
                    <div className='nav_left'>
                        <a className='nav-item' href='/story/' target='_self'>storytime</a>
                        <a className='nav-item' href='/story/' target='_self'>products</a>
                    </div>
                    <div className='nav_right'>
                        <a className='nav-item' ><IoIcons.IoLanguageSharp />  </a>
                        <a className='nav-item' ><RiIcons.RiShoppingCart2Line onClick={showCart}/>  </a>
                        <a className='nav-item' href='/' target='_self'><RiIcons.RiInstagramLine /> </a>
                    </div>
                </nav>
            </div>
  


  
        <style jsx>{`
        .header{
            position:fixed;
            width: -webkit-fill-available;
            z-index: 5;
        }

        .header nav{
            text-transform: uppercase;
            letter-spacing: .1em;
            padding: 0 8.33333vw;
            margin-top: 6vw;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            top:0;
        }

        .nav-item {
            text-decoration:none;
            color: #b0826a;
        }

        .logo {
            margin: 0;
            position: absolute;
            top: 70%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            font-family: 'mount-hills';
  }

        .logo h1{
            text-shadow: 1px 1px 0px var(--shadow-light), 3px 3px var(--shadow-light), -3px -3px var(--shadow-dark);
            font-size: 100px;
            color: #bdc8b6;
            display: inline-block;
            z-index:1;   
            top: 50%; 
        }

        .nav_left{
            font-size: 1.1vw;
            display:flex;  
            justify-content: space-between;          
        }
        .nav_right{
            font-size:2vw;
            display:flex;  
            justify-content: space-between;          
        }

        .header .nav_left .nav-item {
            margin-right: 2em;
            position:relative;
        }

        .header .nav_right .nav-item {
            margin-left: 2em;
            position:relative;

        }

        `}</style>

        </div>

    );
};

export default Header;