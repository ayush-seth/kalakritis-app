import Image from "next/image";
import SlideShow from "../slideshow";
import { SectionHeading } from "../ui/section-heading";

export default function Testimonials() {
  return (
    <div className="pa">
      <SectionHeading className="my-20">
        What people say about us ?
      </SectionHeading>
      <div className="hidden w-full px-10 md:block lg:px-[100px] xl:px-[120px] 2xl:px-[140px] ">
        <SlideShow
          time={3}
          length={3}
          nav_container_css_class="testimonial_slide_nav_container flex justify-center items-center gap-5 w-full px-0 py-20"
        >
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[30px] py-[60px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[30px] py-[60px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                Five stars all the way! This e-commerce store not only offers a
                wide range of products but also provides detailed product
                descriptions and customer reviews that help me make informed
                decisions. It&apos;s evident that they care about their
                customers&apos; satisfaction. I&apos;m a happy shopper
              </p>
              <Image
                src={"/test_profile2.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[30px] py-[60px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[30px] py-[60px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                Five stars all the way! This e-commerce store not only offers a
                wide range of products but also provides detailed product
                descriptions and customer reviews that help me make informed
                decisions. It&apos;s evident that they care about their
                customers&apos; satisfaction. I&apos;m a happy shopper
              </p>
              <Image
                src={"/test_profile2.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[30px] py-[60px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[30px] py-[60px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                Five stars all the way! This e-commerce store not only offers a
                wide range of products but also provides detailed product
                descriptions and customer reviews that help me make informed
                decisions. It&apos;s evident that they care about their
                customers&apos; satisfaction. I&apos;m a happy shopper
              </p>
              <Image
                src={"/test_profile2.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
        </SlideShow>
      </div>
      <div className="block w-full px-4 md:hidden lg:px-[100px] xl:px-[120px] 2xl:px-[140px] ">
        <SlideShow
          time={3}
          length={6}
          nav_container_css_class="testimonial_slide_nav_container flex justify-center items-center gap-5 w-full px-0 py-20"
        >
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[16px] py-[40px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[16px] py-[40px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[16px] py-[40px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[16px] py-[40px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[16px] py-[40px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
          <div className="testimonial_slide flex shrink-0 grow-0 basis-full flex-col gap-[60px] lg:flex-row">
            <div className="testimonial_card basis-3/6 border-[1.5px] border-solid border-[rgba(0,0,0,0.5)] px-[16px] py-[40px] text-center hover:border-[1.5px] hover:border-solid hover:border-[#806c5e]">
              <p className="text-base leading-6">
                I am thrilled with my shopping experience! The website was
                user-friendly, and I found exactly what I was looking for. The
                checkout process was smooth, and my order arrived earlier than
                expected. I will definitely be back for more. Highly recommended
              </p>
              <Image
                src={"/test_profile1.png"}
                alt=""
                width={100}
                height={100}
                className="mx-auto my-8 block w-[90px]"
              />
              <span className="testimonial_giver mb-[5px] block text-center text-lg font-semibold ">
                Rajesh Kumar
              </span>
              <span className="testimonial_type text-[#914c28]">Customer</span>
              <Image
                src={"/five_stars.svg"}
                alt=""
                width={300}
                height={50}
                className="mx-auto my-4 block w-[120px] text-center"
              />
            </div>
          </div>
        </SlideShow>
      </div>
    </div>
  );
}
