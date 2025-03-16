import FoodExample from '../../assets/FoodExample.jpg'
import { getRecipeByQuery} from '../../API/api.js'


function Card() {
    getRecipeByQuery()
    return (
        <>
            <div className='flex flex-row p-2  SecondaryColor rounded-[1rem] m-5 overflow-hidden'>
                <img src='https://placehold.co/50' className='w-50 h-50 object-cover object-center mr-5 rounded-[.5rem]'  alt=''/>
                <div className=''>
                    <h1>Placeholding Placeholder</h1>
                    <p className='text-left SecondaryFontFamily font-thin'>

                    </p>
                </div>
            </div>
        </>
    )
}
export default Card