import { Component } from "react";
import "./index.css";
import {MenuItemsT2} from "./MenuItemsT2";
import { Link } from "react-router-dom";

class NavbarT1 extends Component{
    state={clicked: false};
    handleClick=()=>{
        this.setState({ clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>

                <div className="menu-icons" onClick=
                {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                    
                </div>

                <ul className={this.state.clicked ? "nav-menu.active": "nav-menu"}>{MenuItemsT2.map((item,index)=>{
                    return(<li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>{item.title}
                        </Link> 
                    </li>)
                })}
                <button>Sign Up</button>

                </ul>
            </nav>
        )

    }
  
}
export default NavbarT1;
   