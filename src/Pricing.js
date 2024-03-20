
function Pricing(props)
{
 var data=[]

    const {userda}=props
    if(userda)
    {

        data=userda
    }

    return (


        <>
        <section class="pricing-area pt-140 pb-140" id="price">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 text-center">
                    <div class="section-title pricing-title pb-80">
                        <p class="section-para"><span></span>My services</p>
                        <h1>Popular Services with cheap Pricing Plan For 
                            Creative Project</h1>
                        
                    </div>
                </div>
            </div>
            <div class="row">
            {data.map((item)=>(
               
                <div class="col-lg-4">
                    <div class="single-price-box">
                        <div class="absolute-price-num">
                          
                        </div>
                        <img src={item.image.url} alt="" class="price-icon"/>
                        <h3><span>{item.charge}</span>  For  {item.name}</h3>
                        <p><i class="fa fa-arrow-right"></i>{item.desc}</p>
                       
                        <div class="hover-pricing-text">
                            <p><i class="fa fa-arrow-right"></i>Game Design & DV</p>
                            <p><i class="fa fa-arrow-right"></i>Computer Hardware</p>
                        </div>
                        <a href="#" class="btn price-btn">make plan <i class="fa fa-arrow-right"></i></a>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
              
           ))}
           </div>
        </div>
    </section>
        </>
    )
}

export default Pricing