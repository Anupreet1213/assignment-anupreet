import React, { useContext } from "react";
import "./Feedback.css";
import attachClip from "../../assets/attach-clip.png";
import UserContext from "../../utils/context/UserContext";

interface FeedbackProps {
  feedTextArea: string;
  setFeedTextArea: React.Dispatch<React.SetStateAction<string>>;
}
const Feedback: React.FC<FeedbackProps> = ({
  feedTextArea,
  setFeedTextArea,
}) => {
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedTextArea(e.target.value);
  };
  const { loggedUser } = useContext(UserContext);
  return (
    <div className="feed-box">
      <p className="feed-heading">
        Let us know about the <span>Feedback </span>about us!
      </p>
      <div className="feed-detail">
        <div className="feed-textarea-fake">
          <textarea
            placeholder="Write here..."
            required
            onChange={handleTextArea}
            value={feedTextArea}
          />
          <span className="feed-fake-input">
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "4%",
          }}
        >
          <input type="checkbox" />
          <span>Send feedback anonymously</span>
        </div>
      ) : (
        <></>
      )}
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: "6%" }}
      >
        {feedTextArea.trim() === "" ? (
          <button className="feed-submit-disabled">Submit</button>
        ) : (
          <button className="feed-submit">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Feedback;
