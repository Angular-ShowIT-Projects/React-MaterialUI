import React from "react";
import CourseCard from "../components/CourseCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { Button, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from '@mui/icons-material/Add';

export default function Course() {
  return (
    <>
      <Grid container spacing={2} sx={{p:3 }} >
        <Grid item xs={6} md={6} lg={3}>
          <Typography
            sx={{
              letterSpacing: 6,
              fontSize: "h4.fontSize",
              fontWeight: "bold",
              mt: 3,
            }}
          >
            U-LEARN
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={2}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              width: 200,
              height: 50,
              mt: 3,
              borderRadius: 10,
              boxShadow: "2px 2px 2px lightblue"
            }}
          >
            <Button
              type="submit"
              aria-label="search"
            ><SearchIcon fontSize="large"/></Button>
            
            <InputBase
              sx={{ flex: 1 }}
              placeholder="Search Courses"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              width: 140,
              height: 50,
              mt: 3,
              pl: 1,
              borderRadius: 10,
              boxShadow: "2px 2px 2px lightblue"
            }}
          >
            <Button><Typography fontWeight={"bold"} sx={{pr:2}}>Sort by</Typography> <TuneIcon fontSize="large"/></Button>
          </Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
        <Paper
            component="form"
            sx={{
              display: "flex",
              width: 200,
              height: 50,
              mt: 3,mr:4,
              fontSize:'small',
              border:1,
              borderColor:"primary"
            }}
          >
            <Button
              type="submit"
              sx={{ p: "10px" }}
              aria-label="add"
            ><AddIcon fontSize={"large"}/></Button>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Add Courses"
              inputProps={{ "aria-label": "Add Courses" }}
            />
          </Paper>
        </Grid>

        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        
      </Grid>
    </>
  );
}
