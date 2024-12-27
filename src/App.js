import React, { useState } from "react";
import CountryList from "./CountryList";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [regionFilter, setRegionFilter] = useState(""); // State for region filter

  return (
    <div className="bg-white min-h-screen">
      
      <header className="bg-white text-white mb-5 p-6 shadow-md shadow-black">
       

        <div className="pl-2 mt-4">
          <h1 className="text-2xl md:text-4xl font-bold text-black">Where in the World</h1>
        </div>
      </header> <br></br>
       <div className=" flex flex-wrap items-center justify-between mb-5  ">
          <div className="w-full md:w-auto md:absolute md:top-30 md:left-6 mb-4 md:mb-0 shadow-md shadow-grey">
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full md:w-64 px-4 py-2 rounded-md text-gray-700"
              value={searchTerm} // Bind to search term state
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
            />
          </div>

          <div className="w-full md:w-auto md:absolute md:top-30 md:right-6 shadow-md shadow-grey">
            <select
              className="w-full md:w-40 px-4 py-2 rounded-md text-gray-700"
              value={regionFilter} // Bind to region filter state
              onChange={(e) => setRegionFilter(e.target.value)} // Update region filter state
            >
              <option value="" disabled>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>                
        </div>
      

      <main className="p-6">
        <CountryList searchTerm={searchTerm} regionFilter={regionFilter} />
      </main>
    </div>
  );
}

export default App;