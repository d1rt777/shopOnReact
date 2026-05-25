import React, {Component} from "react";
import {GrTrash} from "react-icons/gr";


export class Order extends Component {
    render() {
        return (
            <div className={"item"}>
                <img src={"/shopOnReact/img/" + this.props.item.img} alt=""/>

                <div className="info">
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.price} $</b>
                </div>
                <GrTrash
                    className="trash-btn"
                    onClick={() => this.props.onDelete(this.props.item.id)}
                />
            </div>
        )
    }
}
