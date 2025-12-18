import Image from 'next/image';
import Link from 'next/link';
import { getHomepageData } from '@/lib/api';

export default async function Home() {
  const data = await getHomepageData().catch(() => null);

  const hero = data?.hero ?? {};
  const vmp = data?.visionMissionPhilosophy ?? {};
  const whoWeAre = data?.whoWeAre ?? {};
  const whyChoose = data?.whyChoose ?? {};
  const accreditation = data?.accreditation ?? {};
  const featuredNews = data?.featuredNews ?? [];

  return (
    <main id="main-content">
      <section
        className="page-section"
        id="banner2"
        style={{
          backgroundImage: `url('${hero.backgroundImage || '/_images/images-2024/anh16.png'}')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-md-none" id="mobile-banner-image">
                <Image
                  alt=""
                  height={432}
                  src={hero.backgroundImage || '/_images/images-2024/anh16.png'}
                  width={768}
                />
              </div>
              <h1>{hero.title || 'LAMS'}</h1>
              <p>
                {hero.subtitle ||
                  'Advance your profession and enhance your abilities with a wide range of online courses, including certificates, short courses, and executive programmes.'}
              </p>
              <div id="banner-cta">
                <div id="explore-majors">
                  {(hero.ctaButtons ?? [
                    { text: 'About us', link: '/about-us' },
                    { text: 'Free Consultation', link: '#' },
                  ]).map((btn, idx) =>
                    btn.link ? (
                      <Link key={`${btn.text}-${idx}`} className="btn btn-custom ga-cta" href={btn.link}>
                        {btn.text}
                      </Link>
                    ) : null
                  )}
                </div>
                <div className="d-none d-md-block" id="divider">
                  <hr />
                </div>
                <div className="bg-button d-none d-md-block" id="video-button" tabIndex={0}>
                  <i className="bi bi-play-fill" id="playIcon" style={{ display: 'none' }}></i>
                  <i className="bi bi-pause-fill" id="pauseIcon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="banner">
        <div className="container">
          <div className="row vision-row">
            <div className="col-md-4 vision-item">
              <h3 className="vision-title">{vmp.vision?.title || 'Vision'}</h3>
              <p className="vision-text">
                {vmp.vision?.content ||
                  'Become a global leader in accessible education, recognised for our commitment to excellence, affordability, and inclusivity.'}
              </p>
            </div>
            <div className="col-md-4 vision-item">
              <h3 className="vision-title">{vmp.mission?.title || 'Mission'}</h3>
              <p className="vision-text">
                {vmp.mission?.content ||
                  'Democratise education by providing accessible, high-quality courses and programmes to learners worldwide.'}
              </p>
            </div>
            <div className="col-md-4 vision-item">
              <h3 className="vision-title">{vmp.philosophy?.title || 'Philosophy'}</h3>
              <p className="vision-text">
                {vmp.philosophy?.content ||
                  'Founded on the principles of affordability, quality, and inclusivity, LAMS believes in the transformative power of education.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="world-class-faculty">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section-heading">{whoWeAre.title || 'Who we are'}</h2>
              <p className="content">
                {whoWeAre.content ||
                  'LAMS is an international academy based in London, offering flexible and affordable pathways in business, technology, science, and professional development.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="accessible-affordable">
        <div className="container">
          <div className="row">
            <div className="col">
              <div style={{ width: '100%', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
                <h2 className="section-heading sixten">{whyChoose.title || 'Why Choose LAMS?'}</h2>
              </div>
              <div className="value-content">
                <div
                  className="value-image"
                  style={{
                    background: `url('${whyChoose.image || '/_images/_homepage/accessible.jpg'}') center center no-repeat`,
                  }}
                ></div>
                <div className="value-paragraph">
                  <p className="sixten">
                    {whyChoose.content ||
                      'At LAMS, we believe that quality education should empower rather than limit. Our institution is built around the values of accessibility, innovation, and real-world relevance.'}
                  </p>
                </div>
                <ul className="homepage-metric">
                  {(whyChoose.features && whyChoose.features.length > 0
                    ? whyChoose.features
                    : ['Affordable Tuition', 'Flexible Learning', 'Globally-Focused Curriculum']
                  ).map((feature, index) => (
                    <li key={feature} data-aos="" data-aos-delay={index * 50 + 50}>
                      <span className="value">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="value-btn"
                  style={{ width: '100%', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <p className="sixten">
                    <Link className="btn btn-primary red-btn ga-cta" href="/about-us">
                      <span>About LAMS</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="career-readiness">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="value-title">
                <h2 className="section-heading sixten">
                  {accreditation.title?.split(' ').map((word, idx, arr) => (
                    <span key={`${word}-${idx}`}>
                      {word}
                      {idx < arr.length - 1 ? <br /> : null}
                    </span>
                  )) || (
                    <>
                      Full
                      <br />
                      Accreditation
                    </>
                  )}
                </h2>
              </div>
              <div className="value-content">
                <div
                  className="value-image"
                  style={{
                    background: `url('${accreditation.image || '/_images/_homepage/career-readiness.jpg'}') center center no-repeat`,
                  }}
                ></div>
                <div className="value-paragraph">
                  <p className="sixten">
                    {accreditation.content ||
                      'LAMS works in partnership with recognized educational bodies to ensure that our programmes meet high academic and industry standards.'}
                  </p>
                </div>
                <ul className="homepage-metric">
                  {(accreditation.stats && accreditation.stats.length > 0
                    ? accreditation.stats
                    : [
                        { label: 'International Learners', value: '70%' },
                        { label: 'Average Tuition Savings', value: '50%' },
                      ]
                  ).map((stat, index) => (
                    <li key={`${stat.label}-${index}`} data-aos="" data-aos-delay={index * 50 + 50}>
                      <span className="value">{stat.value} </span>
                      <span className="text">{stat.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="value-btn">
                  <p className="sixten">
                    <a className="btn btn-primary red-btn ga-cta" href="#">
                      <span>Career Services &amp; Centers</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-section" id="top-stories">
        <div className="container">
          <h2 className="section-heading">London Academy of Management and Sciences</h2>
          <div className="section-grid">
            {(featuredNews.length ? featuredNews : []).map((news) => (
              <div className="col-12 col-lg-4" key={news._id}>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-12">
                    <Link aria-hidden="true" href={`/news-events/${news.slug}`} tabIndex={-1}>
                      <div
                        className="grid-image"
                        style={{
                          backgroundImage: `url(${news.featuredImage || '/_resources/images/handsome-young-alumnus.jpg'})`,
                        }}
                      >
                        <span className="visually-hidden">{news.title}</span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12">
                    <p className="article-date">
                      {news.publishDate ? new Date(news.publishDate).toLocaleDateString() : '—'}
                    </p>
                    <h3 className="article-title">
                      <Link href={`/news-events/${news.slug}`}>{news.title}</Link>
                    </h3>
                    <p className="article-teaser">{news.teaser || 'Read more...'}</p>
                  </div>
                </div>
              </div>
            ))}
            {!featuredNews.length && (
              <div className="col-12">
                <p>Chưa có tin nổi bật.</p>
              </div>
            )}
          </div>
        </div>
      </div>

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
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
