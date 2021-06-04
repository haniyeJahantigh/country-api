import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-dark text-center text-lg-start text-white fixed-bottom" >
        <div
          class="text-center p-3"
          style={{"background-color": "rgba(0, 0, 0, 0.2)"}}
        >
          © 2021 country information:
          <a class="text-white" href="https://restcountries.eu/" target="blank">
            restcountries.eu
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
