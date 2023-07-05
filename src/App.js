import './App.css';
import { Box, dividerClasses } from '@mui/material';
import Left_child from './components/Left_child';
import Right_child from './components/Right_child';
import { useState } from 'react';


function App() {
  const [rightData, setRightData] = useState(3);

  const getData = (data) => {
    console.log(data)
    setRightData(data);
  }

  return (
<div style={{backgroundColor:"lightyellow", height:"100vh"}}>
    <Box display="flex">
      <Box flexGrow={1}>
        <Left_child getData={getData} />
      </Box>
      <Box flexGrow={3}>
        <Right_child rightData={rightData} />
      </Box>
    </Box>
    </div>
  );
}

export default App;
