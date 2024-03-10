import { useContext } from "react";
import "./Contact.css";
import UserContext from "../../utils/context/UserContext";
// import attachClip from "../../assets/attach-clip.png";

interface ContactProps {
  contactTextArea: string;
  setContactTextArea: React.Dispatch<React.SetStateAction<string>>;
  contactEmail: string;
  setContactEmail: React.Dispatch<React.SetStateAction<string>>;
  contactName: string;
  setContactName: React.Dispatch<React.SetStateAction<string>>;
  contactNumber: string;
  setContactNumber: React.Dispatch<React.SetStateAction<string>>;
}

const Contact: React.FC<ContactProps> = ({
  contactTextArea,
  setContactTextArea,
  contactEmail,
  setContactEmail,
  contactName,
  setContactName,
  contactNumber,
  setContactNumber,
}) => {
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactTextArea(e.target.value);
  };

  const { loggedUser } = useContext(UserContext);
  return (
    <div className="contact-box">
      <p className="contact-heading">
        Get in <span>Contact </span>with us for your queries!
      </p>
      <div className="contact-input">
        <label>
          Your Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Name"
          required
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
      </div>
      {!loggedUser ? (
        <div className="contact-input">
          <label>
            Your Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}
      {!loggedUser ? (
        <div className="contact-input">
          <label>Your Mobile number</label>
          <input
            type="email"
            placeholder="Enter your number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="contact-detail">
        <label>
          What would you like to ask? <span style={{ color: "red" }}>*</span>
        </label>
        <div className="contact-textarea-fake">
          <textarea
            placeholder="Write here..."
            required
            onChange={handleTextArea}
            value={contactTextArea}
          />
          {/* <span className="contact-fake-input">
            <img src={attachClip} alt="attach-clip" />
            Attach
            <input
              type="file"
              style={{
                opacity: 0,
                position: "absolute",
                width: "20%",
              }}
            />
          </span> */}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: "6%" }}
      >
        {contactTextArea.trim() === "" ? (
          <button className="contact-submit-disabled">Submit</button>
        ) : (
          <button className="contact-submit">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Contact;
