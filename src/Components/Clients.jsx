import React from 'react'
import data from '../assets/client-databiz.svg'
import audio from '../assets/client-audiophile.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'

const Clients = () => {
  return (
    <>
        <ul className='flex items-center gap-4 md:gap-10'>
            <li><img src={data} alt="databiz" /></li>
            <li><img src={audio} alt="audiophile" /></li>
            <li><img src={meet} alt="meet" /></li>
            <li><img src={maker} alt="maker" /></li>
        </ul>
    </>
  )
}

export default Clients