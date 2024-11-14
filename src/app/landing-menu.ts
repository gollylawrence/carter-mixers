interface MenuItem {
  src: string;
  alt: string;
  title: string;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    src: "/images/mixers/mixer6.png",
    alt: "The sixth mixer",
    title: "About Us",
    link: "#about-us"
  },
  {
    src: "/images/mixers/mixer1.png",
    alt: "The first mixer",
    title: "Field Service",
    link: "/field-service"
  },
  {
    src: "/images/mixers/mixer2.png",
    alt: "The second mixer",
    title: "Spares",
    link: "/spares"
  },
  {
    src: "/images/mixers/mixer3.png",
    alt: "The third mixer",
    title: "Lubrication",
    link: "/lubrication"
  },
  {
    src: "/images/mixers/mixer4.png",
    alt: "The fourth mixer",
    title: "Gallery",
    link: "/gallery"
  },
  {
    src: "/images/mixers/mixer5.png",
    alt: "The fifth mixer",
    title: "Contact Us",
    link: "/contact-us"
  }
];

export default menuItems;
