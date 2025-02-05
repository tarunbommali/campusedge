import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const Helpdesk = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const currentTheme = useSelector((state) => state.theme) || "light";

  // Theme-based classes
  const themeClasses = currentTheme === "dark" 
    ? { bg: "bg-gray-800", text: "text-white", inputBg: "bg-gray-700", inputText: "text-white", textareaBg: "bg-gray-700", textareaText: "text-white" }
    : { bg: "bg-base-100", text: "text-black", inputBg: "bg-white", inputText: "text-black", textareaBg: "bg-white", textareaText: "text-black" };

  const handleSend = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_email: email,
      to_email: "tarunbommali.28@gmail.com",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className={`card lg:card-side ${themeClasses.bg} shadow-xl`}>
      <figure>
        <img
          src="https://investortech.ly/wp-content/uploads/2024/01/Contact.png"
          alt="Contact"
        />
      </figure>
      <div className={`card-body ${themeClasses.text}`}>
        <form onSubmit={handleSend} className="card-body">
          {/* Email Input */}
          <label className={`input input-bordered flex items-center gap-2 ${themeClasses.inputBg} ${themeClasses.inputText}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Message Input */}
          <label className={`textarea textarea-bordered flex items-start gap-2 mt-4 ${themeClasses.textareaBg} ${themeClasses.textareaText}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 mt-2"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <textarea
              className={`grow outline-none ${themeClasses.textareaBg}`}
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          {/* Submit Button */}
          <div className="card-actions justify-end mt-4">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Helpdesk;
