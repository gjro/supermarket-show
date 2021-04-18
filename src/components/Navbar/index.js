import './style.css'
import logo from '../../assets/images/logo.png'

const navBar = () => {
    return ( 
        <nav className="navbar">
            <img src= {logo} alt="." srcset=""/>
            <a href="http://"><h2>Método de Entrega</h2></a>
            <div className="search">
                <span>
                    <i className="fa fa-search"></i>
                </span>
                <input type="text" placeholder="Pesquisar produtos"/>
            </div>
            <i className="Cart-icon"></i>
        </nav>
     );
}
 
export default navBar;