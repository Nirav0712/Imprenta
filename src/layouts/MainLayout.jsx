import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
// import CategoryMenu from "../Components/layout/CategoryMenu";
// import OfferBar from "../Components/layout/OfferBar";


const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <CategoryMenu /> */}
      {/* <OfferBar /> */}

      <main>{children}</main>
      
     <Footer />
    </>
  );
};

export default MainLayout;