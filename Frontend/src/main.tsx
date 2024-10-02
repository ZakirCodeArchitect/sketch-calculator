// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import LandingPage from './landingPage.tsx'



// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     {/* <LandingPage/> */}
//     <App />
//   </StrictMode>,
// )

import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import LandingPage from './landingPage';
import { Header } from './header'; // Import the Header component
import './index.css';

const RootComponent = () => {
  const [showApp, setShowApp] = useState(false);

  // Function to handle switching to the App component
  const handleStartApp = () => {
    setShowApp(true);
  };

  return (
    <StrictMode>
      {/* <Header /> Keep the Header visible */}
      {showApp ? <App /> : <LandingPage onStartApp={handleStartApp} />}
    </StrictMode>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<RootComponent />);
}
