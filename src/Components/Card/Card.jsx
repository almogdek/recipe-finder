import FoodExample from '../../assets/FoodExample.jpg'

function Card() {
    return (
        <>
            <div className='flex flex-row w-[50%] p-2 bg-neutral-900 rounded-[1rem] '>
                <img src={FoodExample} className='w-50 h-50 object-cover object-center mr-5 rounded-[.5rem]'  alt=''/>
                <div className=''>
                    <h1>Steaky Steak steak</h1>
                    <p className='text-left'>
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