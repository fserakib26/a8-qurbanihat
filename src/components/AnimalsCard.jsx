import React from 'react'

const AnimalsCard = ({animal}) => {
  return (
    <div key={animal.id}
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
            
          </div>
  )
}

export default AnimalsCard