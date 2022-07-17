import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from 'react-router-dom'

export default function CourseCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: 8,
          pl: 2,
          pr: 2,
          boxShadow: "3px 3px 3px lightblue",

        }}
      >
        <Grid container>
          <Grid item xs={9} md={9} lg={9}>
            <Typography
              fontWeight={"bold"}
              fontSize={25}
              sx={{ mt: 2 }}
            >
              Course Title
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            lg={3}
            sx={{ pt: 2, pl: 2, fontSize: "small" }}
          >
            <p>Progress:0%</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography fontWeight={600} fontSize={"Medium"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet nulla urna. Duis fringilla tempor venenatis.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography sx={{ mt: 1 }}>Tutor: xxx</Typography>
            <Typography sx={{ mt: 1 }}>Level: xxx</Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Button
              component={Link} to="/coursedemo"
              backgroundColor="primary"
              sx={{ borderRadius: 5, mt: 3, mb: 2, pl: 3, pr: 3 }}
              variant="contained"
            >
              View Content
            </Button>
          </Grid>
          
          <Grid item xs={2} md={2} lg={2}>
            <Tooltip title="more">
              <Button
                onClick={handleClick}
                size="meduim"
                sx={{ mt: 2, color: "26474E" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MoreHorizIcon fontSize={"large"} />
              </Button>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem sx={{ color: "black", fontWeight: "bold" }}>
                <ListItemIcon>
                  <EditIcon sx={{ color: "black" }} />
                </ListItemIcon>
                Edit Course
              </MenuItem>
              <MenuItem sx={{ color: "black", fontWeight: "bold" }}>
                <ListItemIcon>
                  <ShareIcon sx={{ color: "black" }} />
                </ListItemIcon>
                Share Course
              </MenuItem>
              <MenuItem sx={{ color: "red", fontWeight: "bold" }}>
                <ListItemIcon>
                  <DeleteIcon sx={{ color: "red" }} />
                </ListItemIcon>
                Delete Course
              </MenuItem>
            </Menu>
            {/* <Button sx={{ m: 2, color: "26474E" }}>
              <MoreVertIcon />
            </Button> */}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
