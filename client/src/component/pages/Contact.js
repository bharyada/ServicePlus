import React, { Component } from "react";
// import ServiceSection from '../layouts/Servicessection';
//import OtherServiceSection from '../layouts/OtherServiceSection';

class Contact extends Component {
  render() {
    return (
      <div className="SERVICE">
        <div id="inner-page">
          <div className="container">
            <div className="row SERVICE-Data ContMar">
              <div className="col-md-8 col-sm-12 col-xs-12">
                <div className="Title_h1">Contact Us</div>
                <div className="dd">SERVICE+ - More than just a website</div>
                <p>
                  SERVICE+ is here to provide you with more information, answer
                  any question you may have and create an effective solution for
                  your instructional needs. Use the form below to drop us an
                  email. Old fashioned phone calls work too.
                </p>
                <div className="row">
                  <div className="col-md-12">
                    <div id="FeedGrid">
                      <div className="light-form">
                        <div className="light-form__title">
                          Enter Your Details{" "}
                        </div>
                        <form id="service-contact" method="POST">
                          <div className="light-form__wrap">
                            <div className="light-form__group">
                              <input
                                name="contact_name"
                                className="contact_name light-form__control light-form__control--text"
                                type="text"
                              />
                              <label className="light-form__label">
                                You name:
                              </label>
                              <span className="quote_error contact_name_error"></span>
                            </div>
                            <div className="light-form__group">
                              <input
                                maxLength="10"
                                name="contact_phone"
                                className="contact_phone light-form__control light-form__control--text"
                                type="text"
                              />
                              <label className="light-form__label">
                                Phone number:
                              </label>
                              <span className="quote_error contact_phone_error"></span>
                            </div>
                          </div>
                          <div className="light-form__wrap">
                            <div className="light-form__group">
                              <input
                                name="contact_email"
                                className="contact_email light-form__control light-form__control--text"
                                type="text"
                              />
                              <label className="light-form__label">
                                Email ID:
                              </label>
                              <span className="quote_error contact_email_error"></span>
                            </div>
                            <div className="light-form__group">
                              <select
                                name="contact_usertype"
                                className="contact_usertype"
                              >
                                <option value="">Who you are?</option>
                                <option value="Customer">Customer</option>
                                <option value="Packers & Movers">
                                  Packers & Movers
                                </option>
                              </select>
                              <span className="quote_error contact_usertype_error"></span>
                            </div>
                          </div>
                          <div className="light-form__wrap">
                            <textarea
                              name="contact_message"
                              className="contact_message light-form__control light-form__control--textarea"
                            ></textarea>
                            <label className="light-form__label">
                              Message:
                            </label>
                            <span className="quote_error contact_message_error"></span>
                          </div>
                          <div className="light-form__wrap--center">
                            <input
                              className="light-form__btn"
                              type="submit"
                              value="Send"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12 text-left">
                <div id="ContInfo">
                  <div className="Address">Address Info</div>
                  <div className="CoName">
                    SERVICE+
                    <a className="CoName" href="/">
                      Packers & Movers Contact
                    </a>
                  </div>
                  <p>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      Address
                    </span>
                    Address Will be coming soon
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      E-mail
                    </span>
                    <a
                      href="cdn-cgi/l/email-protection.html"
                      className="__cf_email__"
                      data-cfemail="a8cbc7c6dcc9cbdce8d8c5ccc1da86cbc7c5"
                    >
                      servicepluscare@gmail.com
                    </a>
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-phone" aria-hidden="true"></i> Contact
                    </span>
                    +91-8689890905
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
