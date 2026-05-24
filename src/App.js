import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [

            ],
            items: [
                {
                    "id": 1,
                    "title": "Ступ серый",
                    "img": "chair-grey.png",
                    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    "category": "chairs",
                    "price": "49.99"
                },
                {
                    "id": 2,
                    "title": "Стул черный",
                    "img": "chair-black.jpeg",
                    "desc": "Удобный черный стул для дома или офиса.",
                    "category": "chairs",
                    "price": "59.99"
                },
                {
                    "id": 3,
                    "title": "Кресло бежевое",
                    "img": "armchair-beige.jpeg",
                    "desc": "Мягкое кресло с высокой спинкой.",
                    "category": "armchairs",
                    "price": "129.99"
                },
                {
                    "id": 4,
                    "title": "Диван угловой",
                    "img": "sofa-corner.png",
                    "desc": "Просторный угловой диван для гостиной.",
                    "category": "sofas",
                    "price": "399.99"
                },
                {
                    "id": 5,
                    "title": "Стол обеденный",
                    "img": "table-dining.png",
                    "desc": "Деревянный стол на 6 персон.",
                    "category": "tables",
                    "price": "199.99"
                },
                {
                    "id": 6,
                    "title": "Ступ белый",
                    "img": "chair-white.png",
                    "desc": "Легкий и стильный белый стул.",
                    "category": "chairs",
                    "price": "44.99"
                },
                {
                    "id": 7,
                    "title": "Кресло-качалка",
                    "img": "rocking-chair.png",
                    "desc": "Классическое кресло-качалка из дерева.",
                    "category": "armchairs",
                    "price": "159.99"
                },
                {
                    "id": 8,
                    "title": "Журнальный столик",
                    "img": "coffee-table.png",
                    "desc": "Компактный столик для гостиной.",
                    "category": "tables",
                    "price": "79.99"
                }
            ]
        }

        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
    }

    render() {
        return (
            <div className="wraper">
                <Header
                    orders={this.state.orders}
                    onDelete={this.deleteOrder}
                />
                <Categories chooseCategory={this.chooseCategory} />
                <Items
                    items={this.state.currentItems} onAdd={this.addToOrder} />
                <Footer />
            </div>
        )
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({
                currentItems: this.state.items
            })
        } else {
            this.setState({
                currentItems: this.state.items.filter(
                    element => element.category === category
                )
            })
        }
    }

    deleteOrder(id) {
        this.setState({ orders: this.state.orders.filter(element => element.id !== id) })

    }

    addToOrder(item) {

        let isInArray = false

        this.state.orders.forEach(element => {
            if (element.id === item.id) {
                isInArray = true
            }
        })

        if (!isInArray) {
            this.setState({ orders: [...this.state.orders, item] });
        }
    }
}

export default App;