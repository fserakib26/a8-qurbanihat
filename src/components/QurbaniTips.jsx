import React from 'react'

const QurbaniTips = () => {
  return (
    <div className='bg-white py-16'>
        <div className='max-w-5xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Qurbani Tips
        </h2>

        <div className='grid md:grid-cols-3 gap-6 text-center'>
          <div className='p-6 rounded-xl shadow'>
            <h3 className='font-semibold text-lg mb-2'>Health Check</h3>
            <p className='text-gray-600'>
              Always inspect animal health before buying.
            </p>
          </div>

          <div className='p-6 rounded-xl shadow'>
            <h3 className='font-semibold text-lg mb-2'>Proper Weight</h3>
            <p className='text-gray-600'>
              Ensure the animal meets Qurbani requirements.
            </p>
          </div>

          <div className='p-6 rounded-xl shadow'>
            <h3 className='font-semibold text-lg mb-2'>Trusted Seller</h3>
            <p className='text-gray-600'>
              Buy only from verified sellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QurbaniTips