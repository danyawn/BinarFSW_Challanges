import { styles } from '@/styles/styles'
import React from 'react'

const Navbar = () => {
    const NavContent = [
        {
            label: "Our Services",
        },
        {
            label: "Why Us",
        },
        {
            label: "Testimonials",
        },
        {
            label: "FAQs",
        },
        {
            label: "Register",
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center bg-main-grey'>
            <div className="flex justify-between p-3 items-center max-w-[1440px] w-full">
                <div className='bg-dark-blue w-[100px] h-[34px]'></div>
                <div className="flex gap-7">
                    {
                        NavContent.map((item, index) => (
                            <>
                                <button className={`${index === NavContent.length - 1 ? `font-bold p-2 ${styles.buttonStyle}` : 'hover:scale-110 duration-200'}`}>{item.label}</button>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar