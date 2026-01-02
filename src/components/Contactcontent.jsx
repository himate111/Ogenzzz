import "../styles/contactcontent.css";

const ContactContent = () => {
  return (
    <div className="contact-content">

      {/* MAIN CONTACT SECTION */}
      <div className="contact-main">

        {/* LEFT INFO */}
        <div className="contact-info">
          <div>
            <h5>EMAIL</h5>
            <p>sayhi2ogenz@gmail.com</p>
          </div>

          <div>
            <h5>PHONE</h5>
            <p>(+91) 93603 12408</p>
          </div>

          <div>
            <h5>ADDRESS</h5>
            <p>
              London Eye <br />
              London
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-minimal">
          <input type="text" placeholder="NAME" />
          <input type="text" placeholder="PHONE" />
          <input type="email" placeholder="EMAIL" />
          <textarea placeholder="MESSAGE" rows="4"></textarea>

          <button className="submit-btn">SUBMIT</button>
        </div>

      </div>

      {/* FUTURE SECTIONS PLACEHOLDER */}
      <div className="contact-extra">
        {/* add newsletter / map / FAQ later */}
      </div>

    </div>
  );
};

export default ContactContent;
