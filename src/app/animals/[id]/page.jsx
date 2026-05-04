import React from 'react'
import BookingForm from "./BookingForm";

const AnimalDetailsPage = async ({params}) => {
    // ID Received from URL
    const {id} = await params;
    // API Called
    const res = await fetch('https://a8-qurbanihat.vercel.app/data.json')
    const animals = await res.json()

    const animal = animals.find(a=> a.id == id)
    

  return (
                 
    <div className="max-w-5xl mx-auto p-6">
        
        <h1 className="text-3xl font-bold mb-6">{animal.name}</h1>
        <div className="grid md:grid-cols-2 gap-6">           
            <div>
            <img
                src={animal.image}
                alt={animal.name}
                width={500}
                height={400}
                className="rounded-xl object-cover"
            />
            </div>

            <div className="space-y-3">
            <p><strong>Type:</strong> {animal.type}</p>
            <p><strong>Breed:</strong> {animal.breed}</p>
            <p><strong>Weight:</strong> {animal.weight} KG</p>
            <p><strong>Age:</strong> {animal.age} Years</p>
            <p><strong>Location:</strong> {animal.location}</p>
            <p><strong>Category:</strong> {animal.category}</p>            
            <p className="text-xl font-semibold text-green-600">
                Price: {animal.price} ৳
            </p>           
            <p className="text-sm text-gray-500">
                Price per KG: {(animal.price / animal.weight).toFixed(2)} ৳
            </p>           
            <BookingForm animal={animal} />
            </div>
        </div>
        
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">
                {animal.description} This premium {animal.breed} breed {animal.type} is well-maintained, 
                healthy, and perfect for Qurbani. It has been raised with proper care 
                and natural food, ensuring good meat quality and good weight. 

                Ideal choice for families looking for a 
                {animal.category === "Large Animal" ? "large" : "small"} and attractive animal.
            </p>
        </div>

    </div> 
  )
}

export default AnimalDetailsPage