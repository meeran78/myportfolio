import React from 'react'
import { TbBrandGithub} from 'react-icons/tb'
import { 
    SlSocialYoutube,
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
} from 'react-icons/sl'

function Footer() {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center
    w-full py-6 gap-4'>
 <div className='flex flex-col gap-4'>
            <a href='https://github.com/meeran78/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub /></span>
            </a>
        </div>
        <div className='flex flex-col gap-4'>
            <a href='https://youtub.com/meeranchennnai/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialYoutube /></span>
            </a>
        </div>
        <div className='flex flex-col gap-4'>
            <a href='https://linkedin.com/meeran-mohideen-2b836964/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin /></span>
            </a>
        </div>
        <div className='flex flex-col gap-4'>
            <a href='https://facebook.com/meeran.mohideen.5203/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialFacebook /></span>
            </a>
        </div>
        <div className='flex flex-col gap-4'>
            <a href='https://instagram.com/meeranmohideen786786/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialInstagram /></span>
            </a>
        </div>
      
    </div>
  )
}

export default Footer