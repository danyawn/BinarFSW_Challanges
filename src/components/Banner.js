import { styles } from '@/styles/styles'
import Link from 'next/link'
import React from 'react'

const Banner = ({ isButton }) => {
    return (
        <div className=' w-full flex flex-col justify-center items-center px-2 bg-main-grey overflow-x-hidden'>
            <div className="w-full max-w-[1440px] lg:flex-row sm:flex-col flex justify-center items-center">
                <div className='w-[40%] flex flex-col justify-center items-start gap-3'>
                    <h2 className='text-3xl font-semibold'>
                        Sewa & Rental Mobil Terbaik di Kawasan Yogyakarta!
                    </h2>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    {
                        isButton && <Link href={'/search'} className={`${styles.buttonStyle}`}>Cari Mobil</Link>
                    }
                </div>
                <div className='w-[60%] relative flex items-end justify-end'>
                    <img src="./assets/cars.png" alt="car" className='z-20' />
                    <div className="bg-dark-blue w-full h-[230px] rounded-tl-[130px] z-0 absolute left-12"></div>
                </div>
            </div>
        </div>
    )
}

export default Banner