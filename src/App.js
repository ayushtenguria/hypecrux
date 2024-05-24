import { ConstactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { OfflineService } from "./components/OfflineServices";
import { OnlineService } from "./components/OnlineService";
import { OurClient } from "./components/OurCiient";
import { Tagline } from "./components/Tagline";
import { WhoWeAre } from "./components/WhoWeAre";

function App() {
  return (
    <div className="text-white bg-gradient-to-r from-black to-gray-800 ">
      <Header />
      <WhoWeAre />
      <OfflineService />
      <OnlineService />
      <OurClient />
      
      <Tagline />
      <ConstactUs />
    </div>
  );
}

export default App;
