import React from "react";
import { NavBar, Footer } from "./components";

const PublicLayout = (props) => {
  const { children, withFooter = true } = props;
  return (
    <div>
      <NavBar />
      {children}
      {withFooter && <Footer />}
    </div>
  );
};

export default PublicLayout;
