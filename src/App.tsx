import { Box } from '@mui/material';

import { AppBar } from './components/AppBar/AppBar';
import { PatientForm } from './components/PatientForm/PatientForm';

import './App.css';

function App() {
  return (
    <>
      <AppBar />

      <Box px={3} py={6}>
        <PatientForm />
      </Box>
    </>
  );
}

export default App;
