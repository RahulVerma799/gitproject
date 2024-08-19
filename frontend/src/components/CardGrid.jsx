import React from 'react';

const CardGrid = () => {
    const cards = [
        { title: 'Branches', description: 'Abstract Branches lets you manage, version, and document your designs in one place.' },
        { title: 'Manage your account', description: 'Configure your account settings, such as your email, profile details, and password.' },
        { title: 'Manage organizations, teams, and projects', description: 'Use Abstract organizations, teams, and projects to organize your people and your work.' },
        { title: 'Manage billing', description: 'Change subscriptions and payment details.' },
        { title: 'Authenticate to Abstract', description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.' },
        { title: 'Abstract support', description: 'Get in touch with a human.' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-32 bg-gray-50">
            {cards.map((card, index) => (
                <div 
                    key={index} 
                    className="w-120 h-48 bg-gray-100 shadow-md rounded-lg p-4 flex flex-col justify-between border border-gray-500 divide-y"
                    
                >
                    <h3 className="text-lg font-semibold text-gray-800 text-center  divide-y mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm  divide-y">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;
