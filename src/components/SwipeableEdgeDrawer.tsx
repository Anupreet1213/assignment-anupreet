// import * as React from "react";
import { Global } from "@emotion/react";
// import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { grey } from "@mui/material/colors";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Skeleton from "@mui/material/Skeleton";
// import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Issue from "./individualBox/Issue";
import Feedback from "./individualBox/Feedback";
import Suggestion from "./individualBox/Suggestion";
import Contact from "./individualBox/Contact";
import { useEffect } from "react";
// import { useState } from "react";

const drawerBleeding = 56;

interface DrawerProps {
  window?: () => Window;
  open: boolean;
  toggleDrawer: (newOpen: boolean) => void;
  fabState: number;
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
  setSliderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Root = styled("div")(() => ({
  position: "relative",
  //   height: "100vh",
  //   backgroundColor:
}));

// const StyledBox = styled("div")(({ theme }) => ({
//   //   backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
// }));

// const Puller = styled("div")(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
//   borderRadius: 3,
//   position: "absolute",
//   top: 8,
//   left: "calc(50% - 15px)",
// }));

export default function SwipeableEdgeDrawer(props: DrawerProps) {
  const {
    window,
    open,
    toggleDrawer,
    fabState,
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
    setSliderHeight,
  } = props;

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    const calculateSliderHeight = () => {
      const sliderElement = document.querySelector("#drawer-box");
      if (sliderElement) {
        setSliderHeight(sliderElement.clientHeight);
      }
    };

    calculateSliderHeight();
  }, [toggleDrawer, setSliderHeight]);

  return (
    <Root>
      {/* <CssBaseline /> */}
      <Global
        styles={{
          "@media (max-width:600px)": {
            ".MuiDrawer-root > .MuiPaper-root": {
              // height: `calc(50% - ${drawerBleeding}px)`,
              overflow: "hidden",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          },
        }}
      />
      {/* <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {/* <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            51 results
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox> */}

        <div id="drawer-box">
          {fabState === 1 ? (
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
          )}
        </div>
      </SwipeableDrawer>
    </Root>
  );
}
