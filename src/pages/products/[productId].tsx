import { Button } from '@/components/ui/button'
import { useProduct } from '@/hooks/use-product'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

export default function ProductDetails() {
    const params = useParams()
    const product = useProduct(params.productId)
    return (
        <div className='max-w-[1400px] mx-auto pt-[160px] px-12'>
            <span className='block mb-16 font-medium'>Home / Kurtas / Black Silk kurta set </span>
            
            <div className='grid grid-cols-2 gap-20'>
                <div className='product_photos'>
                    <div className='mb-4'>
                        <Image  src={'/big_img.png'} alt='' width={400} height={600} className='w-full' />
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        <div>
                        <Image  src={'/big_img.png'} alt='' width={400} height={600} className='w-full' />
                        </div>
                        <div>
                        <Image  src={'/small_img_1.png'} alt='' width={400} height={600} className='w-full' />
                        </div>
                    </div>
                </div>
                <div className="product_infos flex flex-col gap-4">
                    <div className='flex gap-4'>
                        <Image src={'/star.svg'} alt='star' width={16} height={16} />
                        <span>4</span>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl'>Black Silk kurta set</h1>
                        <Image src={'/share.svg'} alt='star' width={20} height={20} />
                    </div>
                    <div className='flex flex-wrap gap-3 items-center'>
                            <span className='font-medium text-2xl'>Rs 1000</span>
                            <span className="text-accent-700 line-through text-lg">
                                Rs 2000
                            </span>
                            <span className="text-accent-400 text-lg font-medium">
                                (50 %)
                            </span>
                    </div>
                    <div className='mt-[-8px] opacity-75'><span>Inclusive of all taxes</span></div>
                    <div>
                        <span className='font-medium block mb-2'>Description</span>
                        <span>
                            Upgrade your look this summer with this elegant top. Made from the finest rayon blend fabric it is enhanced with an eye-catching floral print. A beautiful round neckline with a buttoned keyhole front and contrast trim at the cuffs highlight this classy top. Wear it with your favourite pants or jeans and sandals for attending any casual event.
                        </span>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        <div className='w-14 h-11 border border-black flex justify-center items-center'><span>XS</span></div>
                        <div className='w-14 h-11 border border-black flex justify-center items-center'><span>S</span></div>
                        <div className='w-14 h-11 border border-black flex justify-center items-center'><span>M</span></div>
                        <div className='w-14 h-11 border border-black flex justify-center items-center bg-slate-300'><span>XL</span></div>
                        <div className='w-14 h-11 border border-black flex justify-center items-center'><span>XXL</span></div>
                    </div>
                    <div className='mt-8'>
                        <span>Color</span>
                        <div className='flex gap-4 mt-3'>
                            <div className='p-[2px] w-8 h-8 rounded-full bg-[#000]'></div>
                            <div className='p-[2px] border border-slate-500 w-8 h-8 rounded-full bg-[#24B722]'></div>
                            <div className='p-[2px] w-8 h-8 rounded-full bg-[#D50D0D]'></div>
                            <div className='p-[2px] w-8 h-8 rounded-full bg-[#FCD9F2]'></div>
                            <div className='p-[2px] w-8 h-8 rounded-full bg-[#F49D1B]'></div>
                        </div>
                    </div>
                    <div className='mt-8'>
                    </div>


                </div>
            </div>

        </div>
    )
}
