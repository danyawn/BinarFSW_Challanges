import Banner from '@/components/Banner'
import { fetchData } from '@/store/app/data'
import { styles } from '@/styles/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.reducer.data)
    console.log('store', store)




    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])


    return (
        <>
            <Banner />
            {/* Input Form */}
            <div className="flex gap-4 justify-center items-center w-full ">
                <div className="w-[60%] bg-white shadow-xl items-center flex gap-4 p-7 mt-5 rounded-lg absolute">
                    <div className="">
                        <label for="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tipe Driver</label>
                        <select id="available" className={`${styles.field}`}>
                            <option selected>Pilih Tipe Driver</option>
                            <option value="true">Dengan Kunci</option>
                            <option value="false">Tanpa Kunci</option>
                        </select>
                    </div>
                    <div className="">
                        <label for="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tanggal</label>
                        <input type="date" className={`${styles.field}`} />
                    </div>
                    <div className="">
                        <label for="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Waktu Jemput/Ambil</label>
                        <select id="available" className={`${styles.field}`}>
                            <option selected>Pilih Waktu Jemput</option>
                            <option value="US">08.00 WIB</option>
                            <option value="US">08.30 WIB</option>
                            <option value="US">09.00 WIB</option>
                            <option value="US">10.30 WIB</option>
                            <option value="US">12.00 WIB</option>
                            <option value="US">12.30 WIB</option>
                            <option value="US">13.00 WIB</option>
                        </select>
                    </div>
                    <div className="">
                        <label for="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Jumlah Seat</label>
                        <input type="number" className={`${styles.field}`} />
                    </div>
                    <button className={`${styles.buttonStyle} h-14`}>Cari Mobil</button>
                </div>
            </div>
        </>
    )
}

export default index