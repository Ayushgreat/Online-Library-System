import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto px-4  h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
