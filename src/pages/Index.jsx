import React from 'react'
import Header from '../component/Header'


function Index() {  
  return (

<div>
<Header/>
<div>
  {/*Video Section*/}
  <section className="content-section video-section fables-after-overlay">
    <div className="pattern-overlay">
      <a id="bgndVideo" className="player" data-property="{videoURL:'https://youtu.be/vZjfJrihzyg?si=hQl0fL5sKVKyaqzM',containment:'.video-section', quality:'large',mute: 'true' ,autoPlay:'true', opacity:1}">bg</a>
      <div className="container position-relative z-index">
        <div className="fables-video-caption text-center wow zoomIn" data-wow-delay="1s" data-wow-duration="2s">
          <h1 className="white-color font-weight-bold mt-6">We are a full service digital product agency </h1>  
          <p className="fables-fifth-text-color mt-3 mb-4 font-18">
            We are a full service digital product agency
          </p>
          <a data-fancybox href="https://youtu.be/vZjfJrihzyg?si=hQl0fL5sKVKyaqzM">
            <span className="fables-iconplay fables-second-text-color fa-4x wow bounce" />
          </a> 
        </div>
      </div>
    </div>
  </section>
  {/*Video Section Ends Here*/} 
</div>
  {/* Start page content */}    
  <div className="container">
    <div className="row my-3 my-md-5 overflow-hidden">
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay=".4s" data-wow-duration="1.5s">
        <span className="fables-iconbussiness fables-second-text-color fa-3x" />
        <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
        <p className="fables-forth-text-color font-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
        </p>
      </div>
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay=".8s" data-wow-duration="1.5s">
        <span className="fables-iconbussiness2 fables-second-text-color fa-3x" />
        <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
        <p className="fables-forth-text-color font-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
        </p>
      </div>
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay="1.2s" data-wow-duration="1.5s">
        <span className="fables-iconbussiness3 fables-second-text-color fa-3x" />
        <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
        <p className="fables-forth-text-color font-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
        </p>
      </div>
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay="1.6s" data-wow-duration="1.5s">
        <span className="fables-iconbussiness4 fables-second-text-color fa-3x" />
        <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
        <p className="fables-forth-text-color font-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
        </p>
      </div>
    </div> 
  </div>
  <div className="fables-choose-background fables-after-overlay py-4 py-md-5 bg-rules overflow-hidden px-3 px-md-0">
    <div className="container position-relative z-index">
      <div className="row">
        <div className="col-12 col-lg-6 p-0 image-container translate-effect-right wow fadeInLeft mb-3 mb-md-0" data-wow-delay="1s" data-wow-duration="1.5s">
          <img src="assets/custom/images/choose-img.jpg" alt className="w-100" />
        </div>
        <div className="col-12 col-lg-6 bg-white px-6 py-3 py-md-5 wow fadeInRight" data-wow-delay="1s" data-wow-duration="1.5s">
          <h2 className="font-30 font-weight-bold fables-second-text-color">WHY CHOOSE US</h2>
          <p className="fables-main-text-color font-14 my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur.
          </p>
          <div id="accordion">
            <div className="card border-0 mb-2">
              <div className="card-header p-0 border bg-transparent rounded-0" id="headingOne">
                <h5 className="mb-0 position-relative">
                  <span className="fables-second-background-color white-color d-inline-block 
 position-absolute fables-lus-icon pt-2 text-center">
                    <i className="fas fa-plus" />  
                  </span>
                  <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Clean and modern websites , Clean and modern websites
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                </div>
              </div>
            </div>
            <div className="card border-0 mb-2">
              <div className="card-header bg-transparent p-0 border rounded-0" id="headingTwo">
                <h5 className="mb-0 position-relative">
                  <span className="fables-second-background-color white-color d-inline-block 
 position-absolute fables-lus-icon pt-2 text-center">
                    <i className="fas fa-plus" />  
                  </span>
                  <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Clean and modern websites
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                </div>
              </div>
            </div>
            <div className="card border-0 mb-2">
              <div className="card-header p-0 border bg-transparent rounded-0" id="headingThree">
                <h5 className="mb-0 position-relative">
                  <span className="fables-second-background-color white-color d-inline-block 
 position-absolute fables-lus-icon pt-2 text-center">
                    <i className="fas fa-plus" />  
                  </span>
                  <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Clean and modern websites
                  </button>
                </h5>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                </div>
              </div>
            </div>
            <div className="card border-0 mb-2">
              <div className="card-header p-0 border bg-transparent rounded-0" id="headingfour">
                <h5 className="mb-0 position-relative">
                  <span className="fables-second-background-color white-color d-inline-block 
 position-absolute fables-lus-icon pt-2 text-center">
                    <i className="fas fa-plus" />  
                  </span>
                  <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Clean and modern websites
                  </button>
                </h5>
              </div>
              <div id="collapseFour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container my-4 my-lg-5"> 
    <div className="row">
      <div className="col-12 col-md-8 offset-md-2">
        <div className="text-center">
          <h2 className="fables-main-text-color font-35 font-weight-bold mt-0 mb-4 ">Products</h2>
          <p className="fables-forth-text-color mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum sunt nam.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right"> 
          <img src="assets/custom/images/blog-slider2.jpg" alt="image" className="img-fluid w-100" /> 
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink " /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider2.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider3.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider3.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider1.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider1.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider2.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink " /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider2.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider3.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider3.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider1.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink mx-2" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider1.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <a href="#" className="btn fables-second-border-color fables-second-text-color rounded-0 mt-4 mx-auto px-5 py-2 fables-second-hover-background-color">See all projects</a>
    </div> 
  </div>



 {/* Start Service */}


<div className="container">
  <div className="row my-4 my-md-5">
    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
    <div className="text-center">
          <h2 className="fables-main-text-color font-35 font-weight-bold mt-0 mb-4 ">Services</h2>
          <p className="fables-forth-text-color mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum sunt nam.
          </p>
        </div>
    </div>
    <div className="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn" data-wow-delay=".4s" data-wow-duration="1.5s"> 
      <div className="row text-center text-md-left">
        <div className="col-12 col-md-3"> 
          <span className="fables-iconhead-set-light fables-second-text-color fa-3x" />
        </div>
        <div className="col-12 col-md-9 pl-md-0">
          <h2 className="fables-main-text-color font-20 my-2 mt-md-0 semi-font">Free Updates &amp; Support</h2>
          <div className="font-15 fables-forth-text-color">
            Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim at.  
          </div>
        </div>
      </div> 
    </div>
    <div className="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn" data-wow-delay=".8s" data-wow-duration="1.5s">  
      <div className="row text-center text-md-left">
        <div className="col-12 col-md-3">
          <span className="fables-iconscreen fables-second-text-color fa-3x" />
        </div>
        <div className="col-12 col-md-9 pl-md-0">
          <h2 className="fables-main-text-color font-20 my-2 mt-md-0 semi-font">Highly Customizable</h2>
          <div className="font-15 fables-forth-text-color">
            Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim at.  
          </div>
        </div>
      </div> 
    </div>
    <div className="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn" data-wow-delay="1.2s" data-wow-duration="1.5s"> 
      <div className="row text-center text-md-left">
        <div className="col-12 col-md-3">
          <span className="fables-iconfile fables-second-text-color fa-3x" />
        </div>
        <div className="col-12 col-md-9 pl-md-0">
          <h2 className="fables-main-text-color font-20 my-2 mt-md-0 semi-font">Drag &amp; Drop Page Builder</h2>
          <div className="font-15 fables-forth-text-color">
            Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim at.   
          </div>
        </div>
      </div> 
    </div>
    <div className="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn" data-wow-delay="1.6s" data-wow-duration="1.5s"> 
      <div className="row text-center text-md-left">
        <div className="col-12 col-md-3">
          <span className="fables-iconhead-set-light fables-second-text-color fa-3x" />
        </div>
        <div className="col-12 col-md-9 pl-md-0">
          <h2 className="fables-main-text-color font-20 my-2 mt-md-0 semi-font">Free Updates &amp; Support</h2>
          <div className="font-15 fables-forth-text-color">
            Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim at.  
          </div>
        </div>
      </div> 
    </div>
    <div className="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn" data-wow-delay="2s" data-wow-duration="1.5s"> 
      <div className="row text-center text-md-left">
        <div className="col-12 col-md-3">
          <span className="fables-iconscreen fables-second-text-color fa-3x" />
        </div>
        <div className="col-12 col-md-9 pl-md-0">
          <h2 className="fables-main-text-color font-20 my-2 mt-md-0 semi-font">Highly Customizable</h2>
          <div className="font-15 fables-forth-text-color">
            Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim at.  
          </div>
        </div>
      </div> 
    </div>
    <div className="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn" data-wow-delay="2.4s" data-wow-duration="1.5s"> 
      <div className="row text-center text-md-left">
        <div className="col-12 col-md-3">
          <span className="fables-iconfile fables-second-text-color fa-3x" />
        </div>
        <div className="col-12 col-md-9 pl-md-0">
          <h2 className="fables-main-text-color font-20 my-2 mt-md-0 semi-font">Drag &amp; Drop Page Builder</h2>
          <div className="font-15 fables-forth-text-color">
            Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim at.   
          </div>
        </div>
      </div> 
    </div>
  </div> 
 
 
</div>
{/* End Service */}

{/* Start Team */}
<div className="container">
  <div className="fables-team overflow-hidden">
    <h2 className="font-35 font-weight-bold text-center fables-main-text-color my-4 my-lg-5">Team</h2> 
    <div className="row">
      <div className="col-6 col-md-3 wow fadeInDown mb-3" data-wow-delay=".3s">
        <div className="card fables-team-block fables-second-hover-text-color">
          <div className="image-container shine-effect">
            <a href="#"><img className="w-100" src="assets/custom/images/team2-1.jpg" alt="Fables Template" /></a>
          </div>
          <div className="card-body">
            <h5><a href="#" className="font-19 semi-font fables-main-text-color team-name">JOHN MARTIN</a></h5>
            <p className="font-13 fables-fifth-text-color italic my-2">Programmer</p> 
            <ul className="nav fables-team-social-links"> 
              <li><a href="#" target="_blank"><span className="fables-iconlinkedin-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
              <li><a href="#" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li>
              <li><a href="#" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
            </ul>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3 wow fadeInDown mb-3" data-wow-delay=".6s">
        <div className="card fables-team-block fables-second-hover-text-color">
          <div className="image-container shine-effect">
            <a href="#"><img className="w-100" src="assets/custom/images/team2-2.jpg" alt="Fables Template" /></a>
          </div>
          <div className="card-body">
            <h5><a href="#" className="font-19 semi-font fables-main-text-color team-name">JOHN MARTIN</a></h5>
            <p className="font-13 fables-fifth-text-color italic my-2">Programmer</p> 
            <ul className="nav fables-team-social-links"> 
              <li><a href="#" target="_blank"><span className="fables-iconlinkedin-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
              <li><a href="#" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li>
              <li><a href="#" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
            </ul>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3 wow fadeInDown mb-3" data-wow-delay=".9s">
        <div className="card fables-team-block fables-second-hover-text-color">
          <div className="image-container shine-effect">
            <a href="#"><img className="w-100" src="assets/custom/images/team2-1.jpg" alt="Fables Template" /></a>
          </div>
          <div className="card-body">
            <h5><a href="#" className="font-19 semi-font fables-main-text-color team-name">JOHN MARTIN</a></h5>
            <p className="font-13 fables-fifth-text-color italic my-2">Programmer</p> 
            <ul className="nav fables-team-social-links"> 
              <li><a href="#" target="_blank"><span className="fables-iconlinkedin-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
              <li><a href="#" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li>
              <li><a href="#" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
            </ul>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3 wow fadeInDown mb-3" data-wow-delay="1.2s">
        <div className="card fables-team-block fables-second-hover-text-color">
          <div className="image-container shine-effect">
            <a href="#"><img className="w-100" src="assets/custom/images/team2-2.jpg" alt="Fables Template" /></a>
          </div>
          <div className="card-body">
            <h5><a href="#" className="font-19 semi-font fables-main-text-color team-name">JOHN MARTIN</a></h5>
            <p className="font-13 fables-fifth-text-color italic my-2">Programmer</p> 
            <ul className="nav fables-team-social-links"> 
              <li><a href="#" target="_blank"><span className="fables-iconlinkedin-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
              <li><a href="#" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li>
              <li><a href="#" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon" /></a></li> 
            </ul>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</div>
{/* End Team */} 
                   
           
       
   




  
 

 
  <div className="container">
    <div className="row overflow-hidden">
      <div className="col-12">
        <h2 className="font-35 font-weight-bold text-center fables-main-text-color my-4 my-lg-5">Latest News</h2>
      </div>
      <div className="col-12 col-md-4 mb-4 mb-lg-5 wow bounceInLeft" data-wow-delay=".4s" data-wow-duration="1.5s"> 
        <div className="image-container translate-effect-right">
          <a href="#"><img src="assets/custom/images/cat-larg4.jpg" alt /></a>  
        </div>
        <h2 className="font-18 semi-font font-18  mt-3"><a href="#" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design</a></h2>
        <p className="fables-fifth-text-color font-13 my-1">09 November, 2018</p>
        <p className="fables-forth-text-color font-14">
          When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
        </p>
        <a href className="btn fables-main-text-color fables-second-hover-color p-0 underline mt-2">Read More</a> 
      </div>
      <div className="col-12 col-md-4 mb-4 mb-lg-5 wow bounceInLeft" data-wow-delay=".8s" data-wow-duration="1.5s">  
        <div className="image-container translate-effect-right">
          <a href="#"><img src="assets/custom/images/cat-larg5.jpg" alt /></a>  
        </div>  
        <h2 className="font-18 semi-font font-18  mt-3"><a href="#" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design</a></h2>
        <p className="fables-fifth-text-color font-13 my-1">09 November, 2018</p>
        <p className="fables-forth-text-color font-14">
          When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
        </p>
        <a href className="btn fables-main-text-color fables-second-hover-color p-0 underline mt-2">Read More</a> 
      </div>
      <div className="col-12 col-md-4 mb-4 mb-lg-5 wow bounceInLeft" data-wow-delay="1.2s" data-wow-duration="1.5s"> 
        <div className="image-container translate-effect-right">
          <a href="#"><img src="assets/custom/images/cat-larg6.jpg" alt /></a>  
        </div>
        <h2 className="font-18 semi-font font-18  mt-3"><a href="#" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design</a></h2>
        <p className="fables-fifth-text-color font-13 my-1">09 November, 2018</p> 
        <p className="fables-forth-text-color font-14">
          When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
        </p>
        <a href className="btn fables-main-text-color fables-second-hover-color p-0 underline mt-2">Read More</a> 
      </div>
    </div>
  </div>      




</div>


  )
}

export default Index