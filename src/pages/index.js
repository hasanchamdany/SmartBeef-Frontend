import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DefaultLayout from '@/components/DefaultLayout/DefaultLayout'
import bannerMain from '../../public/images/SmartBeef banner main.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="flex w-full h-screen landingPage-bg">
          <div>
            {/* image */}
            <div className='flex flex-row mt-32 mx-8'>
              <div className='flex flex-col'>
                <h1 className="font-serif-inter text-8xl text-blue-welcome mt-16">Welcome to Smart Beef</h1>
                <Link href = '/scan'>
                  <button class="rounded-full bg-white text-black h-8 w-1/4 mt-16 mx-32" href="/scan" >Scan Now!</button>
                </Link>
                
              </div> 
              <Image src={bannerMain} alt="SmartBeef Banner" className='h-1/2 w-1/2 self-end'/>

            </div>
            {/* heading */}

            <div>
              {/* title */}
              <div className="container mx-auto px-4">
                          

              </div>

              {/* button  */}
              <button>

              </button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
