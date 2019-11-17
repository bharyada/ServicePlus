import React from "react";

export default function FooterSection() {
  return (
    <div className="footer_section" id="contact">
      <div className="container">
        <div className="row">
          <div className="numbers">
            <span>
              <strong>Need Help?</strong> Call Us 24/7:
            </span>
            <p>+91-8689890905</p>
          </div>
          <div className="col-md-5 footer_left">
            <p>Keep in Touch</p>
            <ul className="address">
              <li>
                <i className="fa fa-envelope-o"></i> servicepluscare@gmail.com
              </li>
              <li>
                <i className="fa fa-phone"></i> +91-8689890905
              </li>
            </ul>
          </div>
          <div className="col-md-7 footer_right">
            <div className="col-md-12"></div>
            <form
              method="post"
              action="https://www.Service+.com/user/submitform"
            >
              <span className="col-md-12 msg"></span>
              <div className="col-md-6 footer_padding">
                <label htmlFor="name">Enter Your Name</label>
                <input
                  id="name"
                  name="name"
                  //onInput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^a-z. ^A-Z.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
                  type="text"
                  maxLength="300"
                  required
                  data-cf-modified-adc4804007e6b1b0f0135f59-=""
                />
                <label htmlFor="email">Enter Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  maxLength="256"
                  required
                />
                <label htmlFor="phone">Enter Your Mobile Number</label>
                <input
                  id="phone"
                  name="phone_number"
                  //onInput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^0-9-+]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
                  type="text"
                  minLength="7"
                  maxLength="12"
                  required
                  data-cf-modified-adc4804007e6b1b0f0135f59-=""
                />
              </div>
              <div className="col-md-6 footer_padding">
                <label htmlFor="message">Enter Your Message</label>{" "}
                <input type="text" name="message" id="message" required />
                <label htmlFor="code">Security Code: 51</label>
                <input
                  id="code"
                  name="captcha"
                  //onInput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^0-9-+]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
                  type="text"
                  maxLength="14"
                  required
                  data-cf-modified-adc4804007e6b1b0f0135f59-=""
                />
                <input type="submit" value="Submit" />{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
