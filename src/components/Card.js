import { styles } from '@/styles/styles'
import React from 'react'
import { BsFillPersonDashFill, BsPersonFill } from 'react-icons/bs'

const Card = ({ data }) => {
    // console.log("data call", data)
    return (
        <div className=" rounded-xl flex flex-col gap-4 shadow-xl w-[400px] bg-main-grey p-5 ">
            <img src="./assets/mobil1.jpg" alt="cars" />
            <div className='flex justify-between items-center'>
                <p>
                    <span className='font-semibold'>{data.manufacture}</span> {data.model}
                </p>
                <div className='flex gap-2 items-center'>
                    <p>{data.capacity}</p>
                    <BsPersonFill className='text-my-green' />
                </div>
            </div>
            <p>
                {data?.available ? 'Dengan Kunci' : 'Tanpa Kunci (Keyless)'}
            </p>
            <p>
                {'Tipe Kendaraan'} {data.type}
            </p>

            <button className={`${styles.buttonStyle}`}>Checkout</button>

        </div>
    )
}

export default Card