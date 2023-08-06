import classes from './Contacts.module.css'
import imageBg from '../../image/contacts/img.jpg'
import { CompanyName } from "../Footer/CompanyName";

export function Contacts(){
    return(
        <div className={classes.contactsPage}>
                <div className={classes.contactsImage}>
                    <h1>Контакти</h1>
                    <img src={imageBg} alt="imageBg" />
                </div>

                <div className={classes.contactsContent}>

                    <div className={classes.cl}>
                                <h2>КОНТАКТИ</h2>

                                <div>
                                    <p>Сухарєв Олександр</p>
                                    <p> Керівник проекту з кормових <br/>добавок</p>
                                    <a href="tel:+38 (067) 546-15-72">+38(067)546-15-72</a>
                                    <p>Email: sales6apteka95gc.com</p>
                                </div>

                                <div>
                                    <p>Адреса</p>
                                    <p>Харків, вул.Франківська, будинок 14,</p>
                                    <p>ТОВ  “АНАЛІТІНФОРМ”</p>
                                </div>

                                <div>
                                     <p>Поштова адреса</p>
                                    <p>м. Харків, 61110 </p>
                                    <p>ТОВ  “АНАЛІТІНФОРМ”</p>
                                </div>

                                
                    </div>
                   

                   
                    
                </div>
                <CompanyName />
                
        </div>
    )
}
