
function Services(props)


{
   
  const klass={

         "6":"fas fa-bezier-curve",
         "4":"fas fa-laptop-code",
         "1":"fas fa-chart-line",
         "3":"fas fa-anchor",
         "2": "fas fa-bezier-curve" }  

const {userda}=props
    var time=[]
if(userda)
{
    time=userda

}
    return (
<>



        <>
        
        <section class="service-area service-bg pt-140 pb-140" id="Services">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 text-center pb-80">
                    <div class="section-title service-title">
                        <span><img src="assets/images/service-text.png" alt=""/></span>
                        <p class="section-para"><span></span>Work Experience</p>
                        <h1>Most Creative Works
                            For Companys</h1>
                        
                    </div>
                </div>
            </div>
           {time.map((item)=>(<div class="row pb-30" >
                <div class="col-lg-12" >
                    
                   
                    
                    
                    <div class="single-service-box" style={{ paddingBottom:"32%"}} >
                        <div class="single-service-icon-box">
                            <p>{item.sequence}</p>
                            <i class={klass[item.sequence]}></i>
                        </div>
                        <div style={{position:"absolute"}}class="service-box-content">
                            <h3>{item.jobTitle}</h3>
                            <p>Company: {item.company_name} <br></br>Job location: {item.jobLocation}
                            <br></br>StartDate: {item.startDate.split("T")[0]} <br></br> EndDate: {(item.endDate.split("T")[0])}
                            <br></br>Job description: {item.summary}
                            <br></br>Tasks:
                            {item.bulletPoints.map((ite)=>(

                                <ul>
                                    <li>{ite}</li>
                                </ul>
                            ))}
                            </p>
                            
                            
                           
                        </div>
                    </div>
                </div>
                                
            </div>))}
            
               
        </div>
    </section>
        </>
        </>
    )
}

export default Services