import React from 'react'

export const metadata = {
    title: 'Meal not Found'
}

const MealNotFound = () => {
  return (
    <div className='p-12 grid place-content-center text-4xl uppercase font-light opacity-40'>The meal you are looking for does not exists!</div>
  )
}

export default MealNotFound