import React from "react";
import { Typography, Box, Badge } from "@mui/material";
import "../../style/Header.scss";
import { useAppSelector } from "../../services/hooks";
import { selectSessionDetails } from "../../services/session/sessionSlice";

export const Header: React.FC = () => {
  const sessionDet = useAppSelector(selectSessionDetails);

  return (
    <Box className="video-header">
      <Box className="right-side">
        <Typography variant="h6" className="header-text">
          משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות קבועות
        </Typography>
        <Typography variant="subtitle1" className="header-text">
          תיק מספר {sessionDet.discussionNo}
        </Typography>
      </Box>
      {sessionDet.isRecorded && (
        <Box className="left-side">
          <Badge color="error" badgeContent={" "} />
          <Typography variant="subtitle2" className="header-text">
            מקליט
          </Typography>
        </Box>
      )}
    </Box>
  );
};
