import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import WorkIcon from "@mui/icons-material/Work";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <h1>MainLogo</h1>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs>
            <Box display="flex" justifyContent="flex-end">
            <Typography variant="p"  sx={{maxWidth: 50,mt:3,fontWeight:500}} color="primary">User</Typography>
              <Tooltip title="Profile">
                <Button
                  onClick={handleClick}
                  size="meduim"
                  sx={{ flex: 0, ml: 3, width: 100 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <AccountCircleIcon
                    sx={{m:2,width: 50, height: 50 }}
                  />
    
                 
                </Button>
              </Tooltip>
            </Box>
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
              <MenuItem sx={{ color: 'black',fontWeight:'bold' }}>
                <ListItemIcon>
                  <PersonIcon sx={{ color: "black" }} />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem sx={{ color: 'black',fontWeight:'bold' }}>
                <ListItemIcon>
                  <WorkIcon sx={{color: 'black' }} />
                </ListItemIcon>
                Organization
              </MenuItem>
              <Divider />
              <MenuItem sx={{ color: 'primary',fontWeight:'bold'}}>
                <ListItemIcon>
                  <Logout  sx={{color: 'primary' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Box>
    </nav>
  );
}
