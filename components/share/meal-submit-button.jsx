"use client";
import React from 'react'
import {useFormStatus} from 'react-dom';

const MealSubmitButton = () => {
  const {pending} = useFormStatus();

  return (
    <button disabled={pending} className='col-span-2 bg-green-600 p-2 rounded text-white mr-auto'>{pending ? 'Please wait...': 'Share meal'}</button>
  )
}

export default MealSubmitButton