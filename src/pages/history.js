import DefaultLayout from '@/components/DefaultLayout/DefaultLayout'
import React from 'react'

const history = () => {
  return (
    <>
        <DefaultLayout>
            <div className="flex w-full h-screen historyPage-bg">
              <div className='w-screen justify-center mt-32 mx-8'>
                <h1 className='text-center font-semibold font-serif-inter text-6xl text-blue-welcome'>Prediction History</h1>
              </div>

          
            </div>
        </DefaultLayout>
    </>
  )
}

export default history