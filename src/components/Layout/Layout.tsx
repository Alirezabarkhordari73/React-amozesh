import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

const Layout = ({ children }: any) => {
  return (
    <div className="LayoutContainer">
      <Header />
      <div className="Content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
