import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
import { Paper } from '@mui/material';

const App = () => {
  return (
    <div>
        <Paper elevation={2} className='paper'>
            <Info />
            <About />
            <Interests />
            <Footer />
        </Paper>
    </div>
  );
}

export default App;
