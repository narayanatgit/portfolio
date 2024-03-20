
function Hero(props)
{
var urli=""
var namei=""
var titlei=""
var quto=""
const {userda}=props
if(userda&&userda.avatar.url)
{

    const {url}=userda.avatar
    const {name}=userda
    const {title,quote}=userda
    urli=url
    namei=name
    titlei=title
    quto=quote
}

    return (
    <>
    
    <section class="hero-area hero-carousel-active" id="home">
        
        <div class="single-hero-area hero-bg-1 bg_cover" data-scroll-area="true">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="hero-area-content">
                         
                            <p class="hero-para"> {quto} <br></br>
                                With Your New Experience </p>
                            <h1 class="hero-heading">
                               {namei}
                            </h1>
                            <div class="hero-area-menu">
                                <ul>
                                    <li><a href="#">{titlei}</a></li>
                                    
                                </ul>
                            </div>
                            
                            <a href="#" class="btn hero-btn">get Started <i class="fa fa-arrow-right"></i></a>
                            <a href="https://www.youtube.com/watch?v=iogabydg2y0" class="video-btn video-popup"><i class="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-scrolli">
                <span><i class="fa fa-arrow-down"></i></span>
            </div>
        </div>
        
            
        
    </section>
    </>)
}

export default Hero