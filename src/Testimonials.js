
import {useState} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import 'slick-carousel/slick/slick-theme.css'
function Testimonials(props)
{
    const [sliderRef, setSliderRef] = useState(null)
    const sliderSettings = {
        
       
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 1800,
       
        arrows: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    var data=[]
    const {userda}=props

    if(userda)
    {

        data=userda
    }
    return(
  
        <div>
         <section class="testimonial-area" id="testimonial">
         <p class="section-para"><span></span>Clients fact</p>
       <>
       <Slider {...sliderSettings}>
        {data.map((item)=>(
            <div>
               
        <div class="container">
             
        <div class="row">
                <div class="col-lg-5"  >
                    <img  style={{position:'relative',left:'100px'}}src={item.image.url}alt=""/>
                </div>
                <div class="col-lg-7 textimonial-carousel-active" style={{position:'relative',bottom:'150px'}}>
                    <div class="single-testimonial-content">
                        
                        <span class="testimonial-quote"><i class="fa fa-quote-right"></i></span>
                        <p>{item.review}</p>
                        <div class="autohor-details">
                            <img src={item.image.url } style={{width:"10%",height:"10%"}}alt="" class="author-img"/>
                            <h5 class="author-name">{item.name} <span>{item.position}</span></h5>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    
        </div>
        
        </div>
        
       
        
        
    ))} 
    </Slider>
    </>
    
    </section>
  
        </div>
    )

}

export default Testimonials