import Card from '../Components/Card/Card.jsx'
import SearchBar from "../Components/SearchBar/SearchBar.jsx";

import './Pages CSS/Home.css'

function Home() {
    return(
        <>
            <SearchBar />
            <div className='h-[99%] flex w-[60%] flex-col'>
                <div className=" h-100% flex-grow overflow-y-auto overflow-x-hidden ScrollBar first:mt-0 shadow-inner">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}
export default Home