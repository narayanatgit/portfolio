import React,{useEffect, useState} from 'react'
import { ProjectDeatial } from './ProjectDeatial'
import { Link,Navigate,useNavigate } from 'react-router-dom'
function Projects(props)
{
  const nav=useNavigate()
    const [dis,setdis]=useState()
 
    var data=[]
   var search=[]
    const {userda}=props
    
   
    if(userda)
    {
         data=userda
         search=data
         
       
    }
   

    const handlesearchchange=(e)=>
    { 
        if(userda){
            if(!e.target.value) return setdis(data)

      
        console.log(e.target.value)

        const trimmedArray = data.map(data => ({
            ...data,
            techStack: data.techStack.map(hobby => hobby.trim())
        }));
       
   
        const result=trimmedArray.filter(item=>
           
             item.techStack.includes(e.target.value.trim())
            
        )
        
       search=result
       setdis(search)
       console.log(dis)
        
        }
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
                            Project</h1>

                            <div className="search">
                            
  <input type='text' onChange={handlesearchchange} placeholder='Search'/>

       
      </div>
                    </div>
                </div>
                
            </div>
            <div class="row">
                {dis?(dis.map((item)=>(
                <div  class="col-lg-4">
                    <div onClick={()=>{nav(`/${item.title}`)}} class="single-blog-area">
                        <div class="single-blog-img">
                            <img src={item.image.url} alt=""/>
                        </div>
                        <div class="single-blog-content">
                            <p>Title: {item.title}</p>
                            <p><i class="fa fa-github fa-2x" ></i>{item.githuburl}</p>
                            <p><i class="fa fa-link  fa-2x" aria-hidden="true"></i>{item.liveurl}</p>
                            <p class="styled-para">Tech Stack: {item.techStack.map((tech)=>(<span>{tech} &nbsp;</span>))}</p>
                            
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    
                </div>))):(data.map((item)=>(
                <div  class="col-lg-4">
                    <div  class="single-blog-area">
                        <div class="single-blog-img">
                            <img src={item.image.url} alt=""/>
                        </div>
                        <div onClick={()=>{nav(`/${item.title}`)}}  class="single-blog-content">
                            <p>Title: {item.title}</p>
                            <p><i class="fa fa-github fa-2x" ></i>{item.githuburl}</p>
                            <p><i class="fa fa-link  fa-2x" aria-hidden="true"></i>{item.liveurl}</p>
                            <p class="styled-para">Tech Stack: {item.techStack.map((tech)=>(<span>{tech} &nbsp;</span>))}</p>
                            
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    
                </div>)))}
                
              
            </div>
        </div>
    </section>
        </>
    )
}


export default Projects