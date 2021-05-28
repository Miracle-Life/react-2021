import React from "react";class AddBurgerForm extends  React.Component {    //создание ссылок на каждый input    nameRef=React.createRef();    priceRef=React.createRef();    statusRef=React.createRef();    descRef=React.createRef();    imageRef=React.createRef();    //отменяем перезагрузку страницы при клике на button    createBurger=event=>{    event.preventDefault();    //проверка что мы получаем из нашей формы name    // console.log(this.nameRef.current.value);    //обьект что принимает все значения из нашей формы    const burger = {        name:this.nameRef.current.value,        // parseFloat - строку переводит в числовое значение        price:parseFloat(this.priceRef.current.value),        status:this.statusRef.current.value,        desc:this.descRef.current.value,        image:this.imageRef.current.value    };    //проверка - что мы получаем из полей в нашей форме    // console.log(burger);        this.props.addBurger(burger);        // console.log(event.currentTarget); - получение всей формы        // сбрасываем-обновляем все поля методом reset()        event.currentTarget.reset();    }    render() {        return(            <form className='burger-edit' onSubmit={this.createBurger}>                 <input ref={this.nameRef} name='name'  type='text' placeholder='Name' autoComplete='off' /> '               <input ref={this.priceRef} name='price'  type='text' placeholder='Price' autoComplete='off'/>                 <select ref={this.statusRef} name='status'  className='status'>                     <option value="available">Доступно</option>                     <option value="unavailable">Убрать из меню</option>                 </select>                 <textarea ref={this.descRef} name='desc'  placeholder='Desc'  /> '               <input ref={this.imageRef} name='image'  type='text' placeholder='Image' autoComplete='off'/>'                <button type='submit'>+ Добавить в Меню</button>            </form>        )};}export default AddBurgerForm;