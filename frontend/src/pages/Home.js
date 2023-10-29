import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Chatbot from "./Chatbot/Chatbot";
import Footer from "../features/common/Footer";
function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
      <Chatbot />
      <Footer></Footer>
    </div>
  );
}

export default Home;
