import React from 'react'
import Footer from "../component/Footer"



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
                      src="https://assets.bonappetit.com/photos/5a4fdd23f661865e1bb310f5/16:9/w_2560%2Cc_limit/all-day-cafe-dish.jpg"
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src="https://assets.bonappetit.com/photos/5a4fdd23f661865e1bb310f5/16:9/w_2560%2Cc_limit/all-day-cafe-dish.jpg"
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src="https://assets.bonappetit.com/photos/5a4fdd23f661865e1bb310f5/16:9/w_2560%2Cc_limit/all-day-cafe-dish.jpg"
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src="https://assets.bonappetit.com/photos/5a4fdd23f661865e1bb310f5/16:9/w_2560%2Cc_limit/all-day-cafe-dish.jpg"
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src="https://assets.bonappetit.com/photos/5a4fdd23f661865e1bb310f5/16:9/w_2560%2Cc_limit/all-day-cafe-dish.jpg"
                      alt="website template image"
                    ></img>
                  </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <a class="lightbox" href="assets/images/gallery-img-01.jpg">
                    <img
                      class="img-fluid"
                      src="https://assets.bonappetit.com/photos/5a4fdd23f661865e1bb310f5/16:9/w_2560%2Cc_limit/all-day-cafe-dish.jpg"
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