// Importing React
import React, { useState } from "react";
import Header from "./components/Header";
import Routes from "./config/Routes";
import "./App.scss"

// Defining App component
function App() {
  // What the component will return when invoked
  return (
    // The conents of the return should always be UI
    <div className = "app">
      <Header />
      <Routes />
    </div>
  )
}

// Export the component
export default App