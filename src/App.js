import "./App.css";
import doghotel_01 from "./assets/doghotel-01.jpg";
import doghotel_02 from "./assets/doghotel-02.jpg";
import doghotel_03 from "./assets/doghotel-03.jpg";
import doghotel_04 from "./assets/doghotel-04.png";
import doghotel_05 from "./assets/doghotel-05.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Rooms" },
  { url: "#", title: "Rewards" },
  { url: "#", title: "Gallery" },
];

function App() {
  return (
    <>
      <div className="App">
        <Navbar navbarLinks={navbarLinks} />
        <Hero imageSrc={doghotel_01} />
        <Slider
          imageSrc={doghotel_02}
          title={"Daily walks!"}
          subtitle={
            "Walks in different places and suited to our diverse tenants!"
          }
          flipped={true}
        />
        <Slider
          imageSrc={doghotel_03}
          title={"You can watch your puppy!"}
          subtitle={
            "We have cameras in the hotel so you can check online how is your doggo :)"
          }
          flipped={false}
        />
        <Slider
          imageSrc={doghotel_04}
          title={"This is amazing place."}
          subtitle={"Our place is special because we have Special Guests!"}
          flipped={true}
        />
        <Slider
          imageSrc={doghotel_05}
          title={"Trustfull place"}
          subtitle={
            "We will provide everything You and Your dog need to feel safe and welcome."
          }
          flipped={false}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
