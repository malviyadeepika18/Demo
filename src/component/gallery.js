import React from 'react'
import Footer from "../component/Footer"

import Drink2 from "./../img/drink2.jpg"

import Lunch1 from "./../img/food1.jpg"

import Lunch3 from "./../img/food3.jpg"
import Dinner1 from "./../img/dinner1.jpg"
import Dinner2 from "./../img/dinner2.jpg"
import Dinner3 from "./../img/dinner3.jpg"


function gallery() {
  return (
    <div>
         <div className="container-fluid Smenu-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center contentsetr">
              <h1 className="m-b-20 contentcolr heading-title text-center">Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>Gallery</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="pic-gallery">
              <div className="row">
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src={Dinner1}
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src={Lunch1}
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src={Dinner3}
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src={Lunch3}
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src={Dinner2}
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src={Drink2}
                      alt="website template image"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-imfo-box">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <i className="fa fa-volume-control-phone"></i>
                <div className="overflow-hidden">
                  <h4>Phone</h4>
                  <p className="lead">9357754887</p>
                </div>
              </div>
              <div className="col-md-4">
                <i className="fa fa-envelope"></i>
                <div className="overflow-hidden">
                  <h4>Email</h4>
                  <p className="lead">deemalviya18@gmail.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <i className="fa fa-map-marker"></i>
                <div className="overflow-hidden">
                  <h4>Location</h4>
                  <p className="lead">Misrod Bhopal,MP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     <Footer/>
      </div>

   
  )
}

export default gallery