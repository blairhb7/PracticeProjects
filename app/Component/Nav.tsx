import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <ul className=" flex justify-between p-10">
            <Link href={'/'}><li className=' text-3xl font-bold z-40 bg-white px-5 rounded-lg'>Home Page</li></Link>
            <Link href={''}><li className=''></li></Link>
        </ul>
    </div>
  )
}

export default Nav