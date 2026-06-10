import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-main)",
        color: "var(--text-primary)",
        position: "relative",
      }}
    >
      {/* Navbar navigation */}
      <Navbar />

      {/* Main content body */}
      <main style={{ flex: "1 0 auto" }}>
        <Hero />
        <AboutUs />
        <Services />
        <Pricing />
        <Payment />
        <Contact />
      </main>

      {/* Footer credits and copyright */}
      <Footer />
    </div>
  );
}

export default App;
