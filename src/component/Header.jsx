import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (

<div>
  <div className="search-section">
    <a className="close-search" href="#" />
    <div className="d-flex justify-content-center align-items-center h-100">
      <form method="post" action="#" className="w-50">
        <div className="row">
          <div className="col-10">
            <input type="search" defaultValue className="form-control palce bg-transparent border-0 search-input" placeholder="Search Here ..." /> 
          </div>
          <div className="col-2 mt-3">
            <button type="submit" className="btn bg-transparent text-white"> <i className="fas fa-search" /> </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  {/* Start Top Header */}
  <div className="fables-forth-background-color fables-top-header-signin">
    <div className="container">
      <div className="row" id="top-row">
        <div className="col-12 col-sm-2 col-lg-12">
        </div>
        <div className="col-12 col-sm-5 col-lg-6 text-left">
          <p className="fables-third-text-color font-13"><span className="fables-iconphone" /> Phone :  (888) 6000 6000 - (888) 6000 6000</p>
        </div>
        <div className="col-12 col-sm-5 col-lg-6 text-right">
          <p className="fables-third-text-color font-13"><span className="fables-iconemail" /> Email: Design@domain.com</p>
        </div>
      </div>
    </div>
  </div>

  
 <div>

 <div className="fables-navigation fables-main-background-color py-3 py-lg-0">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-9 pr-md-0">                       
          <nav className="navbar navbar-expand-md btco-hover-menu py-lg-2">
            <a className="navbar-brand pl-0" href="index.html"><img src="assets/custom/images/fables-logo.png" alt="Fables Template" className="fables-logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fablesNavDropdown" aria-controls="fablesNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fables-iconmenu-icon text-white font-16" />
            </button>
            <div className="collapse navbar-collapse" id="fablesNavDropdown"> 
              <ul className="navbar-nav mx-auto fables-nav">   
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="sub-nav1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/about" id="sub-nav2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/services" id="sub-nav4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Service
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/products" id="sub-nav5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Products
                  </Link>
                </li>  
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/contact" id="sub-nav7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact Us
                  </Link>
                </li>  
              </ul> 
            </div>
          </nav>
        </div>
        <div className="col-12 col-md-2 col-lg-3 pr-md-0 icons-header-mobile">
          <div className="fables-header-icons">
            
            <a href="#" className="open-search fables-third-text-color right  top-header-link px-3 px-md-2 px-lg-4 fables-second-hover-color border-0 max-line-height">
              <span className="fables-iconsearch-icon" />
            </a> 
            <a href="signin.html" className="fables-third-text-color fables-second-hover-color font-13 top-header-link px-3 px-md-2 px-lg-4 border-0 max-line-height"><span className="fables-iconuser" /></a>
          </div>
        </div>
      </div>
    </div>
  </div> 
 
  {/* /End Fables Navigation */}   
  
  <div id="search">
    <button type="button" className="close">x</button>
    <form>
      <input type="search" defaultValue placeholder="type keyword(s) here" />
      <button type="submit" className="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-4 bg-transparent px-5 py-2"> 
        <span className="fables-btn-value font-16 semi-font">Search</span></button>
    </form>
  </div> 

  <div>
  {/*Navbar*/}
  <nav className="navbar navbar-expand-lg navbar-light special-color-dark">
    {/* Collapse button */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
    {/* Collapsible content */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
      {/* Links */}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown mega-dropdown active">
          <a className="nav-link dropdown-toggle text-uppercase no-caret" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Features</a>
          <div className="dropdown-menu mega-menu v-2 row z-depth-1 special-color" aria-labelledby="navbarDropdownMenuLink1">
            <div className="row mx-md-4 mx-1">
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-5 mb-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item mb-0" href>Lorem ipsum dolor sit amet</a></li>
                  <li className><a className="menu-item" href>Consectetur adipiscing elit</a></li>
                  <li className><a className="menu-item" href>Sed do eiusmod tempor incididunt</a></li>
                  <li className><a className="menu-item" href>Ut labore et dolore magna</a></li>
                  <li className><a className="menu-item" href>Ut enim ad minim veniam</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-md-5 mt-4 mb-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item" href>Quis nostrud exercitation</a></li>
                  <li className><a className="menu-item" href>Duis aute irure dolor in</a></li>
                  <li className><a className="menu-item" href>Laboris nisi ut aliquip ex ea commodo consequat</a></li>
                  <li className><a className="menu-item" href>Reprehenderit in voluptate</a></li>
                  <li className><a className="menu-item" href>Esse cillum dolore eu fugiat nulla pariatur</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item" href>Excepteur sint occaecat</a></li>
                  <li className><a className="menu-item" href>Sunt in culpa qui officia</a></li>
                  <li className><a className="menu-item" href>Sed ut perspiciatis unde omnis iste natus error</a></li>
                  <li className><a className="menu-item" href>Mollit anim id est laborum</a></li>
                  <li className><a className="menu-item" href>Accusantium doloremque laudantium</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-5">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item" href>Totam rem aperiam eaque</a></li>
                  <li className><a className="menu-item" href>Beatae vitae dicta sun</a></li>
                  <li className><a className="menu-item" href>Quae ab illo inventore veritatis et quasi architecto</a></li>
                  <li className><a className="menu-item" href>Nemo enim ipsam voluptatem</a></li>
                  <li className><a className="menu-item" href>Neque porro quisquam est</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown mega-dropdown">
          <a className="nav-link dropdown-toggle text-uppercase no-caret" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Technology</a>
          <div className="dropdown-menu mega-menu v-2 row z-depth-1 special-color" aria-labelledby="navbarDropdownMenuLink1">
            <div className="row mx-md-4 mx-1">
              <div className="col-md-12 col-lg-4 sub-menu my-lg-5 mt-5 mb-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                {/*Featured image*/}
                <div className="view overlay hm-white-slight mb-3 z-depth-1">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(37).jpg" className="img-fluid" alt="First sample image" />
                  <div className="mask flex-center">
                    <p />
                  </div>
                </div>
                <h4 className="mb-2"><a className="news-title-2 pl-0" href>Lorem ipsum dolor sit</a></h4>
                <p className="font-small text-uppercase white-text"><i className="fa fa-clock-o pr-2" aria-hidden="true" />July 17, 2017 / <i className="fa fa-comments-o px-1" aria-hidden="true" /> 20</p>
              </div>
              <div className="col-md-6 col-lg-4 sub-menu my-lg-5 my-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item" href>Quis nostrud exercitation</a></li>
                  <li className><a className="menu-item" href>Duis aute irure dolor in</a></li>
                  <li className><a className="menu-item" href>Laboris nisi ut aliquip ex ea commodo consequat</a></li>
                  <li className><a className="menu-item" href>Reprehenderit in voluptate</a></li>
                  <li className><a className="menu-item" href>Esse cillum dolore eu fugiat nulla pariatur</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 sub-menu my-lg-5 my-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item" href>Excepteur sint occaecat</a></li>
                  <li className><a className="menu-item" href>Sunt in culpa qui officia</a></li>
                  <li className><a className="menu-item" href>Sed ut perspiciatis unde omnis iste natus error</a></li>
                  <li className><a className="menu-item" href>Mollit anim id est laborum</a></li>
                  <li className><a className="menu-item" href>Accusantium doloremque laudantium</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown mega-dropdown">
          <a className="nav-link dropdown-toggle text-uppercase no-caret" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lifestyle</a>
          <div className="dropdown-menu mega-menu v-2 row z-depth-1 special-color" aria-labelledby="navbarDropdownMenuLink1">
            <div className="row mx-md-4 mx-1">
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-5 mb-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item mb-0" href>Lorem ipsum dolor sit amet</a></li>
                  <li className><a className="menu-item" href>Consectetur adipiscing elit</a></li>
                  <li className><a className="menu-item" href>Sed do eiusmod tempor incididunt</a></li>
                  <li className><a className="menu-item" href>Ut labore et dolore magna</a></li>
                  <li className><a className="menu-item" href>Ut enim ad minim veniam</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-md-5 mt-4 mb-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                {/*Featured image*/}
                <div className="view overlay hm-white-slight mb-3 z-depth-1">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" className="img-fluid" alt="First sample image" />
                  <div className="mask flex-center">
                    <p />
                  </div>
                </div>
                <h4 className="mb-2"><a className="news-title-2 pl-0" href>Lorem ipsum dolor sit</a></h4>
                <p className="font-small text-uppercase white-text"><i className="fa fa-clock-o pr-2" aria-hidden="true" />July 17, 2017 / <i className="fa fa-comments-o px-1" aria-hidden="true" /> 20</p>
              </div>
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-4">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                {/*Featured image*/}
                <div className="view overlay hm-white-slight mb-3 z-depth-1">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" className="img-fluid" alt="First sample image" />
                  <div className="mask flex-center">
                    <p />
                  </div>
                </div>
                <h4 className="mb-2"><a className="news-title-2 pl-0" href>Ut labore et dolore magna</a></h4>
                <p className="font-small text-uppercase white-text"><i className="fa fa-clock-o pr-2" aria-hidden="true" />July 16, 2017 / <i className="fa fa-comments-o px-1" aria-hidden="true" /> 25</p>
              </div>
              <div className="col-md-6 col-xl-3 sub-menu my-xl-5 mt-4 mb-5">
                <h6 className="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                <ul className="caret-style pl-0">
                  <li className><a className="menu-item" href>Totam rem aperiam eaque</a></li>
                  <li className><a className="menu-item" href>Beatae vitae dicta sun</a></li>
                  <li className><a className="menu-item" href>Quae ab illo inventore veritatis et quasi architecto</a></li>
                  <li className><a className="menu-item" href>Nemo enim ipsam voluptatem</a></li>
                  <li className><a className="menu-item" href>Neque porro quisquam est</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* Links */}
      {/* Search form */}
    </div>
    {/* Collapsible content */}
  </nav>
  {/*/.Navbar*/}
  {/* /End Fables Navigation */}       
  <div id="search">
    <button type="button" className="close">×</button>
    <form>
      <input type="search" defaultValue placeholder="type keyword(s) here" />
      <button type="submit" className="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-4 bg-transparent px-5 py-2"> 
        <span className="fables-btn-value font-16 semi-font">Search</span></button>
    </form>
  </div>
</div>









  {/* Start page content */}
  {/* <div className="fables-page-content">  
    <div className="fables-testimonial fables-after-overlay bg-rules py-4 py-lg-5" style={{backgroundImage: 'url(assets/custom/images/index-overlay.jpg)'}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 text-center wow zoomIn position-relative z-index"> 
            <h3 className="fables-second-text-color mb-3 font-30 font-weight-bold">Working towards your business goals</h3>  
            <p className="font-weight-light fables-third-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac lorem pretium laoreet enim at, malesuada Class aptent taciti sociosqu Duis congue turpis risus, ac dapibus mi malesuada ut. Duis feugiat nisi orci.Lorem ipsum dolor sit amet.
            </p>
            <a href="#" className="btn fables-second-border-color fables-second-text-color rounded-0 my-4 py-2 px-5 position-relative z-index fables-second-hover-background-color">Learn More</a> 
          </div> 
        </div>
      </div>
    </div>
    <div className="container my-4 my-lg-5"> 
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="text-center">
            <h2 className="fables-main-text-color font-35 font-weight-bold mt-0 mb-4 ">Latest Works</h2>
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
  </div> */}
</div>
</div>


    
  )
}

export default Header