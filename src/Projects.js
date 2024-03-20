function Projects(props)
{

    var data=[]
    const {userda}=props
    if(userda)
    {
         data=userda

    }


    return (

        <>
        
        <section class="blog-area pb-140" id="Blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 pb-80">
                    <div class="section-title blog-title">
                        <p class="section-para"><span></span>Projects</p>
                        <h1>Articles On  
                            New Project</h1>
                    </div>
                </div>
                
            </div>
            <div class="row">
                {data.map((item)=>(
                <div class="col-lg-4">
                    <div class="single-blog-area">
                        <div class="single-blog-img">
                            <img src={item.image.url} alt=""/>
                        </div>
                        <div class="single-blog-content">
                            <p><i class="fa-solid fa-rocket"></i>Title: {item.title}</p>
                            <p class="styled-para">Tech Stack: {item.techStack}</p>
                            
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    
                </div>))}
                
              
            </div>
        </div>
    </section>
        </>
    )
}

export default Projects