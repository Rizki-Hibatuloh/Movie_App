const Navbar = () => {
    return (
      <nav className="w-full bg-orange-500 text-white py-3">
        <div className="container mx-auto flex justify-between items-center px-12">
          <h1 className="text-xl font-bold">FinProH8</h1>
          <form className="flex items-center">
            <div className="flex">
              <input
                type="text"
                className="form-control border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-gray-500"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700"
                type="button"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  