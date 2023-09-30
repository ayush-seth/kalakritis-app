import React from 'react'
import { SectionHeading } from '../ui/section-heading'
import SlideShow from '../slideshow'
import Image from 'next/image'

export default function Testimonials() {
    return (
        <div className='pa'>
            <SectionHeading className="my-20">What people say about us ?</SectionHeading>
            <div className='w-full px-10 lg:px-[100px] xl:px-[120px] 2xl:px-[140px] '>
            <SlideShow
                time={3}
                length={3}
                nav_container_css_class="testimonial_slide_nav_container flex justify-center items-center gap-5 w-full px-0 py-20"
            >
                <div className="basis-full grow-0 shrink-0 flex flex-col lg:flex-row gap-[60px] testimonial_slide">
                    <div className="testimonial_card basis-3/6 text-center px-[30px] py-[60px] border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
                        <p className='text-base leading-6'>
                            I am thrilled with my shopping experience! The website was user-friendly, and I found exactly what I was looking for. The checkout process was smooth, and my order arrived earlier than expected. I will definitely be back for more. Highly recommended
                        </p>
                        <Image src={"/test_profile1.png"} alt="" width={100} height={100} className='block w-[90px] mx-auto my-8' />
                        <span className="testimonial_giver text-lg block text-center font-semibold mb-[5px] ">Rajesh Kumar</span>
                        <span className="testimonial_type text-[#914c28]">Customer</span>
                        <Image src={"/five_stars.svg"} alt="" width={300} height={50} className='block w-[120px] text-center mx-auto my-4' />
                    </div>
                    <div className="testimonial_card basis-3/6 text-center px-[30px] py-[60px] border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
                        <p className='text-base leading-6'>
                            Five stars all the way! This e-commerce store not only offers a wide range of products but also provides detailed product descriptions and customer reviews that help me make informed decisions. It's evident that they care about their customers' satisfaction. I'm a happy shopper
                        </p>
                        <Image src={"/test_profile2.png"} alt="" width={100} height={100} className='block w-[90px] mx-auto my-8' />
                        <span className="testimonial_giver text-lg block text-center font-semibold mb-[5px] ">Rajesh Kumar</span>
                        <span className="testimonial_type text-[#914c28]">Customer</span>
                        <Image src={"/five_stars.svg"} alt="" width={300} height={50} className='block w-[120px] text-center mx-auto my-4' />
                    </div>
                </div>
                <div className="basis-full grow-0 shrink-0 flex flex-col lg:flex-row gap-[60px] testimonial_slide">
                    <div className="testimonial_card basis-3/6 text-center px-[30px] py-[60px] border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
                        <p className='text-base leading-6'>
                            I am thrilled with my shopping experience! The website was user-friendly, and I found exactly what I was looking for. The checkout process was smooth, and my order arrived earlier than expected. I will definitely be back for more. Highly recommended
                        </p>
                        <Image src={"/test_profile1.png"} alt="" width={100} height={100} className='block w-[90px] mx-auto my-8' />
                        <span className="testimonial_giver text-lg block text-center font-semibold mb-[5px] ">Rajesh Kumar</span>
                        <span className="testimonial_type text-[#914c28]">Customer</span>
                        <Image src={"/five_stars.svg"} alt="" width={300} height={50} className='block w-[120px] text-center mx-auto my-4' />
                    </div>
                    <div className="testimonial_card basis-3/6 text-center px-[30px] py-[60px] border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
                        <p className='text-base leading-6'>
                            Five stars all the way! This e-commerce store not only offers a wide range of products but also provides detailed product descriptions and customer reviews that help me make informed decisions. It's evident that they care about their customers' satisfaction. I'm a happy shopper
                        </p>
                        <Image src={"/test_profile2.png"} alt="" width={100} height={100} className='block w-[90px] mx-auto my-8' />
                        <span className="testimonial_giver text-lg block text-center font-semibold mb-[5px] ">Rajesh Kumar</span>
                        <span className="testimonial_type text-[#914c28]">Customer</span>
                        <Image src={"/five_stars.svg"} alt="" width={300} height={50} className='block w-[120px] text-center mx-auto my-4' />
                    </div>
                </div>
                <div className="basis-full grow-0 shrink-0 flex flex-col lg:flex-row gap-[60px] testimonial_slide">
                    <div className="testimonial_card basis-3/6 text-center px-[30px] py-[60px] border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
                        <p className='text-base leading-6'>
                            I am thrilled with my shopping experience! The website was user-friendly, and I found exactly what I was looking for. The checkout process was smooth, and my order arrived earlier than expected. I will definitely be back for more. Highly recommended
                        </p>
                        <Image src={"/test_profile1.png"} alt="" width={100} height={100} className='block w-[90px] mx-auto my-8' />
                        <span className="testimonial_giver text-lg block text-center font-semibold mb-[5px] ">Rajesh Kumar</span>
                        <span className="testimonial_type text-[#914c28]">Customer</span>
                        <Image src={"/five_stars.svg"} alt="" width={300} height={50} className='block w-[120px] text-center mx-auto my-4' />
                    </div>
                    <div className="testimonial_card basis-3/6 text-center px-[30px] py-[60px] border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
                        <p className='text-base leading-6'>
                            Five stars all the way! This e-commerce store not only offers a wide range of products but also provides detailed product descriptions and customer reviews that help me make informed decisions. It's evident that they care about their customers' satisfaction. I'm a happy shopper
                        </p>
                        <Image src={"/test_profile2.png"} alt="" width={100} height={100} className='block w-[90px] mx-auto my-8' />
                        <span className="testimonial_giver text-lg block text-center font-semibold mb-[5px] ">Rajesh Kumar</span>
                        <span className="testimonial_type text-[#914c28]">Customer</span>
                        <Image src={"/five_stars.svg"} alt="" width={300} height={50} className='block w-[120px] text-center mx-auto my-4' />
                    </div>
                </div>
            </SlideShow>
            </div>  
        </div>
    )
}
