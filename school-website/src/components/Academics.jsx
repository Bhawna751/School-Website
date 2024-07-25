import React from 'react'
import { Curriculum, collabApps } from '../constants'
import Section from './Section'
import Button from './Button'
import { check } from '../assets'
import logo from "../assets/logo.png"
import {LeftCurve, RightCurve} from './design/Collaboration'

const Academics = () => {
  return (
    <Section crosses>
        <div className='container lg:flex'>
            <div className='max-w-[25rem]'>
                <h2 className='h2 mb-4 md:mb-8'>Curriculum</h2>
                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {Curriculum.map((item)=>(
                        <li className='mb-5 py-' key={item.id}>
                            <div className='flex items-center'>
                                <img src={check} width={24} height={24} alt="check"/>
                                <h6 className='body-2 ml-10'>{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                                )}
                        </li>
                    ))}
                </ul>
                <Button>Join Us Now</Button>
            </div>
            <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
                    We use a blend of traditional and modern teaching techniques to cater to different learning styles.
                </p>
                <div className=' relative left-1/2 flex w-[22rem] aspect-square border border-n-6
                rounded-full -translate-x-1/2 scale:75 md:scale-100'>
                    <div className='flex w-60 aspect-square 
                    m-auto border border-n-6 rounded-full'>
                        <div className='w-[6rem] m-auto aspect-square p-[0.2rem] bg-conic-gradient
                        rounded-full'>
                            <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                                <img src={logo} width={48} height={48} alt="logo"/>
                            </div>
                        </div>
                    </div>
                    <ul>
                        {collabApps.map((app,index)=>(
                            <li 
                                key={app.id} 
                                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom
                                rotate-${
                                    index * 45
                                }`}
                                >
                                <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7
                                    border border-n-1/30 rounded-xl -rotate-${
                                        index * 45
                                    }`}>
                                    <img 
                                        className='m-auto'
                                        width={app.width}
                                        height={app.height}
                                        alt={app.title}
                                        src={app.icon}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <LeftCurve/>
                    <RightCurve/>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Academics