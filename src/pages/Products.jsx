import React from 'react'
import Header from '../component/Header'

function Products() {
  return (
    <>
    <Header/>
      {/* Start Header */}
      <div className="fables-header fables-after-overlay bg-rules">
    <div className="container"> 
      <h2 className="fables-page-title fables-second-border-color wow fadeInLeft" data-wow-duration="1.5s">Products</h2>
    </div>
  </div>  
  {/* /End Header */}
  {/* Start Breadcrumbs */}
  <div className="fables-light-gary-background">
    <div className="container"> 
      <nav aria-label="breadcrumb">
        <ol className="fables-breadcrumb breadcrumb px-0 py-3">
          <li className="breadcrumb-item"><a href="#" className="fables-second-text-color">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Products </li>
        </ol>
      </nav> 
    </div>
  </div>
  {/* /End Breadcrumbs */}

  {/* Start page content */}  
  <div className="container">
    <div className="row mt-4 my-md-5"> 
      <div className="col-12 col-sm-6 mb-4 mb-lg-5"> 
        <div className="image-container zoomOut-effect">
          <a href="#"><img src="assets/custom/images/gallery1.jpg" alt className="w-100" /></a> 
        </div>
        <h2 className="my-3"><a href="#" className="fables-main-text-color fables-second-hover-color font-26 semi-font gallery-title">Project Title</a></h2>
        <div className="row my-2">
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Categories </span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : web design </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Client</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : Donec sed odio </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Date</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : 18 May 2017 </span>
          </div>
        </div>
        <p className="fables-fifth-text-color font-14">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
        </p>
        <a href className="btn fables-second-background-color white-color white-color-hover fables-main-hover-background-color font-15 mt-4 px-5 py-2
                    ">See Project</a>   
      </div>
      <div className="col-12 col-sm-6 mb-4 mb-lg-5"> 
        <div className="image-container zoomOut-effect">
          <a href="#"><img src="assets/custom/images/gallery2.jpg" alt className="w-100" /></a> 
        </div>
        <h2 className="my-3"><a href="#" className="fables-main-text-color fables-second-hover-color font-26 semi-font gallery-title">Project Title</a></h2>
        <div className="row my-2">
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Categories </span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : web design </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Client</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : Donec sed odio </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Date</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : 18 May 2017 </span>
          </div>
        </div>
        <p className="fables-fifth-text-color font-14">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
        </p>
        <a href className="btn fables-second-background-color white-color white-color-hover fables-main-hover-background-color font-15 mt-4 px-5 py-2
                    ">See Project</a> 
      </div>
      <div className="col-12 col-sm-6 mb-4 mb-lg-5"> 
        <div className="image-container zoomOut-effect">
          <a href="#"><img src="assets/custom/images/gallery3.jpg" alt className="w-100" /></a> 
        </div>
        <h2 className="my-3"><a href="#" className="fables-main-text-color fables-second-hover-color font-26 semi-font gallery-title">Project Title</a></h2>
        <div className="row my-2">
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Categories </span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : web design </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Client</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : Donec sed odio </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Date</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : 18 May 2017 </span>
          </div>
        </div>
        <p className="fables-fifth-text-color font-14">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
        </p>
        <a href className="btn fables-second-background-color white-color white-color-hover fables-main-hover-background-color font-15 mt-4 px-5 py-2
                    ">See Project</a> 
      </div> 
      <div className="col-12 col-sm-6 mb-4 mb-lg-5"> 
        <div className="image-container zoomOut-effect">
          <a href="#"><img src="assets/custom/images/gallery4.jpg" alt className="w-100" /></a> 
        </div>
        <h2 className="my-3"><a href="#" className="fables-main-text-color fables-second-hover-color font-26 semi-font gallery-title">Project Title</a></h2>
        <div className="row my-2">
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Categories </span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : web design </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Client</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : Donec sed odio </span>
          </div>
          <div className="col-12 col-lg-4">
            <span className="fables-main-text-color semi-font font-14 gallery-subtitle">Date</span>
            <span className="fables-forth-text-color font-14 gallery-subtitle"> : 18 May 2017 </span>
          </div>
        </div>
        <p className="fables-fifth-text-color font-14">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
        </p>
        <a href className="btn fables-second-background-color white-color white-color-hover fables-main-hover-background-color font-15 mt-4 px-5 py-2
                    ">See Project</a>  
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

  {/* /End page content */}




    </>
  )
}

export default Products