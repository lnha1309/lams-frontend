import Link from 'next/link';
import { getAboutData } from '@/lib/api';

export default async function AboutUs() {
  const data = await getAboutData().catch(() => null);

  const intro = data?.intro ?? {};
  const features = data?.features ?? [
    { number: '01', title: 'Quality Education', content: "Our courses are developed and taught by industry experts and academic professionals, ensuring that you receive a top-notch education that's relevant to today's demands." },
    { number: '02', title: 'Affordable Pricing', content: "We understand the importance of making education accessible. That's why we strive to keep our prices affordable, making it possible for anyone to pursue their educational goals without financial strain." },
    { number: '03', title: 'Diverse Offerings', content: 'From business management to IT certifications, we offer a wide range of courses to cater to diverse interests and career aspirations.' },
  ];
  const quote = data?.quote ?? {
    text: 'We need to give every individual the opportunity to reach their full potential, regardless of their background or circumstance.',
    author: '- Cory Booker -',
    backgroundImage: '/_resources/images/smiling-students-and-lecturer-in-auditorium-at-uni.jpg',
  };
  const variety = data?.variety ?? {
    label: 'Range of courses and programme',
    title: 'Variety of Options',
    content:
      "Established with a vision to revolutionise learning, LAMS is committed to offering a diverse range of courses and programmes meticulously curated to meet the needs of today's learners.",
    images: [
      '/_resources/images/asian-young-woman-in-college.jpg',
      '/_resources/images/group-young-cheerful-students-joyfully-talking-while-studying-together-library-university.jpg',
    ],
    cta: { text: 'EXPLORE COURSES', link: '#' },
  };
  const howItWorks = data?.howItWorks ?? {
    label: 'HOW IT WORKS',
    title: 'Invest in Your Future',
    image: '/_resources/images/happy-young-asian-businesswoman-working-with-laptop-computer-office.jpg',
    steps: [
      {
        icon: 'bi bi-search',
        title: 'Browse',
        description:
          'Browse through our wide range of courses, including certificate programmes, short courses, and executive programmes.',
      },
      {
        icon: 'bi bi-pencil-square',
        title: 'Register',
        description: 'Register the course that best fits your needs and interests using our user-friendly registration process.',
      },
      {
        icon: 'bi bi-calendar-check',
        title: 'Attend',
        description: 'Once registered, you will have access to all learning materials and can attend classes at your convenience.',
      },
    ],
  };
  const subscribe = data?.subscribe ?? {
    title: 'Subscribe',
    description: 'Get the latest news and articles to your inbox every month.',
  };
  const categories = data?.categories ?? {
    features: [
      { icon: 'bi bi-award', title: 'Certificates', description: 'Earn official recognition for your work.' },
      { icon: 'bi bi-file-text', title: 'Coursework', description: 'Each course is like an interactive textbook.' },
      { icon: 'bi bi-mortarboard', title: 'Support', description: 'Connect with thousands of other learners.' },
    ],
    images: [
      '/_resources/images/university-students-tutoring-studying-online-with.jpg',
      '/_resources/images/business-coworkers-discussing-new-ideas-brainstorming-together-looking-new-project-document.jpg',
    ],
  };

  return (
    <main id="main-content">
      <section className="page-section about-intro-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mb-4 mb-md-0 about-slogan-column">
              <div className="about-slogan-wrapper">
                <p className="about-slogan-label">{intro.label || 'Accessible Education-Oriented'}</p>
                <h2 className="about-slogan-title">{intro.title || "'AFFORDABILITY' Is At Heart"}</h2>
              </div>
            </div>
            <div className="col-md-8 about-intro-text-column" style={{ paddingRight: '15px' }}>
              <p className="about-intro-text">
                {intro.content ||
                  'Welcome to the London Academy of Management and Sciences (LAMS), your gateway to accessible, high-quality education designed to empower individuals worldwide.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section about-features-section">
        <div className="container">
          <div className="row">
            {features.map((feature) => (
              <div key={feature.number} className="col-md-4 mb-4 mb-md-0" style={{ padding: '0 15px' }}>
                <div className="about-feature-card">
                  <div className="about-feature-number">{feature.number}</div>
                  <h3 className="about-feature-title">{feature.title}</h3>
                  <p className="about-feature-text">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section about-quote-banner">
        <div
          style={{
            backgroundImage: `url('${quote.backgroundImage || '/_resources/images/smiling-students-and-lecturer-in-auditorium-at-uni.jpg'}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px',
            position: 'relative',
          }}
        >
          <div className="about-quote-overlay"></div>
          <div className="container" style={{ position: 'relative', zIndex: 1, padding: '100px 20px' }}>
            <div className="row">
              <div className="col-12">
                <p className="about-quote-text">{quote.text}</p>
                {quote.author && <p className="about-quote-author">{quote.author}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section about-graduation-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mb-4 mb-md-0 about-graduation-images">
              <div className="about-graduation-separator"></div>
              <div
                className="about-graduation-image"
                style={{
                  backgroundImage: `url('${variety.images?.[0] || '/_resources/images/asian-young-woman-in-college.jpg'}')`,
                }}
              ></div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div
                className="about-graduation-image"
                style={{
                  backgroundImage: `url('${
                    variety.images?.[1] ||
                    '/_resources/images/group-young-cheerful-students-joyfully-talking-while-studying-together-library-university.jpg'
                  }')`,
                }}
              ></div>
            </div>
            <div className="col-md-4" style={{ paddingLeft: '20px', paddingRight: '15px' }}>
              <div className="about-graduation-content-wrapper">
                <div>
                  <p className="about-graduation-content-label">{variety.label}</p>
                  <h2 className="about-graduation-content-title">{variety.title}</h2>
                </div>
              </div>
              <p className="about-graduation-content-text">{variety.content}</p>
              {variety.cta?.link && (
                <Link href={variety.cta.link} className="btn-lams-primary">
                  {variety.cta.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section about-how-it-works-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="about-how-it-works-label">{howItWorks.label}</p>
              <h2 className="about-how-it-works-title">{howItWorks.title}</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div
                className="about-how-it-works-image"
                style={{
                  backgroundImage: `url('${howItWorks.image || '/_resources/images/happy-young-asian-businesswoman-working-with-laptop-computer-office.jpg'}')`,
                }}
              ></div>
            </div>
            <div className="col-md-6" style={{ paddingLeft: '50px', paddingRight: '15px' }}>
              {(howItWorks.steps || []).map((step, idx) => (
                <div key={`${step.title}-${idx}`} className="about-step-card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div className="about-step-icon-box">
                      <i className={`${step.icon || 'bi bi-circle'} about-step-icon`}></i>
                    </div>
                    <div>
                      <h3 className="about-step-title">{step.title}</h3>
                      <p className="about-step-text">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section about-subscribe-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="about-subscribe-title">{subscribe.title}</h2>
              <p className="about-subscribe-text">{subscribe.description}</p>
            </div>
            <div className="col-md-6">
              <form className="about-subscribe-form">
                <input type="email" placeholder="Enter Your Email Address" className="about-subscribe-input" />
                <button type="submit" className="about-subscribe-button">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section about-categories-section">
        <div className="container">
          <div className="about-categories-container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 about-categories-images-wrapper">
                <div
                  className="about-category-image-top"
                  style={{
                    backgroundImage: `url('${categories.images?.[0] || '/_resources/images/university-students-tutoring-studying-online-with.jpg'}')`,
                  }}
                ></div>
                <div
                  className="about-category-image-bottom"
                  style={{
                    backgroundImage: `url('${
                      categories.images?.[1] ||
                      '/_resources/images/business-coworkers-discussing-new-ideas-brainstorming-together-looking-new-project-document.jpg'
                    }')`,
                  }}
                ></div>
              </div>
              <div className="col-md-6" style={{ paddingLeft: '100px' }}>
                {(categories.features || []).map((feature, idx) => (
                  <div key={`${feature.title}-${idx}`} className="about-category-feature">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                      <div className="about-category-icon-box">
                        <i className={`${feature.icon || 'bi bi-star'} about-category-icon`}></i>
                      </div>
                      <div>
                        <h3 className="about-category-feature-title">{feature.title}</h3>
                        <p className="about-category-feature-text">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <Link href="#" className="btn-lams-primary" style={{ marginTop: '20px', borderRadius: '6px' }}>
                  ALL CATEGORIES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="page-section"
        style={{
          backgroundImage: "url('/_resources/images/home-find-course.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '5%',
          padding: '80px 0',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <div className="container fontSS" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col">
              <h2
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: '48px',
                  fontWeight: 'bold',
                  marginBottom: '40px',
                }}
              >
                Find Your Dream Course
              </h2>
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  overflow: 'hidden',
                  borderRadius: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '85%',
                  margin: '0 auto',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                <input
                  className="fontSS"
                  type="text"
                  placeholder="Search Program Here"
                  style={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    padding: '15px 30px',
                    fontSize: '20px',
                    outline: 'none',
                  }}
                />
                <select
                  className="fontSS"
                  style={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    padding: '10px 20px',
                    fontSize: '20px',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option>Select Department</option>
                  <option>D1</option>
                  <option>D2</option>
                  <option>D3</option>
                </select>
                <div
                  style={{
                    backgroundColor: '#F9DBCD',
                    width: '20%',
                    height: '100%',
                    padding: '25px',
                    marginLeft: '10px',
                    textAlign: 'center',
                  }}
                >
                  <button
                    className="fontSS"
                    style={{
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      backgroundColor: 'transparent',
                    }}
                  >
                    FIND PROGRAM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
