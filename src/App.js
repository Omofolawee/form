import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <section class="container">
        <h2 class="title">Contact Us</h2>
        <div class="names">
          <div class="first">
            <label for="first-name">First name</label>
            <input type="text" id="first-name" />
          </div>
          <div class="last">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </div>
        </div>
        <label for="mail">Email Address</label>
        <input type="email" id="mail" />
        <label for="">Query Type</label>
        <div class="q-type">
          <div class="gen">
            <input type="radio" id="" />
            <label for="">General Enquiry</label>
          </div>
          <div class="req">
            <input type="radio" id="" />
            <label for="">Support Request</label>
          </div>
        </div>
        <div>
          <label for="message" class="message">
            Message
          </label>
          <textarea id="message"></textarea>
        </div>
        <div class="consent">
          <input type="checkbox" id="check" />
          <label for="check">I consent to being contacted by the team</label>
        </div>

        <button class="btn">Submit</button>
      </section>
    </div>
  );
};

export default App;
