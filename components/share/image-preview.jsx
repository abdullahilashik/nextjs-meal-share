"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react'

const MealImagePreview = () => {
    const ref = useRef();
    const [imagePreview, setImagePreview] = useState(null);
    const onImageChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        if(file){
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImagePreview(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        }
    }

    const handleImagePick = () => {
        ref.current.click();
    }
  return (
    <div className='col-span-2 flex items-start gap-4'>
        <div className="flex items-center gap-2">
            <input className='hidden' accept='image/png, image/jpeg' name='image' ref={ref} onChange={onImageChange} type="file" />
            {imagePreview && <Image src={imagePreview} height={180} width={180} alt='' />}
        </div>
        <button type='button' onClick={handleImagePick} className='mr-auto text-sm p-2 rounded bg-gray-900 text-white'>Pick {imagePreview ? 'another' : 'an'} Image</button>
    </div>
  )
}

export default MealImagePreview