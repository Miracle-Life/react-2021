import React from "react";import Shipment from "./Shipment";import {TransitionGroup, CSSTransition} from "react-transition-group";class Order extends React.Component {    renderOrder = (key) => {        const burger = this.props.burgers[key];        const count = this.props.order[key];        const isAvailable = burger && burger.status === 'available';        //обьект со свойствами CSSTransition вынесли отдельно        const transitionOption = {            classNames: 'order',            key,            timeout: {enter: 500, exit: 500}        };        //если нету бургеров то мы ничего не рендерим        if (!burger) {            return null;        }        if (!isAvailable) {            return (                <CSSTransition {...transitionOption}>                    <li className='unavailable' key={key}>                        Извините, {burger ? burger.name : 'бургер'} временно не доступен                    </li>                </CSSTransition>            );        }        return (            <CSSTransition {...transitionOption}>                <li key={key}>                <span>                    <TransitionGroup                        component='span'                        className='count'>                        <CSSTransition                            classNames='count'                            key={count}                            timeout={{enter: 500, exit: 500}}                        >                            <span>{count}</span>                        </CSSTransition>                    </TransitionGroup>                    шт. {burger.name}                    <span> {count * burger.price} ₴</span>                    <button                        className='cancelItem'                        onClick={() => this.props.deleteFromOrder(key)}                    > &times; </button>                </span>                </li>            </CSSTransition>        );    }    ;    render() {        const            orderIds = Object.keys(this.props.order)        //        const            total = orderIds.reduce((prevTotal, key) => {                //получаем свойство каждого бургера                const burger = this.props.burgers[key];                const count = this.props.order[key];                // console.log('burger',burger);                // console.log('count',count);                //проверка на доступность есть ли в наличии бургер                const isAvailable = burger && burger.status === 'available';                if (isAvailable) {                    return prevTotal + burger.price * count;                }                return prevTotal;            }, 0)        return (            <div className='order-wrap'>                <h2>Ваш Заказ</h2>                <TransitionGroup component='ul' className='order'> {                    orderIds                        .map(                            this                                .renderOrder                        )                }                </TransitionGroup>                {                    total > 0 ? (                        <Shipment total={total}/>                    ) : (                        <div className='nothingSelected'>                            Выберите блюда и добавьте к заказу                        </div>                    )                }            </div>        )            ;    }}export default Order;