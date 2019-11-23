import React, { Component } from "react";

class QuickDetails extends Component {
  render() {
    return (
      <div>
        <form
          className="RightContact"
          style={{
            background: "#3d5097",
            padding: "25px",
            margin: "0px 0px 50px 20px",
            border: "1px solid #e0dede"
          }}
          method="post"
          action="https://www.Service+.com/user/submitform"
        >
          <h3>For Quick Shifting, Fill the Details</h3>
          <p style={{ color: "white" }}>
            Contact us today, and get reply with in 24 hours!
          </p>
          <fieldset>
            <input
              type="text"
              name="name"
              className="quote_name"
              placeholder="Your Name"
              onInput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^a-z. ^A-Z.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
              maxLength="300"
              required
              data-cf-modified-6ca81f139d72629e13b7af93-=""
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="phone_number"
              className="quote_phone"
              placeholder="Contact Number"
              onInput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^0-9-+]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
              maxLength="14"
              required
              data-cf-modified-6ca81f139d72629e13b7af93-=""
            />
          </fieldset>

          <label htmlFor="code" style={{ color: "black" }}>
            Security Code: 61
          </label>
          <fieldset>
            <input
              id="code"
              placeholder="Enter Captcha"
              name="captcha"
              onInput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^0-9-+]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
              type="text"
              maxLength="14"
              required
              data-cf-modified-6ca81f139d72629e13b7af93-=""
            />
            <input className="btn btn-danger" type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default QuickDetails;
