import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='container mx-auto px-4 flex flex-col min-h-screen'>
      <Head>
        <title>青木晃也 MFT2022 | Home</title>
        <meta name="description" content="青木晃也 MFT2022用ページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex-grow'>
        <img src='/MFT2022round.gif' className='w-60 mx-auto mt-10' alt='Maker Faire Tokyo 2022 Logo'></img>
        <h1 className='text-3xl font-bold py-10 text-center'>
          Maker Faire Tokyo 2022<br/>展示内容紹介
        </h1>

        <div className='text-center'>
          出展者名: 青木晃也
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 m-5 text-left w-fit mx-auto'>
          <Link href='/hodai'>
            <a className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 transform transition duration-500 hover:scale-110">
              <div className="p-5">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  固定砲台型射的ゲームHODAI
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">固定砲台を操作して遊ぶ射的ゲーム</p>
              </div>
            </a>
          </Link>

          <Link href='/sshelf'>
            <a className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 transform transition duration-500 hover:scale-110">
              <div className="p-5">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  SShelf
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">中にいれたものを記録・検索できる棚</p>
              </div>
            </a>
          </Link>
        </div>
      </main>
      
      <Footer/>

    </div>
  )
}

export default Home
