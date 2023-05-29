import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Form.css";
import mark from "../assets/images/icon-list.svg";

function Form() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const navigate = useNavigate();

  const handleSubmission = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validEmail) {
      const info = {
        email: email,
      };

      setSubmitted(false);
      setEmail("");

      console.log(JSON.stringify(info));

      navigate("/success", { state: { info } });
    }
  };

  useEffect(() => {
    if (/.+[@].+\..+/.test(email)) setValidEmail(true);
    else setValidEmail(false);
  }, [email]);
  

  return (
    <div className="form">
      <picture className="form--img">
        <source media="(min-width: 45em)" srcSet={desktopImage} />
        <img src={mobileImage} alt="form" />
      </picture>
      <form
        onSubmit={handleSubmission}
        className="form--body"
        action="/success"
      >
        <h1>Stay updated!</h1>
        <p className="p">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li>
            <img src={mark} alt="mark" /> Product discovery and building what
            matters
          </li>
          <li>
            <img src={mark} alt="mark" /> Measuring to ensure updates are a
            success
          </li>
          <li>
            <img src={mark} alt="mark" /> And much more!
          </li>
        </ul>
        <div className="label">
          <label htmlFor="email">Email address</label>
          {submitted && !validEmail && (
            <p className="invalid">Valid email required</p>
          )}
        </div>
        <input
        submitted={submitted && !validEmail ? 'true' : 'false'}
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email@company.com"
          id="email"
        />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
}

export default Form;
