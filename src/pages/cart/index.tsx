import CartCard from '@/components/cart/cart-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import React, { useState } from 'react'


// const Tab = ({bg_color, highlight_color, icon, label}:{bg_color:string,highlight_color:string,icon:string,label:string}) => {
//     return (
//         <div>
//             <div className={'w-10 h-10 ' + `bg-[${bg_color}]`}></div>
//         </div>
//     )
// }

export default function Cart() {
    let [cartInfo, setCartInfo] = useState(true)
    return (
        <>
        {
        cartInfo?
        <div className='pt-[160px] px-12'>
            <Tabs.Root className="TabsRoot" defaultValue="tab2">
                <Tabs.List className="TabsList flex justify-center gap-28 mb-[80px]" >
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        <div className='flex items-center gap-3'>
                            <div className='flex justify-center items-center w-10 h-10 bg-[#DEDDDA] rounded-full'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_326_120)">
                                    <path d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_326_120">
                                    <rect width="18" height="18" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className='font-semibold text-xl text-[#808080]'>Cart</div>
                        </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2" disabled={true}>
                        <div className='flex gap-3 items-center'>
                            <div className='flex justify-center items-center w-10 h-10 bg-[#DEDDDA] rounded-full'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.333 2.5H0.833008V13.3333H13.333V2.5Z" stroke="#808080" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.333 6.66666H16.6663L19.1663 9.16666V13.3333H13.333V6.66666Z" stroke="#808080" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.58333 17.5C5.73393 17.5 6.66667 16.5673 6.66667 15.4167C6.66667 14.2661 5.73393 13.3333 4.58333 13.3333C3.43274 13.3333 2.5 14.2661 2.5 15.4167C2.5 16.5673 3.43274 17.5 4.58333 17.5Z" stroke="#808080" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.4163 17.5C16.5669 17.5 17.4997 16.5673 17.4997 15.4167C17.4997 14.2661 16.5669 13.3333 15.4163 13.3333C14.2657 13.3333 13.333 14.2661 13.333 15.4167C13.333 16.5673 14.2657 17.5 15.4163 17.5Z" stroke="#808080" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='font-semibold text-xl text-[#808080]'>Shipping Address</div>
                        </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab3" disabled={true}>
                        <div className='flex items-center gap-3'>
                            <div className='flex justify-center items-center w-10 h-10 bg-[#DEDDDA] rounded-full'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.8757 2.83334H2.12565C1.34325 2.83334 0.708984 3.46761 0.708984 4.25001V12.75C0.708984 13.5324 1.34325 14.1667 2.12565 14.1667H14.8757C15.6581 14.1667 16.2923 13.5324 16.2923 12.75V4.25001C16.2923 3.46761 15.6581 2.83334 14.8757 2.83334Z" stroke="#808080" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M0.708984 7.08334H16.2923" stroke="#808080" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            <div className='font-semibold text-xl text-[#808080]'>Payment</div>
                        </div>
                    </Tabs.Trigger>
                </Tabs.List>
                <div className='flex max-w-[1300px] mx-auto'>
                    <div className='grow pr-10'>
                        <Tabs.Content className="TabsContent" value="tab1">
                           <CartCard />
                           <CartCard />
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent" value="tab2">
                            <p className="Text">Change your password here. After saving, you'll be logged out.</p>
                            <fieldset className="Fieldset">
                                <label className="Label" htmlFor="currentPassword">
                                Current password
                                </label>
                                <input className="Input" id="currentPassword" type="password" />
                            </fieldset>
                            <fieldset className="Fieldset">
                                <label className="Label" htmlFor="newPassword">
                                New password
                                </label>
                                <input className="Input" id="newPassword" type="password" />
                            </fieldset>
                            <fieldset className="Fieldset">
                                <label className="Label" htmlFor="confirmPassword">
                                Confirm password
                                </label>
                                <input className="Input" id="confirmPassword" type="password" />
                            </fieldset>
                            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                                <button className="Button green">Change password</button>
                            </div>
                        </Tabs.Content>
                    </div>
                    <div className='basis-[400px] border-l border-slate-500 pl-10 py-5'>
                        <div className="apply_coupon_area mb-16">
                            <h4 className='font-medium text-lg mb-4'>APPLY COUPONS</h4>
                            <form action="" className='flex gap-3'>
                                <input type='text' className='grow py-2 px-4 bg-[#FFFDF9] border border-slate-500 text-sm' maxLength={8} placeholder='ENTER COUPON CODE' />
                                <button className='bg-[black] text-white px-8 h-11'>APPLY</button>
                            </form>
                        </div>
                        <div className="mb-15 price_area mb-16">
                            <h4 className='font-medium text-lg mb-4'>PRICE DETAILS ( 1 Item )</h4>
                            <div className='flex justify-between py-4 border-t border-b border-slate-500 text-sm opacity-75'>
                                <span>Sub Total</span>
                                <span>Rs. 1149 </span>
                            </div>
                            <div className='flex justify-between py-4 border-b border-slate-500 text-sm opacity-75'>
                                <span>Delivery Charges</span>
                                <span>Free</span>
                            </div>
                            <div className='flex justify-between py-4 border-b border-slate-500 text-sm opacity-75'>
                                <span>Coupon Discount</span>
                                <span>- Rs. 200</span>
                            </div>
                            <div className='flex justify-between py-4'>
                                <span className='font-medium'>Total</span>
                                <span className='font-medium'>Rs. 949 </span>
                            </div>
                        </div>
                        <div className='mb-16'>
                            <Image src={'/cart_static_icon.svg'} alt='' width={300} height={200} className='w-full' />
                        </div>
                        <div>
                            <Button variant='primary' className='w-full'>SELECT ADDRESS</Button>
                        </div>
                    </div>
                </div>
                
            </Tabs.Root>
        </div>
        :
        <div className='pt-[160px] h-[600px] flex flex-col items-center justify-center'>
            <Image src={'/cart_empty.svg'} alt='' width={100} height={100} />
            <h3 className='font-medium my-4 text-2xl'>Oops, your cart is empty !</h3>
            <Button variant='primary' className='w-44 h-12 mt-4'>SHOP NOW</Button>
        </div>
        }
        </>
        
    )
}
