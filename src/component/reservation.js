import React, { useState } from "react";
import Footer from "../component/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import TimePicker from "react-time-picker";

function Reservation() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00");

  const generateTimeOptions = () => {
    const options = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j += 15) {
        const hour = i.toString().padStart(2, "0");
        const minute = j.toString().padStart(2, "0");
        options.push(`${hour}:${minute}`);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();


  return (
    <div>
      <div className="container-fluid Smenu-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center contentsetr">
              <h1 className="m-b-20 contentcolr heading-title text-center">
                Reservation
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Reservation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <form action="#" method="post" id="contactForm">
                <div className="row">
                  <div className="col-md-6 ">
                    <h3>Book Table</h3>
                    <div className="col-md-12">
                      <div className="form-group">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          dateFormat="dd/MM/yyyy"
                          className="form-control  datepicker-input " // Bootstrap styling
                          required
                        
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                      <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="form-control"
                          style={{ marginTop: "15px" }}
                          required
                        >
                          <option value="">Select Time</option>
                          {timeOptions.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          name="YourPersonSelect"
                          placeholder="Your Person Select"
                          id="guest"
                          className="custom-select d-block form-control"
                          required
                          style={{ marginTop: "15px" }}
                        >
                          <option disabled="" selected="">
                            Please Select Person*
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <h3>Contact Details</h3>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          name="name"
                          placeholder="Your Name"
                          type="text"
                          id="name"
                          className="form-control"
                          required
                          style={{ marginTop: "15px" }}
                        ></input>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          name="name"
                          placeholder="Your Name"
                          type="text"
                          id="name"
                          className="form-control"
                          required
                          style={{ marginTop: "15px" }}
                        ></input>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          name="name"
                          placeholder="Your Name"
                          type="text"
                          id="name"
                          className="form-control"
                          required
                          style={{ marginTop: "15px" }}
                        ></input>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <p>
                    <a
                      class="btn btn-lg btn-circle btn-outline-new-white"
                      href="https://www.free-css.com/free-css-templates"
                    >
                      BOOK TABLE
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
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
      <Footer />
    </div>
  );
}

export default Reservation;
