import React from 'react'
import { PrismaClient } from '@prisma/client'
import Image from 'next/image';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export const generateMetadata = async ({params}) => {
  const meal = await prisma.meal.findFirst({
    where: {
      slug: params.slug
    }
  })
  if(!meal){
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary
  }
}


const MealDetailsPage = async ({params}) => {
  const meal = await prisma.meal.findFirst({
    where: {
      slug: params.slug
    }
  })
  if(!meal){
    notFound();
  }
  return (
    <div className='p-12'>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <Image src={meal.image} width={320} height={200} alt={meal.title} className='w-full rounded' />
            <p>Shared by <strong>{meal.donator_name}</strong></p>
          </div>
          <div className="flex flex-col gap-8">
              <h1 className="text-xl">{meal.title}</h1>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg px-4 py-2 rounded bg-teal-200/10"># Summary</h4>
                <pre>{meal.summary}</pre>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg px-4 py-2 rounded bg-teal-200/10"># Instructions</h4>
                <pre>{meal.instructions}</pre>
              </div>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealDetailsPage