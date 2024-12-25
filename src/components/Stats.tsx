import React from 'react'
import Logo from './Logo'
import CustomText from './CustomText'
import { cardStats, cardStatsProps } from '../constants/constants'
import cardLogo from "/assets/card-logo.png"
import { ArrowUp } from 'lucide-react'

const Stats: React.FC = () => {
     return (
          <div>
               <div className='relative'>
                    <div className='w-[350px] lg:w-[448px] mx-auto rounded-3xl shadow-outer bg-white'>
                         <div className='p-4 border-b flex items-center gap-x-3'>
                              <Logo width='w-7'/>
                              <CustomText size='text-lg' fontWeight='font-bold'>AI to Detect & Autofix Bad Code</CustomText>
                         </div>
                         <div className='p-6 flex justify-between items-center'>
                              {cardStats.map((item: cardStatsProps) => (
                                   <div className='text-center' key={item.title}>
                                        <CustomText size='text-base lg:text-lg' fontWeight='font-bold'>{item.value}</CustomText>
                                        <CustomText>{item.title}</CustomText>
                                   </div>
                              ))}
                         </div>
                    </div>
                    <div className='absolute -bottom-36 -right-5 z-50 bg-white md:w-[220px] lg:w-[270px] mx-auto rounded-3xl shadow-outer py-4 px-6'>
                         <div className='flex justify-between'>
                              <img
                                   src={cardLogo}
                                   alt='card-logo'
                                   className='w-14'
                              />
                              <div>
                                   <div className='flex gap-x-1'>
                                        <ArrowUp color='#0049C6' size={20} />
                                        <CustomText color='#0049C6' fontWeight='font-bold'>14%</CustomText>
                                   </div>
                                   <CustomText size='text-xs'>This Week</CustomText>
                              </div>
                         </div>
                         <div className='mt-4'>
                              <CustomText fontWeight='font-bold'>Issues Fixed</CustomText>
                              <CustomText size='text-xl lg:text-2xl' fontWeight='font-bold'>500K+</CustomText>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Stats