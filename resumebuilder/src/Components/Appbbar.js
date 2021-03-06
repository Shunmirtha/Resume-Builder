import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const Appbbar = () => {
  return (
    <div>
      <AppBar position="sticky" top="0">
        <Toolbar>
          <IconButton
            edge="start"
            style={{
              marginRight: 20,
            }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
              }}
            >
              Resume Builder
            </Typography>
          }
          {/* <div id="title">
            <h2>Resume Builder</h2>
          </div> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbbar;
