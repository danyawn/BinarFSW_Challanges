import Banner from '@/components/Banner'
import Card from '@/components/Card'
import { fetchData } from '@/store/app/data'
import { styles } from '@/styles/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.reducer.data)
    // console.log('store', store)
    const [seat, setSeat] = useState()
    const [avail, setAvail] = useState()
    const [filter, setFilter] = useState([])
    const [isAvail, setIsAvail] = useState()
    const [isCapacity, setIsCapacity] = useState()

    const hanlderSeat = (e) => {
        setSeat(e.target.value)
        setIsCapacity(true)
    }

    // console.log('is avail', isAvail)

    const handlerAvail = (e) => {
        // console.log('e data', e.target.value);
        if (e.target.value == 'true') {
            setAvail(true)
            setIsAvail(true)
        } else if (e.target.value == 'false') {
            setAvail(false)
            setIsAvail(true)
        }
    }



    const handlerFilter = () => {
        let data;
        if (isAvail && isCapacity === false) {
            data = store.filter((item) => item.available == avail)
        } else if (isCapacity && isAvail === false) {
            data = store.filter((item) => item.capacity >= seat)
        } else {
            data = store.filter((item) => item.available === avail && item.capacity >= seat)
        }
        setFilter(data)
        setIsAvail(false)
        setIsCapacity(false)
    }

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    // console.log('filter', filter)


    return (
        <>
            <Banner />
            {/* Input Form */}
            <div className="flex gap-4 justify-center items-center w-full mb-28 ">
                <div className="w-[60%] bg-white shadow-xl items-center flex-col sm:flex-row lg:flex-row flex gap-4 p-7 mt-5 rounded-lg absolute">
                    <div className="">
                        <label for="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tipe Driver</label>
                        <select id="available" onChange={(e) => handlerAvail(e)} className={`${styles.field}`}>
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
                        <input type="number" className={`${styles.field}`} onChange={(e) => hanlderSeat(e)} />
                    </div>
                    <button onClick={handlerFilter} className={`${styles.buttonStyle} h-14 flex items-center justify-center`}>Cari Mobil</button>
                </div>
            </div>


            {/* card */}
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    filter.length > 0 ?
                        filter?.map((item, index) => (
                            <>

                                <Card data={item} />
                            </>
                        ))
                        :
                        <>
                            <p>Data Tidak Ada!</p>
                        </>
                }
            </div>
        </>
    )
}

export default index