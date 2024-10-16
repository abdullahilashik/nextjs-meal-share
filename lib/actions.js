"use server"

import fs from 'node:fs';
import { revalidatePath } from "next/cache";
import slugify from "slugify";
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

const isInvalidText = (text) => {
    if(!text || text.trim() == ''){
        return true;
    }
    return false;
}

export const shareMealAction = async (prevState, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        donator_name: formData.get('name'),
        donator_email: formData.get('email'),
        slug: slugify(formData.get('title'), {lower: true}),
        image: formData.get('image')

    };
    
    let errors = {};
    if(isInvalidText(meal.title)){
        errors.title = 'Title can not be empty';
    }
    if(isInvalidText(meal.summary)){
        errors.summary = 'Summary is required';
    }
    if(isInvalidText(meal.instructions)){
        errors.instructions = 'Instructions must be provided';
    }
    if(!meal.image || meal.image.size == 0){
        errors.image = 'Image is required';
    }
    
    if(Object.keys(errors).length > 0){        
        return {errors};
    }

    let image_url = '';
    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = await fs.createWriteStream('public/images/' + filename);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), function(error) {
        if(error){
            console.log('Failed to upload image');
            throw new Error('Failed to upload image');
        }
    })


    await prisma.meal.create({
        data: {...meal, image: '/images/'+filename}
    });    

    revalidatePath('/meals', 'layout');
    redirect('/meals');
}