

function Social(props)
{
    var data=[]

      const {userda}=props

      if(userda)
      {
            data=userda
      }
    return (

        <>
        
        <section class="contact-with-footer-area contact-bg pt-100" id="Contact">
        <div class="row">
                <div class="col-lg-6 offset-lg-3 text-center pb-80">
                    <div class="section-title contact-title">
                        <span><img src="assets/images/contact-text.png" alt=""/></span>
                        <p class="section-para"><span></span>Message Us</p>
                        <h1>Don't Hesitate To Contact 
                            With Me</h1>
                        
                    </div>
                </div>
            </div>
            
        <div class="footer-bottom-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p>&copy; 2020 Livvic. All Rights Reserved</p>
                    </div>
                    <div class="col-lg-6">
                        <ul class="footer-links">
                           
                            {data.map((item)=>(
                                 <>
                            <li><a href={item.url}><img src={item.image.url}/></a></li>
                           
                            </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    
   
        </>
    )
}

export default Social