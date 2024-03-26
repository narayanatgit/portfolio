 import React from 'react'

export const ProjectDeatial = (props) => {

  var iu
  const {data}=props
if(data)
{
  iu=data
}
  return (
    <div class="single-blog-area">
    <div class="single-blog-img">
        <img src={iu.image.url} alt=""/>
    </div>
    <div class="single-blog-content">
        <p>Title: {iu.title}</p>
        <p><i class="fa fa-github fa-2x" ></i>{iu.githuburl}</p>
        <p><i class="fa fa-link  fa-2x" aria-hidden="true"></i>{iu.liveurl}</p>
        <p class="styled-para">Description: {iu.description}</p>
        <p class="styled-para">Tech Stack: {iu.techStack.map((tech)=>(<span>{tech} &nbsp;</span>))}</p>
        
    </div>
</div>
  )
}





