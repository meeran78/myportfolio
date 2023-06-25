import React from 'react'
import { TbBrandGithub} from 'react-icons/tb'
import { 
    SlSocialYoutube,
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
} from 'react-icons/sl'
import { motion } from 'framer-motion'

export default function LeftSide() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            <motion.a 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, ease: "easeIn" }}
            href='https://github.com/meeran78/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub /></span>
            </motion.a>
        </div>
        <div className='flex flex-col gap-4'>
            <motion.a 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, ease: "easeIn" }}

            href='https://youtub.com/meeranchennnai/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialYoutube /></span>
            </motion.a>
        </div>
        <div className='flex flex-col gap-4'>
            <motion.a 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, ease: "easeIn" }}
            href='https://linkedin.com/meeran-mohideen-2b836964/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin /></span>
            </motion.a>
        </div>
        <div className='flex flex-col gap-4'>
            <motion.a 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, ease: "easeIn" }}
            href='https://facebook.com/meeran.mohideen.5203/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialFacebook /></span>
            </motion.a>
        </div>
        <div className='flex flex-col gap-4'>
            <motion.a 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, ease: "easeIn" }}
            href='https://instagram.com/meeranmohideen786786/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialInstagram /></span>
            </motion.a>
        </div>
        <div className='w-[2px] h-32 bg-textDark'>

        </div>
    </div>
  )
}
