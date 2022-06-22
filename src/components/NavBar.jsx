import logo from '../../src/imagenes/logo.png'
import Cart from './CartWidget'
//import'./NavBar.css'

const NavBar = () => {
    return (
        <header style = {styles.container}>
        <img style = {styles.logo} src={logo} alt="" />
        <h1 style = {styles.titulo}>PC Prodsumia</h1>
        <nav style = {styles.navBar}>
            <a style = {styles.anchors} href="#">Categoria 1</a>
            <a style = {styles.anchors} href="#">Categoria 2</a>
            <a style = {styles.anchors} href="#">Categoria 3</a>
        </nav>
        <Cart /> 
        </header>
    )
}

export default NavBar

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        border: 'solid',
    },
    navBar:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    titulo:{
        color: '#006dff',
    },
    logo:{
        height: 50,
        width: 100,
    },
    carrito:{
        height: 30,
        width: 30,
    },
    anchors:{
        margin: 10,
    }
}