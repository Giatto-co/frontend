import Footer from "../Footer/Footer";
import CategoryHeader from "../Header/categoryHeader";

const AlternativeLayout = ({ children }) => {
  return (
    <>
      <CategoryHeader />
      {children}
      <Footer />
    </>
  );
};

export default AlternativeLayout;
