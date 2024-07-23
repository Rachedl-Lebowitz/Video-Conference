import React from "react";
import { List, ListItem, Badge, Box, Chip, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../../style/NavBar.scss";
import { navItems } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { selectUser } from "../../services/users/userSlice";
import { exitMeeting } from "../../services/users/userService";

export const NavBar: React.FC = () => {
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const leaveMeeting = () => {
    dispatch(exitMeeting);
  };

  return (
    <Box className="video-nav-bar-wrapper">
      <List className="nav-bar-list">
        {navItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path}>
            <Chip
              label={item.text}
              icon={
                item.hasBadge ? (
                  <Badge
                    color="info"
                    badgeContent={users.judges.length + users.responders.length}
                  >
                    <item.icon />
                  </Badge>
                ) : (
                  <item.icon />
                )
              }
            />
          </ListItem>
        ))}
      </List>
      <Button onClick={leaveMeeting}>
        <Chip className="chip-leave" label="יציאה מהדיון" />
      </Button>
    </Box>
  );
};
