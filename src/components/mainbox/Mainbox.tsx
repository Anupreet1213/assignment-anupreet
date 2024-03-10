import React from "react";
import Issue from "../individualBox/Issue";
import "./Mainbox.css";
import Feedback from "../individualBox/Feedback";
import Suggestion from "../individualBox/Suggestion";
import Contact from "../individualBox/Contact";
// import SwipeableEdgeDrawer from "../SwipeableEdgeDrawer";

interface MainboxProps {
  fabState: number;
  setFabState: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPhone: boolean;
  textarea: string;
  setTextArea: React.Dispatch<React.SetStateAction<string>>;
  issueEmail: string;
  setIssueEmail: React.Dispatch<React.SetStateAction<string>>;
  feedTextArea: string;
  setFeedTextArea: React.Dispatch<React.SetStateAction<string>>;
  suggTextArea: string;
  setSuggTextArea: React.Dispatch<React.SetStateAction<string>>;
  suggEmail: string;
  setSuggEmail: React.Dispatch<React.SetStateAction<string>>;
  contactTextArea: string;
  setContactTextArea: React.Dispatch<React.SetStateAction<string>>;
  contactEmail: string;
  setContactEmail: React.Dispatch<React.SetStateAction<string>>;
  contactName: string;
  setContactName: React.Dispatch<React.SetStateAction<string>>;
  contactNumber: string;
  setContactNumber: React.Dispatch<React.SetStateAction<string>>;
}

const MainBox: React.FC<MainboxProps> = ({
  fabState,
  isPhone,
  textarea,
  setTextArea,
  issueEmail,
  setIssueEmail,
  feedTextArea,
  setFeedTextArea,
  suggTextArea,
  setSuggTextArea,
  suggEmail,
  setSuggEmail,
  contactTextArea,
  setContactTextArea,
  contactEmail,
  setContactEmail,
  contactName,
  setContactName,
  contactNumber,
  setContactNumber,
}) => {
  return (
    <div className="main-box">
      {!isPhone ? (
        fabState === 1 ? (
          <Issue
            textarea={textarea}
            setTextArea={setTextArea}
            issueEmail={issueEmail}
            setIssueEmail={setIssueEmail}
          />
        ) : fabState === 2 ? (
          <Feedback
            feedTextArea={feedTextArea}
            setFeedTextArea={setFeedTextArea}
          />
        ) : fabState === 3 ? (
          <Suggestion
            suggTextArea={suggTextArea}
            setSuggTextArea={setSuggTextArea}
            suggEmail={suggEmail}
            setSuggEmail={setSuggEmail}
          />
        ) : (
          <Contact
            contactTextArea={contactTextArea}
            setContactTextArea={setContactTextArea}
            contactEmail={contactEmail}
            setContactEmail={setContactEmail}
            contactName={contactName}
            setContactName={setContactName}
            contactNumber={contactNumber}
            setContactNumber={setContactNumber}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainBox;
