import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


import App from '../src/App';

export default function Home() {
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      // Use ReactDOM.render instead of createRoot if you are using React 17
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        rootElement
      );
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Dupay..!</h1>
      <div id="root"></div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
