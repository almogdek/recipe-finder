import SearchIcon from '../../assets/search icon.svg'

function SearchBar() {
    return (
        <div className='flex w-[100%] ml-5  SecondaryColor px-5 dark py-2 rounded-xl '>
            <input type={'text'} placeholder={'Search...'} className='flex-[1] outline-none' />
            <button type='submit'>
                <img src={SearchIcon} alt="Search" className='w-7' />
            </button>
        </div>
    )
}
export default SearchBar