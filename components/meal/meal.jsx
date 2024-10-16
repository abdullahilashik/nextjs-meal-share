import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealGridItem = ({ meal }) => {
  return (
    <>
      <div className="overflow-hidden shadow-md rounded relative" key={meal.id}>
        <Image
          src={meal.image}
          alt={meal.title}
          className="object-cover w-full"
          height={120}
          width={120}
        />
        <div className="content p-4">
          <Link href={`/meals/${meal.slug}`}>
            <span className="absolute inset-0"></span>
            <h4 className="text-xl font-bold">{meal.title}</h4>
          </Link>
          <p className="text-sm font-light">{meal.summary}</p>
        </div>
      </div>
    </>
  );
};

export default MealGridItem;
