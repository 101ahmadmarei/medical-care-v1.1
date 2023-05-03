import { Box, Divider } from "@mui/material";
import React from "react";
import Title from "./Title";
import Information from "./Information";

const ContactInfo = () => {
  return (
    <Box>
      <Title
        title="WORK WITH US"
        text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
      />
      <Divider sx={{ mb: 5, mt: 3 }} />

      <Title
        title="WORK WITH US"
        text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
      />
      <Information />
    </Box>
  );
};

export default ContactInfo;
