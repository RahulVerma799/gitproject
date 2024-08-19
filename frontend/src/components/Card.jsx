import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="w-72 h-48 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
