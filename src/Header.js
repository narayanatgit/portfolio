
import {React,useState,useContext} from "react"

 function Header(props)

{

    const [load,setload]=useState(false)

    const {userda}= props
   
   var nameadd=''
    var phone=''
    var  emaili=''
   if(userda &&userda.about)
   {
      
         const {address,phoneNumber}=userda.about
         nameadd=address
         phone=phoneNumber
         const {email}=userda
         emaili=email

}
    return (

<>








<>
  
  <div id="loading">
      <div id="loading-center">
          <div id="loading-center-absolute">
              <div className="object" id="object_one"></div>
              <div className="object" id="object_two"></div>
              <div className="object" id="object_three"></div>
              <div className="object" id="object_four"></div>
          </div>
      </div>
  </div>

  <div className="offcanvas-search-area">
      <form action="#">
          <input type="text" placeholder="search"/>
          <span className="close-bar"><i className="fas fa-times"></i></span>
      </form>
  </div>

  <header>
      <div className="top-header-area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-9">
                      <div className="row">
                          <div className="col-lg-3">
                              <div className="top-header-content">
                                  <span><i className="fas fa-phone"></i>{phone}</span>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="top-header-content">
                                  <span><i className="fas fa-map-marker-alt"></i>{nameadd}</span>
                              </div>
                          </div>
                          <div className="col-lg-5">
                              <div className="top-header-content">
                                  <span><i className="far fa-envelope"></i>{emaili}</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 text-right border">
                      <div className="top-header-social-links">
                          <ul>
                              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="bottom-header-area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-2">
                      <div className="logo">
                          <a href="index.html"><img src="assets/images/logo.png" alt=""/></a>
                      </div>
                  </div>
                  <div className="col-lg-10 text-right">
                      <div className="mobile-menu-wrap"></div>
                      <div className="header-search">
                          <span className="search-btn"><i className="fa fa-search"></i></span>
                      </div>
                      <div className="main-menu">
                          <nav>
                              <ul id="mobile-menu"> 
                                  <li className="current"><a href="#home">Home</a></li>
                                  <li><a href="#About">About</a></li>
                                  <li><a href="#Services">Services</a></li>
                             
                                  <li><a href="#team">Skills</a></li>
                                  
                                  <li><a href="#Blog">Projects</a>
                                  </li>
                                  <li><a href="#Contact">Contact</a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </header>


      
      </>
      


</>
      
    )}

export default Header