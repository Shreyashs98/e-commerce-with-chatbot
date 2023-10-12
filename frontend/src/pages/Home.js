import ProductList from "../features/product/components/ProductList";
import NavBar from "../features/navbar/Navbar";
const Home = () => {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
};

export default Home;
