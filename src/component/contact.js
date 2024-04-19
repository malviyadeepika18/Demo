import React from "react";
import Footer from "../component/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function contact() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    YourPersonSelect: Yup.number().required("Please select number of persons"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    YourPersonSelect: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Perform form submission logic here
    console.log("Form submitted with values:", values);

    // Reset the form after successful submission
    resetForm();
  };

  return (
    <div>
      <div className="container-fluid Smenu-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center contentsetr">
              <h1 className="m-b-20 contentcolr heading-title">Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-title text-center">
              <h2>Contact</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ dirty, isValid }) => (
                <form action="#" method="post" id="contactForm">
                  <div className="row">
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
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          name="email"
                          placeholder="Your Email"
                          type="text"
                          id="email"
                          className="form-control"
                          required
                          style={{ marginTop: "15px" }}
                        ></input>
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

                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="Your Message"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          required
                          style={{ marginTop: "15px" }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <p>
                    <a
                      className="btn btn-lg btn-circle btn-outline-new-white"
                      href=""
                    >
                      SEND MESSAGE
                    </a>
                  </p>
                </form>
              )}
            </Formik>
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

export default contact;
