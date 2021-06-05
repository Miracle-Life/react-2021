import React, {useState} from "react";import restaurants from "../sample-restaurants";import PropTypes from 'prop-types';const Landing = (props) => {    //статические данные    //state это обьект в котором хранятся данные которые могут использоваться    //как самим компонентом так и дочерним к нему компонентами    // state = {    //     display: false,    //     title: '',    //     url: ''    // };    const [display, toggleDisplay] = useState(false);    const [title, setTitle] = useState('');    const [url, setUrl] = useState('');    //событие на показ блока    const displayList = () => {        toggleDisplay(!display);    }    //берем title,url и скрываем блок    const getTitle = restaurant => {        const {title, url} = restaurant;        setTitle(title);        setUrl(url);        toggleDisplay(!display);    };    //переход по ссылке    //получаем доступ к обьекту props внутри компонента Landing, обращение к обьекту  history и метод push(). обращение через обратные скобки    const gotToRestaurant = () => {        props.history.push(`/restaurant/${url}`)    };    //Проверка    // console.log(restaurants);    // restaurants.map(restaurants=>{    //     console.log(restaurants.title);    // })    return (        <div className='restaurant_select'>            <div className='restaurant_select_top'>                <div                    onClick={displayList}                    className='restaurant_select_top-header font-effect-outline'>                    {title ? title : 'Выбери ресторан'}                </div>                <div className='arrow_picker'>                    <div className='arrow_picker-up'></div>                    <div className='arrow_picker-down'></div>                </div>            </div>            {display ?                <div className='restaurant_select_bottom'>                    <ul>                        {restaurants.map(restaurant => {                            return (<li onClick={() => getTitle(restaurant)}                                        key={restaurant.id}>{restaurant.title}</li>);                        })}                    </ul>                </div>                : null}            {title && !display ? (                <button onClick={gotToRestaurant}>Перейти в ресторан</button>) : null}        </div>    );}Landing.propTypes = {    history: PropTypes.object}export default Landing;