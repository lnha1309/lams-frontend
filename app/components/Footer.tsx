import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="uh-footer uh-footer-main">
      <nav
        aria-label="Site Footer"
        className="site-footer"
        style={{ backgroundColor: '#7b5d2b' }}
      >
        <div className="container" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div className="row">
            <div className="col-md-3">
              <h5
                style={{
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#fff',
                  fontSize: '20px',
                }}
              >
                ABOUT US
              </h5>
              <p style={{ color: '#fff', lineHeight: 1.6, marginBottom: '20px' }}>
                Welcome to the LAMS, a premier platform offering courses from top
                universities and institutions around the world.
              </p>
            </div>
            <div className="col-md-3">
              <h5
                style={{
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#fff',
                  fontSize: '20px',
                }}
              >
                CONTACT
              </h5>
              <div style={{ color: '#fff', lineHeight: 1.8 }}>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: '10px',
                    marginBottom: '15px',
                  }}
                >
                  <i
                    className="bi bi-geo-alt"
                    style={{ fontSize: '20px', marginTop: '3px' }}
                  ></i>
                  <span>207 Regent Street, London, England W1B3HH</span>
                </p>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '15px',
                  }}
                >
                  <i className="bi bi-telephone" style={{ fontSize: '20px' }}></i>
                  <span>Tel.: +44 20 8068 4422</span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="bi bi-envelope" style={{ fontSize: '20px' }}></i>
                  <a
                    href="mailto:info@lams.ac"
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                    info@lams.ac
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3" style={{ paddingLeft: '20px' }}>
              <h5
                style={{
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#fff',
                  fontSize: '20px',
                }}
              >
                PAGES
              </h5>
              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  color: '#fff',
                  lineHeight: 1,
                }}
              >
                <li>
                  <Link
                    href="/about-us"
                    className="footer-link-root"
                    style={{
                      display: 'block',
                      color: '#fff',
                      textDecoration: 'none',
                      marginBottom: '20px',
                    }}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      display: 'block',
                      color: '#fff',
                      textDecoration: 'none',
                      marginBottom: '20px',
                    }}
                  >
                    COURSES
                  </a>
                </li>
                <li>
                  <Link
                    href="/news-events"
                    className="footer-link-root"
                    style={{
                      display: 'block',
                      color: '#fff',
                      textDecoration: 'none',
                      marginBottom: '20px',
                    }}
                  >
                    BLOG
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5
                style={{
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#fff',
                  fontSize: '20px',
                }}
              >
                BLOG
              </h5>
              <Link
                href="/news-events/stories/the-importance-of-occupational-standards"
                style={{
                  display: 'block',
                  color: '#fff',
                  textDecoration: 'none',
                  marginBottom: '20px',
                }}
              >
                The Importance Of Occupational Standards To Higher Education
                Learners
              </Link>
              <Link
                href="/news-events/stories/5-most-common-masters-degrees-in-2023"
                style={{
                  display: 'block',
                  color: '#fff',
                  textDecoration: 'none',
                  marginBottom: '20px',
                }}
              >
                5 Most Common Master&apos;s Degrees In 2023
              </Link>
              <Link
                href="/news-events/stories/power-self-assessment-for-lifelong-learners"
                style={{
                  display: 'block',
                  color: '#fff',
                  textDecoration: 'none',
                  marginBottom: '20px',
                }}
              >
                The Critical Power of Self-Assessment for Lifelong Learners
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        style={{
          backgroundColor: '#fff',
          textAlign: 'center',
          padding: '30px',
          fontWeight: 'bold',
        }}
      >
        Copyright ©2025 London Academy of Management and Sciences. All rights
        reserved.
      </div>
    </footer>
  );
}

