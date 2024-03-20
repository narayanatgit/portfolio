
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress.css'
function Skills(props)
{
    const {userda}=props
    const value=2
    var skills=[]
if(userda)
{
    skills=userda

}
    
    const settings = {
        dots: true,
        speed: 2700,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2700,
      };
    return (


        <>
        
        <section className="team-area pt-140 pb-140" id="team">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center pb-80">
                    <div className="section-title team-title">
                        <p className="section-para"><span></span>My Skills</p>
                        <h1>Meet My Most Creative Minds
                            That’s Are Professional</h1>
                        
                    </div>
                </div>
            </div>
            
            <>
        
        <Slider {...settings}>


       { skills.map((item)=>(<div class="col-lg-4">
                   <div class="single-team-area">
                       <div class="single-team-img text-center">
                           <img src={item.image.url} alt="" style={{width:"299%",height:"300%"}}/>
                           
                       </div>
                       <div class="single-team-content text-center">
                           <h4>{item.name}</h4> 
                           
                           <CircularProgressbar value={item.percentage} maxValue={100} text={`${item.percentage}%`} />;
                       </div>
                   </div>
               </div>))}
               
               
              
               
               
                    
        </Slider>
       </>
        
            
        </div>
    </section>
        
        </>
 
    )
}

export default Skills