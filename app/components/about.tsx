import React from 'react'
import { Data } from '../type'

export const About = (prop :{data: Data}) => {

    const { data } = prop
    return (
        <div className='section lg:w-1/2  mx-auto flex flex-col py-4'>
            <h5 className='mb-5'>{data.about.title}</h5>
            <p className='mb-3'>{data.about.paragraph1}</p>
            <p className='mb-3'>{data.about.paragraph2}</p>
            <p>{data.about.paragraph3}</p>
        </div>
  )
}
