import Link from 'next/link'
import React from 'react'
import NavLink from './nav-link'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow-md'>
        {/* logo */}
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold uppercase">Meals.share</h1>
        </div>
        {/* menu */}
        <ul className="flex items-center">
            <NavLink label={'Home'} url={'/'} />
            <NavLink label={'Meals'} url={'/meals'} />
            <NavLink label={'Community'} url={'/community'} />            
        </ul>
    </div>
  )
}

export default Header