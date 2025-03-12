import { NavLink } from 'react-router-dom';

import ChefHat from '../../assets/Cheff Hat.svg';

import './NavBar.css';

function NavBar() {

    return (
        <nav className=" fixed top-0 left-0 w-full PrimaryColor px-10 py-2 flex justify-between items-center z-10 PrimaryTextColor border-b-2 border-b-stone-800">
            <NavLink to="/" className="text-3xl font-bold flex flex-row items-center ">
                <img src={ChefHat} alt="logo" className="w-15 h-15" />
                <p className="ml-2 PrimaryTextColor">Recipe Finder</p>
            </NavLink>

            <ul className="flex space-x-[1vw] font-black text-2xl items-center SecondaryTextColor">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `NavBarButton ${isActive ? 'PrimaryTextColor' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Recipes"
                        className={({ isActive }) =>
                            `NavBarButton ${isActive ? 'PrimaryTextColor' : ''}`
                        }
                    >
                        Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Favorites"
                        className={({ isActive }) =>
                            `NavBarButton ${isActive ? 'PrimaryTextColor' : ''}`
                        }
                    >
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
