import React from 'react'

export default function ReciepeDetails({reciepe}) {
  return (
    <div className='mt-8'>
        <img src={reciepe.strMealThumb}/>
       <h3 className='text-xl mt-4 font-bold'> {reciepe.strMeal}</h3>
        <p>{reciepe.strInstructions}</p>
    </div>
  )
}
