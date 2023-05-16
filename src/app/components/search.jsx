// import { useRef } from "react";

const SearchBar = () => {

    // const clickPoint = useRef();
    const handleFocus = () => {
        // clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        // clickPoint.current.style.display = "block";
    };

    return (
        <div className="items-center p-4 flex justify-center" >
           
                
                <input
                    type="text"
                    className="block p-2  text-gray-900 bg-gray-50 rounded-lg  focus:pl-3 mr-3 w-80"
                    placeholder="Search Here..."
                   
                />
                <button type="button" className="text-black bg-[#60E0D4] focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2">
                     Search
                 </button>
            
        </div>
    );
}

export default SearchBar