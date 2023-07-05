import Header from "./components/header/Header";
import { Box } from '@mui/material'
import Home from "./components/home/Home";
function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
