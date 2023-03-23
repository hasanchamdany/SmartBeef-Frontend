import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DefaultLayout from '@/components/DefaultLayout/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="w-full h-screen landingPage-bg">

        </div>
      </DefaultLayout>
    </>
  )
}
