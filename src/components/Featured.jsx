import React from 'react'
import AnimalsCard from './AnimalsCard';

const Featured = async () => {
  const res = await fetch('https://a8-qurbanihat.vercel.app/data.json');
  const featuredAnimal = await res.json();
  const animals = featuredAnimal.slice(0, 4)

  return (
    <div className='max-w-7xl mx-auto pt-10 pb-5'>
        <h1 className='text-center text-4xl font-bold mb-10'>Featured Animals</h1>

        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-6'>
          {animals.map(animal=> <AnimalsCard key={animal.id} animal={animal} /> )}
        </div>
       
    </div>
  )
}

export default Featured