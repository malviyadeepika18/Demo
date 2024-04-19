import React from "react";

import Footer from "../component/Footer"


const Section1 = () => {
  return (
    <div>
      <div className="container-fluid container-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center contentsetr">
              <h1 className="m-b-20">
                <strong className="contentcolr">
                  Welcome To
                  <br></br>
                  YummyFood Restaurant
                </strong>
              </h1>
              <p className="m-b-40">
                See how your users experience your website in realtime or view
                <br></br>
                trends to see any changes in performance over time.
              </p>

              <p>
                <a
                  class="btn btn-lg btn-circle btn-outline-new-white"
                  href="/reservation"
                >
                  Reservation
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            src="https://m.media-amazon.com/images/I/71a0PWlJPUL._AC_UF1000,1000_QL80_.jpg"
            class="imgcafe d-flex align-items-center"
          />
        </div>
        <div className="col-6">
          <h3 className="mt-10 text-center">
            Welcome To My YummyFood Restaurant
          </h3>
          <p>Little story</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed
            convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante
            sodales augue, eget lacinia lectus erat et sem. Sed semper orci sit
            amet porta placerat. Etiam quis finibus eros. Sed aliquam metus
            lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo
            vestibulum, et maximus sem pulvinar.
          </p>
          <p>
            <a
              class="btn btn-lg btn-circle btn-outline-new-white"
              href="/reservation"
            >
              Reservation
            </a>
          </p>
        </div>
      </div>
      <div className="row container-mid">
        <div className="col-md-12  d-flex flex-column justify-content-center align-items-center colosss">
          {" "}
          <h1>
            If you're not the one cooking,<br></br> stay out of the way and
            compliment the chef
          </h1>
        </div>
      </div>

      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button class="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".drink">DRINKS</button>
                  <button data-filter=".lunch">LUNCH</button>
                  <button data-filter=".dinner">DINNER</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row special-list ">
            <div className="col-lg-4 col-md-6 special-grid drinks">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid drinks">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 special-grid drinks">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid lunch">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid lunch">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid lunch">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid dinner">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid dinner">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid dinner">
              <div className="gallery-single fix">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ggtovjisp8p652vvof6z"
                  className="img-fluid"
                />
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
{/* --------------CUSTOMER REVIEWS--section------------------------------------------------------- */}

        {/* <div className="customer-reviews-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2> CUSTOMER REVIEWS</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
    </div>
  );
};

export default Section1;
