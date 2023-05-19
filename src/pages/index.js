import Banner from '@/components/Banner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Layanan from '@/components/Layanan'
import RentNow from '@/components/RentNow'
import Testimonial from '@/components/Testimonial'
import Why from '@/components/Why'
import { fetchData } from '@/store/app/data'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {



  return (
    <div>
      {/* <Link href={'/search'}></Link> */}
      <Banner isButton={true} />
      <Layanan />
      <Why />
      <Testimonial />
      <RentNow />
      <FAQ />
    </div>
  )
}

export default index