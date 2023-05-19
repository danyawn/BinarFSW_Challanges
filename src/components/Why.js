import React from 'react'
import IconComplete from '../../public/assets/icon_complete.png'
import IconPrice from '../../public/assets/icon_price.png'
import IconProfesional from '../../public/assets/icon_professional.png'
import IconService from '../../public/assets/icon_24hrs.png'

const Why = () => {

    const content = [
        {
            icon: './assets/icon_complete.png',
            title: 'Mobil lengkap',
            data: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
        },
        {
            icon: './assets/icon_price.png',
            title: 'Harga Murah',
            data: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
        },
        {
            icon: './assets/icon_24hrs.png',
            title: 'Layanan 24 Jam',
            data: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
        },
        {
            icon: './assets/icon_professional.png',
            title: 'Mobil lengkap',
            data: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
        },
    ]
    return (
        <div className='max-w-[1400px] w-full flex items-center justify-center'>

            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className='text-3xl self-start'>
                    Why Us?
                </h1>
                <p className='self-start'>Mengapa harus pilih Binar Rental Car?</p>

                <div className='flex gap-4'>

                    {
                        content.map((item) => (
                            <>
                                <div className="w-[300px] p-7 rounded-xl border-2 border-solid border-slate-400">
                                    <img src={`${item.icon}`} alt="" />
                                    <h3 className='font-semibold'>
                                        {item.title}
                                    </h3>
                                    <p>{item.data}</p>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Why