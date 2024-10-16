import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/pizza (1).jpg'
import image2 from '@/public/images/pizza (3).jpg'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full  h-[500px] bg-gray-100'>
        <div className="p-4 container mx-auto h-full">
            <div className="grid grid-cols-5 h-full">
                {/* content */}
                <div className="col-span-2 flex flex-col items-start gap-8 justify-center h-full w-full">
                    <h1 className="text-3xl font-semibold">Meals Share</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptate et labore modi. Necessitatibus consequuntur aspernatur qui doloribus, assumenda delectus laudantium eum tenetur fugit explicabo quae. Quod aperiam incidunt natus.</p>
                    <div className="flex items-center gap-4">
                        <Link href={'/meals/share'} className='px-3 py-2 rounded bg-green-600 hover:bg-green-700 duration-200 text-white uppercase'>share a meal</Link>
                        <button disabled className='disabled:cursor-not-allowed disabled:opacity-60 px-3 py-2 rounded bg-red-600 hover:bg-red-700 duration-200 text-white uppercase'>Donate</button>
                    </div>
                </div>
                {/* images */}
                <div className="col-span-3 relative">
                    <div className="absolute inset-0 m-auto w-[400px] rounded aspect-square overflow-hidden -top-[10%]">
                        <Image src={image1} className='object-cover' fill alt=''/>
                    </div>
                    <div className="absolute inset-0 m-auto w-[400px] rounded -right-[40%] -bottom-[10%] aspect-square overflow-hidden">
                        <Image src={image2} className='object-cover' fill alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner