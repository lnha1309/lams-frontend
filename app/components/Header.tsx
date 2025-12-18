"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // Delay 200ms trước khi ẩn menu
  };

  return (
    <header>
      <div className="site-navigation">
        <a className="skipToContent" href="#main-content" tabIndex={1}>
          Skip to main content
        </a>
        <nav className="nav-main d-none d-sm-block">
          <div className="container">
            <Link href="/">
              <Image
                alt="Logo"
                className="main-logo"
                src="/_resources/images/anhlogo.jpg"
                width={200}
                height={60}
                priority
              />
            </Link>
          </div>
        </nav>
        <nav className="navbar navbar-default" id="nav-mobile">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" href="/">
                <Image
                  alt="logo"
                  src="/_resources/images/anhlogo.jpg"
                  width={150}
                  height={45}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-mobile-collapse"
                aria-controls="navbar-mobile-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div
              className="navbar-collapse collapse"
              id="navbar-mobile-collapse"
            >
              <div className="nav-accordion">
                <div className="accordion" data-menuitem="about">
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <Link
                        href="/about-us"
                        className="accordion-button link collapsed"
                        role="button"
                        aria-controls="collapseSectionOne"
                        aria-expanded="false"
                      >
                        About Us
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="accordion" data-menuitem="Programs">
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button link collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo-1"
                        aria-controls="collapseSectionTwo"
                        aria-expanded="false"
                        role="button"
                      >
                        Programs
                      </button>
                    </h4>
                    <div
                      id="collapseTwo-1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                      role="tabpanel"
                    >
                      <div className="accordion-body">
                        <div className="list-group pt-0 pb-0">
                          <div className="accordion">
                            <div className="accordion-item">
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button fw-bold link collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSubTwo-1"
                                  aria-controls="collapseSubTwo-1"
                                  aria-expanded="false"
                                  role="button"
                                >
                                  Master &amp; Programs
                                </button>
                              </h5>
                              <div
                                id="collapseSubTwo-1"
                                className="accordion-collapse collapse"
                                role="tabpanel"
                              >
                                <div className="accordion-body">
                                  <ul className="nav flex-column">
                                    <li className="nav-item">
                                      <Link
                                        className="nav-link ga-mm"
                                        href="/postgraduate/master-of-business-administration"
                                      >
                                        Master of Business Administration Dual
                                        Qualification
                                      </Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link
                                        className="nav-link ga-mm"
                                        href="/postgraduate/master-of-philosophy-in-education"
                                      >
                                        Master of Philosophy in Education
                                      </Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link
                                        className="nav-link ga-mm"
                                        href="/postgraduate/master-of-hilosophy-in-tesol"
                                      >
                                        Master of Hilosophy in TESOL
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button fw-bold link collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSubTwo-2"
                                  aria-controls="collapseSubTwo-2"
                                  aria-expanded="false"
                                  role="button"
                                >
                                  Doctoral &amp; Programs
                                </button>
                              </h5>
                              <div
                                id="collapseSubTwo-2"
                                className="accordion-collapse collapse"
                                role="tabpanel"
                              >
                                <div className="accordion-body">
                                  <ul className="nav flex-column">
                                    <li className="nav-item">
                                      <Link
                                        className="nav-link ga-mm"
                                        href="/doctorate/doctor-of-business-administration-in-majors"
                                      >
                                        Doctor of Business Administration in
                                        Majors
                                      </Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link
                                        className="nav-link ga-mm"
                                        href="/doctorate/doctor-of-education"
                                      >
                                        Doctor of Education
                                      </Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link
                                        className="nav-link ga-mm"
                                        href="/doctorate/doctor-of-philosophy-in-majors-dual-qualifications-with-uitm-by-research"
                                      >
                                        Doctor of Philosophy in Majors Dual
                                        Qualifications with UITM by Research
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" data-menuitem="contact-us">
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <Link
                        href="/contact-us"
                        className="accordion-button link collapsed"
                        role="button"
                        aria-controls="collapseSectionSix"
                        aria-expanded="false"
                      >
                        Contact Us
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="accordion" data-menuitem="news-events">
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <Link
                        href="/news-events"
                        className="accordion-button link collapsed"
                        role="button"
                        aria-controls="collapseSectionEight"
                        aria-expanded="false"
                      >
                        News
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <nav className="navbar navbar-expand-lg" id="nav-desktop">
        <div className="container">
          <div
            className="navbar-collapse"
            id="navbar-collapse-1"
            style={{ display: "block" }}
          >
            <ul className="nav navbar-nav">
              <li data-menuitem="about">
                <Link
                  href="/about-us"
                  className="nav-link-desktop"
                  style={{
                    color: "#ffffff",
                    display: "block",
                    padding: "27.5px 10px",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                  role="button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  About Us
                </Link>
              </li>

              <li
                className="dropdown"
                data-menuitem="Programs"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  style={{
                    color: "#ffffff",
                    display: "block",
                    padding: "27.5px 10px",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                >
                  Programs
                  <span className="caret"></span>
                </a>
                <div
                  className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="nav flex-column">
                          <li className="nav-title">Undergraduate</li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/undergraduate/Bachelor-of-business-administration"
                            >
                              Bachelor of Business Administration
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/undergraduate/Bachelor-of-health-and-social-care-management"
                            >
                              Bachelor of Health and Social Care Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/undergraduate/Bachelor-of-logistics-and-supply-chain-management"
                            >
                              Bachelor of Logistics and Supply Chain Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/undergraduate/Bachelor-of-tourism-and-hospitality-management"
                            >
                              Bachelor of Tourism and Hospitality Management
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="nav flex-column">
                          <li className="nav-title">Postgraduate</li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/postgraduate/master-of-business-administration"
                            >
                              Master of Business Administration
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/postgraduate/master-of-health-and-social-care-management"
                            >
                              Master of Health and Social Care Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/postgraduate/master-of-logistics-and-supply-chain-management"
                            >
                              Master of Logistics and Supply Chain Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/postgraduate/master-of-tourism-and-hospitality-management"
                            >
                              Master of Tourism and Hospitality
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="nav flex-column">
                          <li className="nav-title">Doctorate</li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/doctorate/doctor-of-business-administration"
                            >
                              Doctor of Business Administration
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/doctorate/doctor-of-education"
                            >
                              Doctor of Education
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link ga-mm"
                              href="/doctorate/doctor-of-philosophy"
                            >
                              Doctor of Philosophy
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li data-menuitem="contact-us">
                <Link
                  href="/contact-us"
                  className="nav-link-desktop"
                  style={{
                    color: "#ffffff",
                    display: "block",
                    padding: "27.5px 10px",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                  role="button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Contact Us
                </Link>
              </li>
              <li data-menuitem="news-and-events">
                <Link
                  href="/news-events"
                  className="nav-link-desktop"
                  style={{
                    color: "#ffffff",
                    display: "block",
                    padding: "27.5px 10px",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                  role="button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
