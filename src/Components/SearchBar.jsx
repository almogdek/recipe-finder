function SearchBar() {
    return (
        <>
            <input type={'text'} placeholder={'Search...'} />
            <button type='submit'>
                <SearchBar />

            </button>
        </>
    )
}
export default SearchBar