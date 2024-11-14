import React from "react";
import CardActionGallery from "../CardActionGallery";
import menuItems from "@/app/landing-menu";

const LandingMenu = () => {
  return <CardActionGallery items={menuItems} />;
};

export default LandingMenu;
