import classes from '../Modal2/modal2.module.scss'
import { Photo } from "../../Photo.js"
import { NavLink } from "react-router-dom"
export default function Modal2({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
     <div className={classes.back} onClick={onClose}>
            <div className={classes.very_big_container}>
                <div className={classes.big_container} onClick={(e) => e.stopPropagation()}>
                        <div className={classes.left_container} >
                                <img src={Photo.WTwf} alt="Logo" />
                                    <div className={classes.container} >
                                    <p>Давайте создадим Вам аккаунт<br/>
                                    <span><strong>Заполните все поля</strong></span></p>
                                        <div className={classes.forma}>
                                            <p>Ваше имя</p>
                                            <input id="email" type="email" placeholder="Имя" autoComplete="email"/>
                                            <p>Ваше фамилия</p>
                                            <input id="email" type="email" placeholder="Фамилия" autoComplete="email"/>
                                             <p>E-mail</p>
                                            <input id="email" type="email" placeholder="E-mail" autoComplete="email"/>
                                             <p>Телефон номер</p>
                                            <input id="email" type="email" placeholder="Телефон" autoComplete="email"/>
                                             <p>Пароль</p>
                                            <input id="email" type="email" placeholder="Пароль" autoComplete="email"/>
                                             <p>Повтарите пароль</p>
                                            <input id="email" type="email" placeholder="Пароль" autoComplete="email"/>
                                        </div>
                                        <div className={classes.password}>
                                            <div><input type="checkbox"/><p>Я исполнитель</p></div>
                                            <div><input type="checkbox"/><p>Я заказчик</p></div>
                                            
                                        </div>
                                        <div className={classes.knopki}>
                                        <button>Зарегестрироваться</button>
                                        </div>
                                        <p>У Вас есть аккаунт?<NavLink>Войдите</NavLink></p>
                                    </div>
                                </div>
                        <div className={classes.right_container} >
                        <img src={Photo.Framqqw}/>
                        </div>
                </div>
            </div>
    </div>
    </>
  )
}
