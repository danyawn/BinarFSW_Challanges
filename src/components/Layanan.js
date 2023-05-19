import React from 'react'

const Layanan = () => {

    const data = [
        'Sewa Mobil Dengan Supir di Bali 12 Jam',
        'Sewa Mobil Lepas Kunci di Bali 24 Jam',
        'Sewa Mobil Jangka Panjang Bulanan',
        'Gratis Antar - Jemput Mobil di Bandara',
        'Layanan Airport Transfer / Drop In Out'
    ]
    return (
        <div className='max-w-[1440px] w-full'>
            <div className="flex gap-5 justify-center items-center h-screen md:flex-col lg:flex-row ">
                <div className=" w-[50%] flex justify-center items-center">
                    <img src="./assets/img_service.png" alt="img_service" />
                </div>
                <div className="flex w-[50%] flex-col gap-4 justify-center items-start">
                    <h2 className='text-3xl font-semibold'>
                        Best Car Rental for any kind of trip in Yogyakarta!
                    </h2>
                    <p>
                        Sewa mobil di Yogyakarta bersama Binar Rental Car jaminan harga lebih murah dibandingkan yang lain, kondisi baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, metting, dll
                    </p>
                    <div className='flex flex-col gap-4'>
                        {
                            data.map((item) => (
                                <>
                                    <div className="flex gap-4">
                                        <img src="./assets/checklist.png" alt="" className='w-6 h-4 ' /> {item}
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Layanan