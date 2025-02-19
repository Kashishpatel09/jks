import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Contact() {
  return (
    <>
    <Header/>
 <div>
  {/* Start Header */}
  <div className="fables-header fables-after-overlay">
    <div className="container"> 
      <h2 className="fables-page-title fables-second-border-color">Contact 1</h2>
    </div>
  </div>  
  {/* /End Header */}
  {/* Start Breadcrumbs */}
  <div className="fables-light-background-color">
    <div className="container"> 
      <nav aria-label="breadcrumb">
        <ol className="fables-breadcrumb breadcrumb px-0 py-3">
          <li className="breadcrumb-item"><a href="#" className="fables-second-text-color">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Contact 1</li>
        </ol>
      </nav> 
    </div>
  </div>
  {/* /End Breadcrumbs */}
  {/* Start page content */} 
  <div className="container"> 
    <div className="row overflow-hidden">
      <div className="col-12 col-md-10 offset-md-1 mt-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 text-center mb-5 mb-md-0 wow fadeInDown" data-wow-delay=".5s">
            <span className="fables-iconmap-icon fa-3x fables-main-text-color fables-second-hover-color" /> 
            <h2 className="font-16 semi-font fables-main-text-color my-3">Address Information</h2>
            <p className="font-14 fables-forth-text-color">
              level13, 2Elizabeth St, Melbourne,Victor 2000</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center mb-5 mb-md-0 wow fadeInDown" data-wow-delay=".8s">
            <span className="fables-iconphone fa-3x fables-main-text-color fables-second-hover-color" />
            <h2 className="font-16 semi-font fables-main-text-color my-3">Mail &amp; Phone number</h2>
            <p className="font-14 fables-forth-text-color">adminsupport@website.com</p>
            <p className="font-14 fables-forth-text-color">+333 111 111 000</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center mb-5 mb-md-0 wow fadeInDown" data-wow-delay="1.1s">
            <span className="fables-iconshare-icon fa-3x fables-main-text-color fables-second-hover-color" />
            <h2 className="font-16 semi-font fables-main-text-color my-3">Stay In Touch</h2>
            <ul className="nav fables-contact-social-links"> 
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f fables-forth-text-color fa-fw" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram fables-forth-text-color  fa-fw" /></a></li> 
              <li><a href="#" target="_blank"><i className="fab fa-twitter fables-forth-text-color    fa-fw" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-linkedin fables-forth-text-color   fa-fw" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-0 mb-5 my-md-5"> 
          <h3 className="font-35 font-weight-bold fables-main-text-color text-center">Contact Us</h3>
          <p className="mt-3 fables-forth-text-color  text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
        </div> 
      </div>
    </div>        
    <div className="row mb-4 mb-md-5 overflow-hidden">
      <div className="col-12 col-sm-6 wow fadeInLeft">
        <form className="fables-contact-form">
          <div className="form-group"> 
            <input type="text" className="form-control rounded-0 p-3" placeholder="Name" />   
          </div>
          <div className="form-group"> 
            <input type="email" className="form-control rounded-0 p-3" placeholder="Email" />
          </div>
          <div className="form-group"> 
            <input type="text" className="form-control rounded-0 p-3" placeholder="Subject" />   
          </div>
          <div className="form-group"> 
            <textarea className="form-control rounded-0 p-3" placeholder="Message" rows={3} defaultValue={""} />
          </div>                       
          <button type="submit" className="btn fables-second-background-color rounded-0 text-white btn-block p-3">Send</button>
        </form>
      </div>
      <div className="col-12 col-sm-6 wow fadeInRight">
        <div id="map" data-lng="31.248848" data-lat="29.966324" data-icon="assets/custom/images/map-marker.png" data-zom={12} style={{width: '100%', height: 420}} />
      </div>
    </div>        
  </div> 
  {/* /End page content */}
</div>
<Footer/>

    </>
  )
}

export default Contact