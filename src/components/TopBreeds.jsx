import React from 'react'

const TopBreeds = () => {
    
    const breeds = ["Deshi", "Sahiwal", "Brahman", "Friesian"];

    return (
        <div className='py-16 bg-gray-100'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold mb-8'>Top Breeds</h2>

            <div className='flex flex-wrap justify-center gap-4'>
            {breeds.map((breed, index) => (
                <span
                key={index}
                className='bg-green-600 text-white px-5 py-2 rounded-full shadow'
                >
                {breed}
                </span>
            ))}
            </div>
        </div>
        </div>
    )
}

export default TopBreeds