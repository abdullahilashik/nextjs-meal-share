import Link from 'next/link'
import React from 'react'

const NavLink = ({url, label}) => {
  return (
    <Link className='p-4 hover:bg-gray-100 rounded duration-200' href={url}>{label}</Link>
  )
}

export default NavLink