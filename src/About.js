function About(props)
{

    var urli=""
    var subtitle=''
    var des=''
    const {userda}=props
    if(userda&&userda.subTitle&&userda.avatar)
    {

        const {subTitle,description}=userda
        const {url}=userda.avatar
        subtitle=subTitle
        des=description
        urli=url
    }


    return (

        <>
        
        <section className="about-us-area" id="About">
        <div className="container">
            <div className="row">
                <div className="about-us-img">
                    <img src={urli} alt=""  style={{width:"600px",height:"615px"}}className="about-img-1"/>
                   
                </div>
                <div className="col-lg-5 offset-lg-7">
                    <div className="about-us-content">
                        <div className="section-title about-us-title">
                            <p className="section-para"><span></span>About Me</p>
                            <h1>{subtitle}</h1>
                            
                        </div>
                        <div className="about-us-text">
                            <span>A</span>
                            <p>{des}</p>
                        </div>
                        <ul className="about-menu">
                            <li><a href="#"><i className="fas fa-check"></i>Web Design</a></li>
                            <li><a href="#"><i className="fas fa-check"></i>Web Development</a></li>
                            <li><a href="#"><i className="fas fa-check"></i>Graphics Arts</a></li>
                            <li><a href="#"><i className="fas fa-check"></i>Product Marketing</a></li>
                            <li><a href="#"><i className="fas fa-check"></i>User Research</a></li>
                        </ul>
                        <a href="#" className="btn about-btn">Contact Us <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default About