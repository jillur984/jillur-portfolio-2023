import React from 'react'
import Workitem from './Workitem'

const data=[
  {
  year:2020,
  title:'Content Creator',
  duration:'3 years',
  details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
},
{
year:2017,
title:'Google',
duration:'3 years',
details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
},
{
year:2015,
title:'Amazon',
duration:'2 years',
details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
},
{
year:2012,
title:'facebook',
duration:'3 years',
details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
},
]

const Work = () => {
  return (
    <div id='work' className='max-width-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item,idx)=>(
             <Workitem key={idx} 
             year={item.year} 
             title={item.title} 
             duration={item.duration} 
             details={item.details}/>
      ))}

    </div>
  )
}

export default Work