import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StartPage from './Pages/Auth/Start'
import { Routes ,Route, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <StartPage />
        <Routes>
          <Route exact path="/" component={StartPage} />
          <Route path="/home" component={StartPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
