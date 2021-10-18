import "./App.css";
import NavBar  from "./naviBar.js";
import Footer from "./footer";
import HomePage from "./home";

function App() {
    return (
    <div  class="bg_image"
        style={{
          backgroundImage: 'url("./img/ocean.webp")',
          backgroundSize: "cover",
    }}>
            <NavBar />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;