import React, {useState} from "react";
import Footer from "../component/Footer"
import Drink from "./../img/drink1.jpg"
import Drink2 from "./../img/drink2.jpg"
import Drink3 from "./../img/drink3.jpg"
import Lunch1 from "./../img/food1.jpg"
import Lunch2 from "./../img/food2.jpg"
import Lunch3 from "./../img/food3.jpg"
import Dinner1 from "./../img/dinner1.jpg"
import Dinner2 from "./../img/dinner2.jpg"
import Dinner3 from "./../img/dinner3.jpg"


const menuItems =[
  {category:"drink" ,image:Drink

},
{category:"drink" ,image:Drink2

},
{category:"drink" ,image:Drink3

},

{category:"lunch" ,image:Lunch1

},
{category:"lunch" ,image:Lunch2

},
{category:"lunch" ,image:Lunch3

},
{category:"dinner" ,image:Dinner1

},
{category:"dinner" ,image:Dinner2

},
{category:"dinner" ,image:Dinner3

},
]

function Menu() {

  const [filter,setFilter] = useState("*");

const handleFilterClick = (filterValue) => {
  console.log('Filter clicked:', filterValue); 
  setFilter(filterValue);
};
  return (
    <div>
      <div className="container-fluid Smenu-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center contentsetr">
              <h1 className="m-b-20 contentcolr heading-title text-center">Special Menu</h1>
            </div>
          </div>
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
                  <button className={filter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>
                    All
                  </button>
                  <button  className={filter === 'drink' ? 'active' : ''} onClick={() => handleFilterClick('drink')}>DRINKS</button>
                  <button  className={filter === 'lunch' ? 'active' : ''} onClick={() => handleFilterClick('lunch')}>LUNCH</button>
                  <button className={filter === 'dinner' ? 'active' : ''} onClick={() => handleFilterClick('dinner')}>DINNER</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row special-list">
        {menuItems
          .filter(item => filter === '*' || item.category === filter)
          .map((item, index) => (
            <div className={`col-lg-4 col-md-6 special-grid ${item.category}`} key={index}>
              <div className="gallery-single fix">
                <img
                  src={item.image}
                  alt={`Image ${index}`}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
           
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
}

export default Menu;
