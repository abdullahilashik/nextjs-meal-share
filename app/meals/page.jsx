import React from 'react'
import { PrismaClient } from '@prisma/client'
import Image from 'next/image';
import MealGridItem from '@/components/meal/meal';

const prisma = new PrismaClient();

export const metadata = {
  title: 'Meals'
}

const MealPage = async () => {
  const meals = await prisma.meal.findMany();
  console.log('Meals: ', meals);
  return (
    <div className='grid grid-cols-4 gap-4 mt-12'>
        {
          meals.map(meal=> (
            <MealGridItem meal={meal} key={meal.id} />
          ))
        }
    </div>
  )
}

export default MealPage