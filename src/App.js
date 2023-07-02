  import './App.css';
  import List from './pages/List';
  import Level from './pages/Level'
  import { ChakraProvider } from '@chakra-ui/react'    
  import { BrowserRouter, Routes, Route } from "react-router-dom";

  function App() {
    return (
      
      <ChakraProvider>
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/level' element={<Level/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </ChakraProvider>
    );
  }

  export default App;
