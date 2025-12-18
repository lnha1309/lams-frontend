import Image from 'next/image';

export default function MPhilEducationPage() {
  return (
    <main className="container" id="wrap">
      <ol className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/postgraduate">Master Programs</a>
        </li>
        <li>Master of Philosophy in Education</li>
      </ol>
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/postgraduate/master-of-philosophy-in-education" title="Graduate Studies">
              Master of Philosophy in Education
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#"> Master of Philosophy in Education</a>
                <ul>
                  <li className="selected">
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#entry-requirements">Entry Requirements</a>
                  </li>
                  <li>
                    <a href="#english-requirements">English Requirements</a>
                  </li>
                  <li>
                    <a href="#notice">Notice</a>
                  </li>
                  <li>
                    <a href="#tuition-fees">Tuition Fees</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <article id="main-content-span" className="col-12 col-md-9">
          <header>
            <h1 id="overview">Master of Philosophy in Education</h1>
            <h3
              style={{
                textTransform: 'uppercase',
                lineHeight: '1em',
                letterSpacing: '3.7px',
                color: '#bfbfbf',
              }}
            >
              TWO qualifications from the UK and France
            </h3>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image
                src="https://www.uh.edu/architecture/graduate-studies/images/march-3-banner.jpg"
                alt=""
                width={800}
                height={400}
              />
            </div>
            <p>
              The Master of Philosophy in Education is an applied research program for students aspiring to become
              educational specialists, lecturers in pedagogical theories and methodologies, pedagogical researchers,
              educational consultants, and educational administrators seeking to ground their ideas in scientific study.
            </p>
            <p>
              Master of Philosophy (M.Phil) programs are research-based rather than subject-specific. Throughout the
              training process, learners will achieve specialised knowledge through in-depth research under the
              supervision of accompanying instructors.
            </p>
            <p>
              Upon completion of the M.Phil program, students can apply the results of their Master&apos;s research to
              enrol in a PhD program, where they can further expand their research pursuits towards obtaining a doctoral
              degree.
            </p>
            <blockquote
              style={{
                borderLeft: '2px solid rgba(102, 102, 102, 0.2)',
                background: 'rgba(153, 153, 153, 0.05)',
                padding: '20px 35px',
                margin: '25px 0',
                letterSpacing: 0,
                fontStyle: 'italic',
              }}
            >
              The Master of Philosophy in Education (M.Phil in Education) offered by LAMS (LAMS) is a dual-degree
              program, a collaboration between France and the United Kingdom. Upon graduation, students will receive two
              Master&apos;s degrees.
            </blockquote>
            <div>
              <p>
                <strong>Upon graduation, students will simultaneously receive two qualifications:</strong>
              </p>
              <ul>
                <li>The LRN Level 7 Diploma in Management and Analytics.</li>
                <li>Master of Philosophy in Education (M.Phil in Education) from The LAMS.</li>
              </ul>
            </div>
            <hr />
            <h3 id="entry-requirements">
              <strong>Entry requirements</strong>
            </h3>
            <p>
              In addition to meeting the entry requirements, admission also considers the candidate&apos;s suitability
              before joining the program to ensure that they can comprehend and benefit from participating.
            </p>
            <p>Entry requirements ought to meet one of the following criteria:</p>
            <ul>
              <li>Bachelor&apos;s degree from accredited and recognized universities.</li>
              <li>
                EQF Level 6 Diploma or equivalent. Level 6 diploma must be from an accredited and recognized
                institution.
              </li>
              <li>
                The LAMS shall not accept degrees from fake universities, universities belonging to the Diploma Mills,
                or universities accredited by fake/not authorized accreditation bodies.
              </li>
            </ul>
            <h3 id="english-requirements">
              <strong>English requirements</strong>
            </h3>
            <ul>
              <li>Common European Framework of Reference (CEFR) level B2 or equivalent.</li>
              <li>IELTS 5.5; Speaking and writing must be 5.5 or equivalent.</li>
              <li>
                In case of not having an English certificate, LAMS (LAMS) conducts an internal English placement test
                and reviews each candidate.
              </li>
            </ul>
            <h3 id="notice">
              <strong>Notice</strong>
            </h3>
            <p>
              The LAMS (LAMS) reserves the right to decide whether to accept or not to accept based on the requirements
              of the accredited body and LAMS&apos;s global acceptance criteria.
            </p>
            <hr />
            <h3 id="tuition-fees">
              <strong>
                <em>Tuition Fees</em>
              </strong>
            </h3>
            <p>
              Tuition policies are in keeping with the provisions of the LAMS policy and are subject to change without
              notice. In some cases, LAMS offers a variety of Scholarships for International Students.
            </p>
            <ul>
              <li>
                Application Fees: <strong>400€</strong>
              </li>
              <li>
                Full Programs: <strong>19.000€</strong>
              </li>
              <li>
                Installments: <strong>3</strong>
              </li>
            </ul>
          </section>
        </article>
        <footer></footer>
      </section>
    </main>
  );
}

