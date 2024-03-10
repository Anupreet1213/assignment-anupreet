import React, { useContext } from "react";
import "./Suggestion.css";
import attachClip from "../../assets/attach-clip.png";
import UserContext from "../../utils/context/UserContext";

interface SuggestionProps {
  suggTextArea: string;
  setSuggTextArea: React.Dispatch<React.SetStateAction<string>>;
  suggEmail: string;
  setSuggEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Suggestion: React.FC<SuggestionProps> = ({
  suggTextArea,
  setSuggTextArea,
  suggEmail,
  setSuggEmail,
}) => {
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSuggTextArea(e.target.value);
  };
  const { loggedUser } = useContext(UserContext);
  return (
    <div className="suggestion-box">
      <p className="suggestion-heading">
        Share your <span>Suggestions </span>with us for a chance to earn
        rewards!
      </p>
      <div className="suggestion-select">
        <label>Choose a section</label>
        <select>
          <option value="Interview Questions">Interview Questions</option>
        </select>
      </div>
      <div className="suggestion-detail">
        <label>
          Describe the suggestion in detail{" "}
          <span style={{ color: "red" }}>*</span>
        </label>
        <div className="suggestion-textarea-fake">
          <textarea
            placeholder="Write here..."
            required
            onChange={handleTextArea}
            value={suggTextArea}
          />
          <span className="suggestion-fake-input">
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
            value={suggEmail}
            onChange={(e) => setSuggEmail(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: "6%" }}
      >
        {suggTextArea.trim() === "" ? (
          <button className="suggestion-submit-disabled">Submit</button>
        ) : (
          <button className="suggestion-submit">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
