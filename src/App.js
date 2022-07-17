import { Routes, Route, Link } from "react-router-dom";
import CourseContent from "./pages/CourseContent";
import CourseDemo from "./pages/CourseDemo";
import Container from '@mui/material/Container';
import Header from "./components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';



function App() {
  return (
    
    <Container maxWidth="xl" sx={{ bgcolor: '#F5FBFF', height: 'full' }}>
    <Header/>
    <Routes>
        <Route path="/" element={<CourseContent />} />
        <Route path="/coursedemo" element={<CourseDemo />} />
      </Routes>     
    </Container>
    
  );
}

export default App;
