import MealShareForm from '@/components/share/meals-form'
import React from 'react'

export const metadata = {
  title: 'Meal Share'
}

const MealPage = () => {
  return (
    <div className='container mx-auto'>
      <div className="p-4">
        <div className="flex items-start flex-col">
          <h1 className='text-xl font-semibold uppercase'>Meal Share</h1>
          <p className="max-w-4xl font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum ex numquam? Exercitationem aliquam dolore illum eum quod ad culpa, ex omnis, harum, quia sint voluptas labore quasi porro delectus.</p>
        </div>
        <MealShareForm />
      </div>
    </div>
  )
}

export default MealPage