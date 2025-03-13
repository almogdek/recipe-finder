import Card from '../Components/Card/Card.jsx'
import SearchBar from "../Components/SearchBar/SearchBar.jsx";

import './Pages CSS/Home.css'

function Home() {
    return(
        <div className='h-full flex flex-col w-[60%]'>
            <SearchBar />
            <div className="flex-grow overflow-y-auto overflow-x-hidden ScrollBar first:mt-0 shadow-inner">
                <Card />
                <Card />

            </div>
        </div>
    )
}
export default Home