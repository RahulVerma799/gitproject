import React, { useState } from 'react';
import { SiAbstract } from "react-icons/si";

const Header = () => {
    // State to manage form visibility and input values
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Toggle the form visibility
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const cardData = { title, description };
    
        try {
            const response = await fetch('http://localhost:3000/api/ping', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cardData),
            });
    
            const result = await response.json();
            console.log('Server response:', result);
    
            // Assuming the server sends a success message in the JSON response
            if (result.success) {
                setTitle('');
                setDescription('');
                setIsFormVisible(false); // Hide form after successful submission
                alert('Card created successfully!');
            } else {
                alert('Failed to create card: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };
    

    return (
        <header className="flex flex-col items-center m-1 p-6 bg-black shadow-md rounded-t-lg">
            <div className="w-full flex justify-between items-center mb-6">
                <h1 className="text-xl px-12 text-white inline-flex items-center">
                    <SiAbstract className='mr-2' />Abstract | Help Center
                </h1>
                <button
                    onClick={toggleFormVisibility}
                    className="bg-slate-900 mr-20 text-white py-2 px-9 border border-gray-500 rounded-md"
                >
                    Submit a request
                </button>
            </div>

            {/* Conditionally render the form */}
            {isFormVisible && (
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 text-black rounded-md border border-gray-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 text-black rounded-md border border-gray-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            )}
        </header>
    );
};

export default Header;
