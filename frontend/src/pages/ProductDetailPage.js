import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";

const ProductDetailPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetail></ProductDetail>
      </NavBar>
    </div>
  );
};

export default ProductDetailPage;
