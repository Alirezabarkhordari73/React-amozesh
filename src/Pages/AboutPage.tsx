import { Link } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import "./AboutPage.css";
import SideBar from "../components/SideBar/SideBar";

const AboutPage = () => {
  const sideMenuItems = [{ id: 1, Name: "x" }];
  return (
    <Layout>
      <div className="AboutPageContainer">
        About Page Contets !
        <SideBar data={sideMenuItems} />
        <Link to="/">
          <button>Go To Home Page</button>
        </Link>
      </div>
    </Layout>
  );
};

export default AboutPage;
