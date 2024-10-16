"use client";

import React from 'react'
import MealImagePreview from './image-preview';
import MealSubmitButton from './meal-submit-button';
import {useFormState}  from 'react-dom';
import { shareMealAction } from '@/lib/actions';

const MealShareForm = () => {
    const [state, formAction] = useFormState(shareMealAction, {errors: null})
    console.log('State: ', state);
  return (
    <div className='mt-12'>
        <form action={formAction} className='space-y-4 max-w-4xl grid grid-cols-2 shadow p-12 mx-auto gap-4'>
            {/* name of the meal */}
            <div className="flex flex-col item-start gap-2 col-span-2">
                <label htmlFor="title">Meal Title</label>
                <input type="text" className='border-2 border-gray-200 p-2 rounded shadow' name='title' placeholder='What is the name of your meal?' />
                {state?.errors?.title && <span className='text-red-600'>{state?.errors.title}</span>}
            </div>
            {/* donation name */}
            <div className="flex flex-col item-start gap-2">
                <label htmlFor="title">Name</label>
                <input type="text" className='border-2 border-gray-200 p-2 rounded shadow' name='name' placeholder='Who is being so generous?' />
                {state?.errors?.name && <span className='text-red-600'>{state?.errors.name}</span>}
            </div>
            {/* donation email */}
            <div className="flex flex-col item-start gap-2">
                <label htmlFor="title">Email</label>
                <input type="email" className='border-2 border-gray-200 p-2 rounded shadow' name='email' placeholder='Doner email address?' />
                {state?.errors?.email && <span className='text-red-600'>{state?.errors.email}</span>}
            </div>
            {/* summary of the meal */}
            <div className="flex flex-col item-start gap-2 col-span-2">
                <label htmlFor="summary">Summary</label>
                <input type="text" className='border-2 border-gray-200 p-2 rounded shadow' name='summary' placeholder='Would you like to add some summary?' />
                {state?.errors?.summary && <span className='text-red-600'>{state?.errors.summary}</span>}
            </div>
            {/* instructions */}
            <div className="flex flex-col item-start gap-2 col-span-2">
                <label htmlFor="title">Instructions</label>
                <textarea className='border-2 border-gray-200 p-2 rounded shadow' name='instructions' placeholder='How did you prepared it? Use HTML' rows={6}></textarea>
                {state?.errors?.instructions && <span className='text-red-600'>{state?.errors.instructions}</span>}
            </div>
            <MealImagePreview />
            {/* {state?.errors?.image && <span className='text-red-600'>{state?.errors.image}</span>} */}
            <MealSubmitButton />
        </form>
    </div>
  )
}

export default MealShareForm