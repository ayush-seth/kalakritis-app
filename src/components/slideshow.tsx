import React, {useEffect, useState} from 'react';


export default function SlideShow(props:{children:React.ReactNode,time:number, length:number, nav_container_css_class:string}) {
    let [slidehsowstatus, setslideshowstatus]= useState(0)
    let [slidehsowstyle, setslideshowstyle]= useState(0)
    let [slideshowNav, setSlideshowNav] = useState<React.ReactNode[]>([])
    
    if (props.length > 3) {
    }
    
    const slideShowfunc = () => {
        if (props.length == 0) {
            return
        }
        let x = slidehsowstatus + 1;
        if (x > (props.length - 1)) {
        x = 0
        }
        setslideshowstatus(x)
        let tranformPosition = -1 * 100 * x
        setslideshowstyle(tranformPosition)
    }

    const moveToSlide = (x:number) => {
        console.log(x);
        setslideshowstyle(x)
        setslideshowstatus(x/-100)
    }

    const generateSlidshowNav = () => {
        let nav_list = []
        for (let i = 0; i < props.length; i++) {
            nav_list.push(<button onClick={()=> moveToSlide(-i*100)} className={`${slidehsowstatus == i? 'slide_active w-3 h-3 rounded-[50%] bg-[#ad9774]': 'w-3 h-3 bg-[rgba(0,0,0,0.15)] rounded-[50%]'}`}></button>)
        }
        setSlideshowNav(nav_list)
    }

    useEffect(() => {
        let interval =  setInterval(()=> {
            slideShowfunc()
        }, props.time * 1000)
        generateSlidshowNav()
        return ()=> clearInterval(interval)

    }, [slidehsowstatus, props.length]);

  return (
    <>
        <div className="slideshow_container w-full h-full overflow-hidden relative">
            <div className="slideshow flex transition-[0.5s]" style={{transform: `translateX(${slidehsowstyle}%)`}}>
                {props.children}
            </div>
            <div className={`slideshow_nav ${props.nav_container_css_class}`}>
                {slideshowNav}
            </div>
        </div>
    </>
  )
}
