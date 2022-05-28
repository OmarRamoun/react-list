const Search = ({ items, setItems, setSearch, ...props }) => {

  const searchFor = text => {
    setItems(prev => {
      return prev.filter(item => item.content.toLowerCase().includes(text.toLowerCase()))
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    searchFor(e.target.children[1].value);
  }

  const handleSearch = (e) => {
    setItems(prev => JSON.parse(localStorage.getItem("todos")))
    setSearch(e.target.value);
    searchFor(e.target.value);
  };

  return (
    <div className="container px-5 py-2 flex flex-wrap mx-auto items-center">
      <div className="flex max-w-xl mx-auto w-full md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative w-full sm:mr-4 mr-2">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search </label>
            <input {...props} onBlur={handleSearch} onChange={handleSearch} placeholder="Search?" type="search" id="search" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-indigo-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search;
