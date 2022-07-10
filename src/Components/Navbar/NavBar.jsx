import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const categories = [
        { name: "Home", id: 0, route: '/'},
        { name: "Productos", id: 1, route: '/products'}
    ]
    return (
      <div className="flex justify-center items-center bg-teal-700 py-3">
        <div className=" flex w-11/12 justify-between items-center">
            <Link to="/">
                <img className="hover:bg-teal-900 h-24 w-28" src={logo} alt="" />
            </Link>
            <h1 className=" text-white font-semibold text-3xl">PC Prodsumia</h1>

            <nav className="flex gap-6 cursor-pointer text-white font-semibold">
                {categories.map((category) => (
                <Link
                    className="hover:bg-teal-900 p-5 text-xl"
                    Key={category.id}
                    to={category.route}
                >
                    {category.name}
                </Link>
                ))}
            </nav>
            <Link to='/cart'>
                <CartWidget />
            </Link>
        </div>
      </div>
    );
}

export default NavBar

