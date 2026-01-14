import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./sections/Hero";
import ServicesGrid from "./sections/ServicesGrid";
import Testimonials from "./sections/Testimonials";
import BookingForm from "./components/forms/BookingForm";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
