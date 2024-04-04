import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-first-section">
        <form className="max-w-sm max-w-96">
          <h1 className="get-in-touch"><span>Get</span> In Touch</h1>
          <div>
            <label
              htmlFor="name-input"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name-input"
              className="block w-full sm:w-auto p-1 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-96"
            />
          </div>
          <div>
            <label
              htmlFor="email-input"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email-input"
              className="block w-full sm:w-auto p-1 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Send
          </button>
        </form>

        {/* Contact-us start from here */}
        <div className="contact-us">
          <div className="contact-us-1">
            <h1>Contact with us :</h1>
            <p>For support or any questions:</p>
            <p>Call us on: +91-22-41003600/3663</p>
            <p>Email us at: feedback@foodfood.com</p>
          </div>
          <div className="contact-us-2">
            <h1>Address :</h1>
            <p>
              4th Floor, ‘A’ Wing, C-10, Dalia Estate
              <br /> Near Fun Republic,Off New Link Road,
              <br />
              Andheri (West), Mumbai – 400 053
            </p>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="contact-second-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31098.180642716463!2d77.604859235245!3d13.018306055531186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a75a549fbd%3A0x7fabf2678c8c431b!2sDMart!5e0!3m2!1sen!2sin!4v1711989035913!5m2!1sen!2sin"
          width="1100"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
