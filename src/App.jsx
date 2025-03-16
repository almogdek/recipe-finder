import { Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar.jsx'

import Favorites from './Pages/Favorites.jsx'
import Home from './Pages/Home'
import Recipes from './Pages/Recipes'

function App() {
    return (
        <>
            <nav className='shadow-black '>
                <NavBar />
            </nav>
            <main className='Pages h-full w-full'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/Recipes" element={<Recipes />} />
                </Routes>
            </main>
        </> 
    )
}

export default App
