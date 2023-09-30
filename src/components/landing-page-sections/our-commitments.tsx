import Image from 'next/image'
import React from 'react'

export default function OurCommitments() {

    return (
        <div className='my-20 py-[60px] px-10 bg-primary-500 flex gap-[15%] justify-center'>
            <div className="flex flex-col items-center gap-4">
                <Image src={"/cmmt1.svg"} alt='' width={100} height={90} className='h-20' />
                <span className='text-xl'>Assured Quality</span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Image src={"/cmmt2.svg"} alt='' width={100} height={90} className='h-20' />
                <span className='text-xl'>Secure Payment </span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Image src={"/cmmt3.svg"} alt='' width={100} height={90} className='h-20' />
                <span className='text-xl'>Premium Package</span>
            </div>
        </div>
    )
}
