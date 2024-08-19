import React, { useState } from 'react';
import { GoArrowRight } from "react-icons/go";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTitles, setFilteredTitles] = useState([]);

   
    const fetchTitle = async (term) => {
        try {
            const response = await fetch(`http://localhost:3000/api/card/${term}`);
            const result = await response.json();

            if (response.status === 200 && result.success) {
                setFilteredTitles([result.data.title]);
            } else {
                setFilteredTitles([]);
                console.error(result.message);
            }
        } catch (error) {
            console.error('Error fetching title:', error);
            setFilteredTitles([]);
        }
    };

   
    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term) {
            fetchTitle(term);
        } else {
            setFilteredTitles([]);
        }
    };

    return (
        <div className="text-center py-16 bg-purple-200">
            <h2 className="text-7xl font-semibold mb-6">How can we help?</h2>
            <div className="relative w-1/2 mx-auto">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="w-full p-3 text-lg border border-black pr-10"
                />
                <GoArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 pointer-events-none" />

                {/* Display filtered titles */}
                {filteredTitles.length > 0 && (
                    <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md z-10">
                        {filteredTitles.map((title, index) => (
                            <li key={index} className="p-2 text-left cursor-pointer hover:bg-gray-100">
                                {title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
