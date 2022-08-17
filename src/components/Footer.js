import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h4>I work worldwide</h4>
            <h2>example@mail.com</h2>
            <h3>(+01)-234-561-890</h3>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="/">Behance</a>
                </li>
                <li>
                  <a href="/">Flickr</a>
                </li>
                <li>
                  <a href="/">Pinterest</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="copyright-text">&copy; all rights are reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
