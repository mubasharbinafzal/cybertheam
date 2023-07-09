import React from "react";
import Link from "../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand" style={{width:"70px",color: "#1671cc",display:"flex","align-items": "center"}}>
                  <img
                    src="/images/logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                  <img
                    src="/images/logo.png"
                    className="black-logo"
                    alt="logo"
                  />
                Cyber ​​vision
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">
                        Home 
                        {/* <i className="fas fa-chevron-down"></i> */}
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Home One</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index2" activeClassName="active">
                          <a className="nav-link">Home Two</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index3" activeClassName="active">
                          <a className="nav-link">Home Three</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index4" activeClassName="active">
                          <a className="nav-link">Home Four</a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">About us</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Services <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                  
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">
                            Special Integrated Solutions <i className="fas fa-chevron-right"></i>
                            </a>
                        </Link>

                        <ul className="dropdown-menu" style={{"left": "200px"}}>
                          <li className="nav-item">
                            <Link href="/services/converged-networks" activeClassName="active">
                              <a className="nav-link">Converged Networks</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/services/vsat-radio-wireless-new" activeClassName="active">
                              <a className="nav-link">VSAT, Radio & Wireless</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/low-current" activeClassName="active">
                              <a className="nav-link">Low Current</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/physical-security" activeClassName="active">
                              <a className="nav-link">Physical Security</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/audio-visual" activeClassName="active">
                              <a className="nav-link">Audio Visual</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/services/smart-aviations" activeClassName="active">
                              <a className="nav-link">Smart Aviation</a>
                            </Link>
                          </li>
                        </ul>

                      </li>

                      <li className="nav-item">
                        <Link href="/services/data-centers" activeClassName="active">
                          <a className="nav-link">Data Centers</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services/cloud-services" activeClassName="active">
                          <a className="nav-link">Cloud Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/cyber-security" activeClassName="active">
                          <a className="nav-link">Cyber Security</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/digital-signature" activeClassName="active">
                          <a className="nav-link">Digital Signature</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/customer-experience-solutions" activeClassName="active">
                          <a className="nav-link">Customer Experience</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/unified-collaborations" activeClassName="active">
                          <a className="nav-link">Collaboration</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/managed-services" activeClassName="active">
                          <a className="nav-link">Managed Services</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
{/* 
                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Projects <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/projects" activeClassName="active">
                          <a className="nav-link">Projects</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/project-details" activeClassName="active">
                          <a className="nav-link">Project Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link href="/partner" activeClassName="active">
                      <a className="nav-link">Partner</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Clients</a>
                        </Link>
                      </li>
                  {/* <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Pages <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-us" activeClassName="active">
                          <a className="nav-link">About Us</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/service-details" activeClassName="active">
                          <a className="nav-link">Service Details</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/projects" activeClassName="active">
                          <a className="nav-link">Projects</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/project-details" activeClassName="active">
                          <a className="nav-link">Project Details</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a className="nav-link">Pricing</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/partner" activeClassName="active">
                          <a className="nav-link">Partner</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">FAQ</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a className="nav-link">Coming Soon</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 Error Page</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Blog <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a className="nav-link">Blog Grid</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog2" activeClassName="active">
                          <a className="nav-link">Blog Right Sidebar</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog3" activeClassName="active">
                          <a className="nav-link">Blog Left Sidebar</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a className="nav-link">Blog Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                {/* 
                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li> */}
                </ul>

                <div className="others-options">
                  <Link href="/contact">
                    <a className="default-btn">
                    Contact Us
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
