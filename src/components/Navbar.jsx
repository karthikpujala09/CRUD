// import React from "react";
// class Navbar extends React.Component{
//     render(){
//         return(
//             <div className="Navbar">
//                 <h1>Good Morning</h1>
//             </div>
//         )
//     }
// }

// export default Navbar;
import React from "react"
import Logo from './Logo'
import Menu from './Menu'
import Styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <section id={Styles.navBlock}>
            <article>
                <Logo />
                <Menu />
            </article>
        </section>
    )
}
export default Navbar