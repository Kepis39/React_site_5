import classes from '../Modal1/modal1.module.scss'
import { Photo } from "../../Photo.js"
export default function Modal1({ isOpen, onClose }) {
     if (!isOpen) return null;
  return (
    <>
      <div className={classes.back} onClick={onClose}>
            <div className={classes.very_big_container}>
                <div className={classes.big_container} onClick={(e) => e.stopPropagation()}>
                        <div className={classes.left_container} >
                                <img src={Photo.WTwf} alt="Logo" />
                                    <div className={classes.container} >
                                    <p>Добро пожаловать!<br/>
                                    <span><strong>Войдите в свой аккаунт</strong></span></p>
                                        <div className={classes.forma}>
                                            <p>E-mail</p>
                                            <input id="email" type="email" placeholder="E-mail" autoComplete="email"/>
                                            <p>Пароль</p>
                                            <input id="email" type="email" placeholder="Пароль" autoComplete="email"/>
                                        </div>
                                        <div>
                                            <input type="checkbox"/>
                                            
                                        </div>
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