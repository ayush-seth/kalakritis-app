import { Product } from '@/types'
import Image from 'next/image'
import React, { useState } from 'react'

type CartCardProps = {
    quantity: number,
    product: Product
}
//{quantity, product}:CartCardProps
export default function CartCard() {
    let [qty, setQty] = useState(1)

    const decreaseQty = () => {
        if (qty > 1) {
            setQty((prev) => prev - 1)
        }
    }

    const increaseQty = () => {
        if (qty < 5) {
            setQty((prev) => prev + 1)
        }
    }

    return (
        <div className='flex gap-5 p-3 border-b border-slate-500'>
            <div className='basis-32'>
                <Image src={'/dummy_cart.svg'} alt='' width={100} height={100} className='w-full' />
            </div>
            <div className='p-2'>
                <h4 className='font-semibold text-base mb-1'>Brown kurta set with blue Dupatta </h4>
                <span className='block'>Color: Brown</span>
                <span className='block'>Size : XXS</span>
                <div className='flex gap-10 my-5'>
                    <div className='flex bg-[#F7EBD6] px-2 py-1 gap-4 items-center'><button onClick={decreaseQty}>-</button> <span>{qty}</span> <button onClick={increaseQty}>+</button></div>
                    <span className='font-semibold text-xl'>Rs. 800 /-</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <button className='underline'>Delete</button>
                    <div className='w-[1px] h-5 bg-slate-500'></div>
                    <button className='underline'>Move To Wishlist</button>
                </div>
            </div>
        </div>
    )
}
