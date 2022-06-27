// import logo from '../../src/assets/logo.png'
import logo6 from '../../src/assets/logo-6.png'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className = 'flex justify-center items-center bg-teal-700 py-3'>
            <div className=' flex w-11/12 justify-between items-center'>
                <img className = 'h-24 w-28' src={logo6} alt="" />
                <h1 className = ' text-white font-semibold text-3xl'>PC Prodsumia</h1>
                <ul className = 'flex gap-6 cursor-pointer text-white font-semibold'>
                    <li className='hover:bg-teal-900 p-5 text-xl'>Inicio</li>
                    <li className='hover:bg-teal-900 p-5 text-xl'>Productos</li>
                    <li className='hover:bg-teal-900 p-5 text-xl'>Contacto</li>
                </ul>
                <CartWidget /> 
            </div>
        </nav>
    )
}

export default NavBar

