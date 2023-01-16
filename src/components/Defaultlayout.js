import Footer from "./Footer";
import Navbar from "./Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
