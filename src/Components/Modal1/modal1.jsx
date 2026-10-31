import classes from '../Modal1/modal1.module.scss'
import { Photo } from "../../Photo.js"
import { NavLink } from "react-router-dom"
export default function Modal1({ isOpen, onClose }) {
     if (!isOpen) return null;
  return (
    <>
      <div className={classes.back} onClick={onClose}>
            <div className={classes.very_big_container}>
                <div className={classes.big_container} onClick={(e) => e.stopPropagation()}>
                        <div className={classes.left_container} >
                            <div className={classes.foto} >
                                <img src={Photo.WTwf} alt="Logo" />
                                </div>
                                    <div className={classes.container} >
                                    <p>Добро пожаловать!<br/>
                                    <span><strong>Войдите в свой аккаунт</strong></span></p>
                                        <div className={classes.forma}>
                                            <p>E-mail</p>
                                            <input className={classes.email} type="email" placeholder="E-mail" autoComplete="email"/>
                                            <p>Пароль</p>
                                            <input className={classes.email} type="email" placeholder="Пароль" autoComplete="email"/>
                                        </div>
                                        <div className={classes.password}>
                                            <input type="checkbox"/>
                                            <button>Забыли пароль?</button>
                                        </div>
                                        <div className={classes.knopki}>
                                        <button>Войти</button>
                                        <button><img src={Photo.google}/>Или войдите с помощю Google</button>
                                        </div>
                                        <p>У Вас все еще нет аккауна? <NavLink>Зарегистрируйтесь бесплатно!</NavLink></p>
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
