import "./Fab.css";
import closeIcon from "../../assets/closed-icon.png";
import openIcon from "../../assets/open-icon.png";
import issue from "../../assets/issue.png";
import issueSelected from "../../assets/issueSelected.png";
import feedback from "../../assets/feedback.png";
import feedbackSelected from "../../assets/feedbackSelected.png";
import contact from "../../assets/contact.png";
import contactSelected from "../../assets/contactSelected.png";
import suggestion from "../../assets/suggestion.png";
import suggestionSelected from "../../assets/suggestionSelected.png";
import { useEffect, useState } from "react";
import MainBox from "../mainbox/Mainbox";
import SwipeableEdgeDrawer from "../SwipeableEdgeDrawer";

const isPhoneSize = () => {
  return window.innerWidth <= 600;
};

const Fab = () => {
  const [fabOpen, setFabOpen] = useState(false);
  const [fabState, setFabState] = useState(0);

  const [open, setOpen] = useState(false);
  const [isPhone, setIsPhone] = useState(isPhoneSize());

  const [textarea, setTextArea] = useState("");
  const [issueEmail, setIssueEmail] = useState("");
  const [feedTextArea, setFeedTextArea] = useState("");
  const [suggTextArea, setSuggTextArea] = useState("");
  const [suggEmail, setSuggEmail] = useState("");
  const [contactTextArea, setContactTextArea] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [sliderHeight, setSliderHeight] = useState(0);

  const resetState = () => {
    setTextArea("");
    setIssueEmail("");
    setFeedTextArea("");
    setSuggTextArea("");
    setSuggEmail("");
    setContactTextArea("");
    setContactEmail("");
    setContactName("");
    setContactNumber("");
  };

  const handleFabToggle = () => {
    if (fabOpen === true) {
      setFabState(0);
      resetState();
    }
    setFabOpen(!fabOpen);
    toggleDrawer(false);
  };

  const handleBoxToggle = (val: React.SetStateAction<number>) => {
    setFabState(val);
    toggleDrawer(true);
  };

  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen);
  // };

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(isPhoneSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        style={open ? { bottom: sliderHeight } : {}}
        className={`fab-container ${open ? "fab-open" : ""}`}
      >
        {fabOpen && fabState === 0 ? (
          <div className={`fab-section-container ${fabOpen ? "visible" : ""}`}>
            <div className="fab-section-each-child">
              <span onClick={() => handleBoxToggle(1)}>Report an Issue</span>
              <img
                src={issue}
                alt="fab-logo"
                onClick={() => handleBoxToggle(1)}
              />
            </div>
            <div className="fab-section-each-child">
              <span onClick={() => handleBoxToggle(2)}>Share Feedback</span>
              <img
                src={feedback}
                alt="fab-logo"
                onClick={() => handleBoxToggle(2)}
              />
            </div>
            <div className="fab-section-each-child">
              <span onClick={() => handleBoxToggle(3)}>Give Suggestion</span>
              <img
                src={suggestion}
                alt="fab-logo"
                onClick={() => handleBoxToggle(3)}
              />
            </div>
            <div className="fab-section-each-child">
              <span onClick={() => handleBoxToggle(4)}>Conatct Us</span>
              <img
                src={contact}
                alt="fab-logo"
                onClick={() => handleBoxToggle(4)}
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {fabOpen && fabState !== 0 ? (
          <MainBox
            fabState={fabState}
            setFabState={setFabState}
            open={open}
            setOpen={setOpen}
            isPhone={isPhone}
            textarea={textarea}
            setTextArea={setTextArea}
            issueEmail={issueEmail}
            setIssueEmail={setIssueEmail}
            feedTextArea={feedTextArea}
            setFeedTextArea={setFeedTextArea}
            suggTextArea={suggTextArea}
            setSuggTextArea={setSuggTextArea}
            suggEmail={suggEmail}
            setSuggEmail={setSuggEmail}
            contactTextArea={contactTextArea}
            setContactTextArea={setContactTextArea}
            contactEmail={contactEmail}
            setContactEmail={setContactEmail}
            contactName={contactName}
            setContactName={setContactName}
            contactNumber={contactNumber}
            setContactNumber={setContactNumber}
          />
        ) : (
          <></>
        )}
        <div className={"fab-icon"}>
          {/* <span onClick={isPhone ? toggleDrawer(false) : mock}> */}
          <img
            src={fabOpen ? openIcon : closeIcon}
            alt="fab-logo"
            onClick={handleFabToggle}
          />
          {/* </span> */}
          {fabOpen && fabState !== 0 ? (
            <div>
              {/* <span onClick={isPhone ? toggleDrawer(true) : mock}> */}
              <img
                src={fabState === 4 ? contactSelected : contact}
                alt="fab-logo"
                onClick={() => {
                  handleBoxToggle(4);
                }}
              />
              {/* </span> */}
              {/* <span onClick={isPhone ? toggleDrawer(true) : mock}> */}
              <img
                src={fabState === 3 ? suggestionSelected : suggestion}
                alt="fab-logo"
                onClick={() => handleBoxToggle(3)}
              />
              {/* </span> */}
              {/* <span onClick={isPhone ? toggleDrawer(true) : mock}> */}
              <img
                src={fabState === 2 ? feedbackSelected : feedback}
                alt="fab-logo"
                onClick={() => handleBoxToggle(2)}
              />
              {/* </span> */}
              {/* <span onClick={isPhone ? toggleDrawer(true) : mock}> */}
              <img
                src={fabState === 1 ? issueSelected : issue}
                alt="fab-logo"
                onClick={() => handleBoxToggle(1)}
              />
              {/* </span> */}
            </div>
          ) : (
            <></>
          )}

          {/* {isPhone ? (
            <SwipeableEdgeDrawer
              open={open}
              toggleDrawer={toggleDrawer}
              fabState={fabState}
              textarea={textarea}
              setTextArea={setTextArea}
              feedTextArea={feedTextArea}
              setFeedTextArea={setFeedTextArea}
              suggTextArea={suggTextArea}
              setSuggTextArea={setSuggTextArea}
              contactTextArea={contactTextArea}
              setContactTextArea={setContactTextArea}
            />
          ) : (
            <></>
          )} */}
        </div>
      </div>
      {isPhone ? (
        <SwipeableEdgeDrawer
          open={open}
          toggleDrawer={toggleDrawer}
          fabState={fabState}
          textarea={textarea}
          setTextArea={setTextArea}
          issueEmail={issueEmail}
          setIssueEmail={setIssueEmail}
          feedTextArea={feedTextArea}
          setFeedTextArea={setFeedTextArea}
          suggTextArea={suggTextArea}
          setSuggTextArea={setSuggTextArea}
          suggEmail={suggEmail}
          setSuggEmail={setSuggEmail}
          contactTextArea={contactTextArea}
          setContactTextArea={setContactTextArea}
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
          contactName={contactName}
          setContactName={setContactName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          setSliderHeight={setSliderHeight}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Fab;
