import React from "react";
import Header from "./Header";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

import '../index.css';


function App() {
  return (
    <div className="App">
      <div className="page">
        <Header/>
        <BookingForm/>
        <Footer/>
      </div>
    </div>
  )

}

export default App;
