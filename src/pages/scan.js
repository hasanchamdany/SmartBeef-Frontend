import Image from 'next/image'
import DefaultLayout from '@/components/DefaultLayout/DefaultLayout'
import React from 'react'
import Scan from "../components/Scan"
import bannerScan from '../../public/images/SmartBeef banner scan.png'

const scan = () => {
  return (
    <>
        <DefaultLayout>
            <div className="flex w-full h-screen scanPage-bg ">
              <div>
                <div className='w-screen justify-center mt-32 mx-8'>
                  <h1 className='text-center font-semibold text-scan font-serif-inter text-6xl'>Scan with Smart Beef</h1>
                </div>

                <div className='flex flex-row justify-end mt-16 mx-32'>
                  {/* <Scan/>*/}
                  <Image src={bannerScan} className='h-1/4 w-1/4'/>

                </div>
              </div>
            </div>
        </DefaultLayout>
    </>
  )
}

export default scan