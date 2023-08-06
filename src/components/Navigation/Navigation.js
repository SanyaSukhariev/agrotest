import { Link } from "react-router-dom";
import classes from './Navigation.module.css'




export function Navigation(){
    
    return(
        <div >
            <div className={classes.topnav}>
            <Link className={classes.logo} to='/'>
            <img className={classes.img} src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="" /> 
                Analitinform 
            </Link>
            <Link to ='/abouteCompany'>Про компанію</Link>
            <Link to='/feedAdditives'>Кормові добавки</Link>
            <Link to='/veterinary'>Ветеринарія</Link>
            <Link to='/pets'>Домашні тварини </Link>
            <Link to='/infoPage'>Інформація</Link>
            <Link to='/partners'>Партнери</Link>
            <Link to='/contacts'>Контакти</Link>
        </div>
        </div>
        
        // <div className={classes.navPanel}>
        //     <nav className={classes.nav}>
        //             <li className={classes.navItem}>
        //                     <Link 
                                   
        //                             to='/aboutCompany'>
        //                             <img 
        //                             className={classes.image}
        //                             src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" 
        //                             alt="logo" 

        //                             /> 
        //                             Analitinform 
        //                     </Link>

        //                     <div className={classes.dropdownMenu}>
        //                         <div className={classes.dropdownItem} onClick={() => handleOptionClick('Option 1')}>Option 1</div>
        //                         <div className={classes.dropdownItem} onClick={() => handleOptionClick('Option 2')}>Option 2</div>
        //                      </div>
        //             </li>

        //             <li  className={classes.navItem}>
        //                     <Link to ='/aboutCompany'>Про компанію</Link>
        //             </li>
        //             <li  className={classes.navItem}>
        //                     <Link to='/feedadditives'>Кормові добавки</Link>
        //             </li>
        //             <li  className={classes.navItem}>
        //                     <Link to='vet'>Ветеринарія</Link>
        //             </li>
        //             <li  className={classes.navItem}>
        //                      <Link to='info'>Інформація</Link>
        //             </li>
        //             <li  className={classes.navItem}>
        //                     <Link to='partners'>Партнери</Link>
        //             </li>
        //             <li  className={classes.navItem}>
        //                     <Link to='contacts'>Контакти</Link>
        //             </li>
              
        //     </nav>

        // </div>
        
        
    )
}