import './style.css'
import logo from '../../assets/images/logo.png'
import CartIcon from '../../assets/icons/Cart.png';
import LateralBar from '../LateralBar'

const navBar = () => {
    return ( 
        <nav className="navbar">
            <img className="Logo" src= {logo} alt="logo"/>
            <a href="http://"><h2>Método de Entrega</h2></a>
            <div className="search">
                <span>
                    <i className="fa fa-search"></i>
                </span>
                <input type="text" placeholder="Pesquisar produtos"/>
            </div>
            <a ><img onClick={LateralBar} src={CartIcon} alt="Cart Icon"/></a>
        </nav>
     );
}
 
export default navBar;