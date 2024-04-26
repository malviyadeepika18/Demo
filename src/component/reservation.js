import React, { useState } from "react";
import Footer from "../component/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import TimePicker from "react-time-picker";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Reservation() {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contact:Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
    YourPersonSelect: Yup.number().required("Please select number of persons"),
    selectedTime: Yup.string().required("Please select a time"),
    selectedDate: Yup.date().required("Please select a date"),

    
  });

  const initialValues = {
    name: "",
    email: "",
    YourPersonSelect: "",
    selectedTime:"",
    contact:"",
    selectedDate: null,
  };

 

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
  const handleSubmit = (values, { resetForm }) => {
    // Perform form submission logic here
    console.log("Form submitted with values:", values);

    // Reset the form after successful submission
    resetForm();
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

             <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ dirty, isValid ,setFieldValue,values}) => (
        <Form id="contactForm">
          <div className="row">
            <div className="col-md-6">
              <h3  className="head-mb-15">Book Table</h3>
              <div className="col-md-12">
                <div className="form-group">
         
                <DatePicker
                 className="form-control"
               
                 placeholder="dd-MM-yyyy"
              selected={values.selectedDate}
              onChange={(date) => {
                setFieldValue('selectedDate', date); // Update Formik field value
                setSelectedDate(date); // Update local state
              }}
              dateFormat="dd-MM-yyyy"
          
         
              
            />
                            <ErrorMessage name="selectedDate" component="div" className="help-block with-errors errors-filed" />
                          </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <Field
                    as="select"
                    name="selectedTime"
                    className="form-control"
                    style={{ marginTop: "15px" }}
                 
                  >
                    <option value="">Select Time</option>
                    {timeOptions.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="selectedTime" component="div" className="help-block with-errors errors-filed" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <Field
                    as="select"
                    name="YourPersonSelect"
                    className="custom-select d-block form-control"
                  
                    style={{ marginTop: "15px" }}
                  >
                    <option disabled="" selected="">Please Select Person*</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Field>
                  <ErrorMessage name="YourPersonSelect" component="div" className="help-block with-errors errors-filed" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Contact Details</h3>
              <div className="col-md-12">
                <div className="form-group">
                  <Field
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    className="form-control"
                 
                    style={{ marginTop: "15px" }}
                  />
                  <ErrorMessage name="name" component="div" className="help-block with-errors errors-filed" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <Field
                    name="email"
                    placeholder="Your Email"
                    type="text"
                    className="form-control"
                 
                    style={{ marginTop: "15px" }}
                  />
                  <ErrorMessage name="email" component="div" className="help-block with-errors errors-filed" />
                </div>
              </div>
              <div className="col-md-12">
              <div className="form-group">
                <Field
                  name="contact"
                  placeholder="Your Phone Number"
                  type="text"
                  maxLength={10} 
                  className="form-control"
                  style={{ marginTop: "15px" }}
                />
                <ErrorMessage name="contact" component="div" className="help-block with-errors errors-filed" />
              </div>
            </div>
            </div>
          </div>
          <p>
            <button type="submit" className="btn btn-lg btn-circle btn-outline-new-white">BOOK TABLE</button>
          </p>
        </Form>
      )}
    </Formik>
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
