import React from 'react'
// import { Helmet } from "react-helmet-async";


function Footer() {
  return (
    <>
   <div>

   
  {/* Start Footer 2 Dark  */}
  <div className="fables-main-background-color white-color py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <a href="#" className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"><img src="assets/custom/images/fables-logo.png" alt="fables template" /></a>
          <p className="font-15 fables-third-text-color">
            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. 
            <br /><br />
            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p> 
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">Contact us</h2>
          <div className="my-3">
            <h4 className="font-16 semi-font"><span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block" /> Address Information</h4>
            <p className="font-14 fables-fifth-text-color mt-2 ml-4">level13, 2Elizabeth St, Melbourne, Victor 2000</p>
          </div>
          <div className="my-3">
            <h4 className="font-16 semi-font"><span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block" /> Call Now </h4>
            <p className="font-14 fables-fifth-text-color mt-2 ml-4">+333 111 111 000</p>
          </div>
          <div className="my-3">
            <h4 className="font-16 semi-font"><span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block" /> Mail </h4>
            <p className="font-14 fables-fifth-text-color mt-2 ml-4">adminsupport@website.com</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">EXPLORE OUR SITE</h2>
          <ul className="nav fables-footer-links">
            <li><a href="about1.html">About Us</a></li>
            <li><a href="contactus1.html">Contact Us</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
          </ul>
        </div>
      </div> 
    </div>
  </div>
  <div className="copyright fables-main-background-color mt-0 border-0 white-color">
    <ul className="nav fables-footer-social-links just-center fables-light-footer-links">
      <li><a href="#" target="_blank"><i className="fab fa-google-plus-square" /></a></li>
      <li><a href="#" target="_blank"><i className="fab fa-facebook" /></a></li>
      <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
      <li><a href="#" target="_blank"><i className="fab fa-pinterest-square" /></a></li>
      <li><a href="#" target="_blank"><i className="fab fa-twitter-square" /></a></li>
      <li><a href="#" target="_blank"><i className="fab fa-linkedin" /></a></li>
    </ul>
    <p className="mb-0">Copyright © Fables 2018. All rights reserved.</p> 
  </div>
  {/* /End Footer 2 Dark */}
</div>

    </>
  )
}

export default Footer