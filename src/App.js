import { ConstactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { OfflineService } from "./components/OfflineServices";
import { OnlineService } from "./components/OnlineService";
import { OurClient } from "./components/OurCiient";
import { Tagline } from "./components/Tagline";
import { WhoWeAre } from "./components/WhoWeAre";
// import "./app.css"

// const generateStars = (numStars) => {
//   const stars = [];
//   for (let i = 0; i < numStars; i++) {
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;
//     const style = {
//       left: `${x}px`,
//       top: `${y}px`,
//       animationDuration: `${Math.random() * 2 + 1}s`,
//     };
//     stars.push(<div key={i} className="star" style={style}></div>);
//   }
//   return stars;
// };

function App() {
  return (
    // <div className="text-white bg-gradient-to-r from-black to-gray-800 ">
    //   <Header />
    //   <WhoWeAre />
    //   <OfflineService />
    //   <OnlineService />
    //   <OurClient />
    //   <Tagline />
    //   <ConstactUs />
    // </div> 
    // brand slider 
    // qoute ke beech ka space
    // offline serivce card space = y axis
// mobile view 2 service

    <div className="min-h-screen text-white bg-black relative overflow-hidden">
      <div className="relative min-h-screen bg-starry bg-opacity-10">
        <Header />
        <WhoWeAre />
        <OfflineService />
        <OnlineService />
        <OurClient />
        <Tagline />
        <ConstactUs />
      </div>
    </div>
  );
}

export default App;
