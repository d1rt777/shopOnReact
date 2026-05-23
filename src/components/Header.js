import React, {useState} from 'react';
import {GrCart} from "react-icons/gr";
import {Order} from "./Order";

const ShowOrders = (props) => {
    return (
        <>
            {props.orders.map(element => (
                <Order key={element.id} item={element}/>
            ))}
        </>
    )
}

const showNothing = () => {
    return (
        <>
            <p>Пока карзина пуста</p>
        </>
    )
}

const Header = (props) => {

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
                            {
                                props.orders.length > 0 ?
                                    ShowOrders(props) : showNothing()
                            }

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