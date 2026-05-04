import AnimalsCard from '@/components/AnimalsCard'
import React from 'react'

const AllAnimalsPage = async () => {
    const res = await fetch('https://a8-qurbanihat.vercel.app/data.json')
    const animals = await res.json()
  return (
    <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8 mt-6'>All Animals</h1>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-6'>
            {animals.map(animal=> <AnimalsCard key={animal.id} animal={animal}/>)}
        </div>
    </div>
  )
}

export default AllAnimalsPage