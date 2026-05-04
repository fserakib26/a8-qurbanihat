import React from 'react'

const Featured = async () => {
  const res = await fetch('https://a8-qurbanihat.vercel.app/data.json');
  const featuredAnimal = await res.json();
  const animals = featuredAnimal.slice(0, 4)

  return (
    <div className='max-w-7xl mx-auto pt-10 pb-5'>
        <h1 className='text-center text-4xl font-bold mb-10'>Featured Animals</h1>

        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-6'>
          {animals.map(animal=> <div key={animal.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img
              src={animal.image}
              alt={animal.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{animal.name}</h3>
              <p className="text-green-600 font-bold mt-2">
                {animal.price}
              </p>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                View Details
              </button>
            </div>
            
          </div>)}
        </div>
       
    </div>
  )
}

export default Featured