import logo from '../../assets/images/logo.png'
import './style.css'

export default function Footer (){
    return (
        <>
            <div className="Footer">
                <img className="Logo" src= {logo} alt="logo"/>
                <p>Desenvolvido por Gilberto Junior</p>
            </div>
        </>
    )
}