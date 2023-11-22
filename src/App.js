import { Box } from '@mui/material';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
import WinnerPage from './components/WinnerPage';

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/questionPage' element={<QuestionPage />} />
        <Route path='/winnerPage/:score' element={<WinnerPage />} />
      </Routes>
    </Box>
  );
}

export default App;
