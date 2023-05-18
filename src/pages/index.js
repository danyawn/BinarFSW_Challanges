import { fetchData } from '@/store/app/data'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {



  return (
    <div>
      <p>Landing Page</p>
      <Link href={'/search'}>Search</Link>
    </div>
  )
}

export default index