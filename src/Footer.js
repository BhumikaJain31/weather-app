import React from "react";

const name = "Bhumika Jain";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="tc fixed bottom-0 w-100 h2 white">
      <p>
        Created {year} by @{name}
      </p>
    </footer>
  );
};

export default Footer;
