import FoodExample from '../../assets/FoodExample.jpg'



function Card() {
    return (
        <>
            <div className='flex flex-row w-[95%] p-2 SecondaryColor rounded-[1rem] m-5 scrollbar scrollbar-thumb-green-500 '>
                <img src='https://placehold.co/50' className='w-50 h-50 object-cover object-center mr-5 rounded-[.5rem]'  alt=''/>
                <div className=''>
                    <h1>Placeholding Placeholder</h1>
                    <p className='text-left SecondaryFontFamily font-thin'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad animi dignissimos dolore dolores ducimus eaque illum, incidunt itaque iure labore non, pariatur quae quibusdam reiciendis similique soluta tenetur voluptas.
                    </p>
                </div>
                <div className='flex flex-col justify-evenly ml-5'>

                </div>
            </div>
        </>
    )
}
export default Card