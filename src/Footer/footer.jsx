import classes from '../Footer/footer.module.scss'
import { Photo } from "../Photo.js"
export default function Footer() {
  return (
    <>
   <footer>
        <div className={classes.big_container}>
             <div className={classes.right_container1}>
                    <div className={classes.right_container2}>
                              <div className={classes.kolonka}>
                                  <h2>Топ категории</h2>
                                  <ul>
                                      <li>Тексты и переводы</li>
                                      <li>Разработка</li>
                                      <li>Дизайн</li>
                                      <li>Аудио, видео монтаж</li>
                                      <li>Соцсети и реклама</li>
                                      <li>Бизнес и жизнь</li>
                                      <li>SEO и оптимизация</li>
                                  </ul>
                              </div>

                              <div className={classes.kolonka}>
                                  <h2>О Проекте</h2>
                                  <ul>
                                      <li>О Нас</li>
                                      <li>Как Это Работает</li>
                                      <li>Политика Приватности</li>
                                      <li>Правила Пользования </li>
                                      <li>Пресса о нас</li>
                                  </ul>
                              </div>

                              <div className={classes.kolonka}>
                                  <h2>Поддержка</h2>
                                  <ul>
                                      <li>Контакты</li>
                                      <li>Политика Безопасности</li>
                                      <li>FAQ</li>
                                  </ul>
                              </div>
                        </div>
                        <div className={classes.niz}><p>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p></div>
                        </div>
            <div className={classes.left_container}>
                <h2>Follow</h2>
                <div className={classes.foto}>
                <img src={Photo.Group}/>
                <img src={Photo.ant}/>
                <img src={Photo.Grouwd}/>
                <img src={Photo.entypo}/>
                </div>   
            </div>
    </div>
   </footer>
    </>
  )
}