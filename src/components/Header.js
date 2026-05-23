import React, {useState} from 'react';
import {GrCart} from "react-icons/gr";

const Header = () => {

    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div className="nav">
                <div className="logo">
                    House staff
                </div>
                <div>
                    <ul>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Кабинет</a></li>
                    </ul>
                    <GrCart
                        onClick={() => setCartOpen(cartOpen = !cartOpen)}
                        className={`shop-cart-btn ${cartOpen && "active"}`}/>

                    {cartOpen && (
                        <div className={"shop-cart"}>

                        </div>
                    )}
                </div>
            </div>

            <div className="presentation">

            </div>
        </header>
    )
}

export default Header;