import "./Issue.css";
import attachClip from "../../assets/attach-clip.png";
import React, { useContext } from "react";
import UserContext from "../../utils/context/UserContext";

interface IssueProps {
  textarea: string;
  setTextArea: React.Dispatch<React.SetStateAction<string>>;
  issueEmail: string;
  setIssueEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Issue: React.FC<IssueProps> = ({
  textarea,
  setTextArea,
  issueEmail,
  setIssueEmail,
}) => {
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };

  const { loggedUser } = useContext(UserContext);

  return (
    <div className="issue-box">
      <p className="issue-heading">
        Let us know about the <span>Issue </span>you are facing right now!
      </p>
      <div className="issue-select">
        <label>Choose a section</label>
        <select>
          <option value="Interview Questions">Interview Questions</option>
          <option value="Interview Questions">Practice Questions</option>
          <option value="Interview Questions">Quizzes</option>
          <option value="Interview Questions">Other</option>
        </select>
      </div>
      <div className="issue-detail">
        <label>
          Describe the issue in detail <span style={{ color: "red" }}>*</span>
        </label>
        <div className="issue-textarea-fake">
          <textarea
            placeholder="Write here..."
            required
            onChange={handleTextArea}
            value={textarea}
          />
          <span className="issue-fake-input">
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
          </span>
        </div>
      </div>
      {!loggedUser ? (
        <div className="issue-input">
          <label>Enter your email to receive an update</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={issueEmail}
            onChange={(e) => setIssueEmail(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: "6%" }}
      >
        {textarea.trim() === "" ? (
          <button className="issue-submit-disabled">Submit</button>
        ) : (
          <button className="issue-submit">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Issue;
