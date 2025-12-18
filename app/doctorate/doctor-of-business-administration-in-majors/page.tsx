import Image from 'next/image';

export default function DBAMajorsPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/doctorate/doctor-of-business-administration-in-majors" title="Graduate Studies">
              Doctor of Business Administration in Majors
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">Doctor of Business Administration in Majors</a>
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
                    <a href="#tuition-fees">Tuition Fees</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <article id="main-content-span" className="col-12 col-md-9">
          <header>
            <h1 id="overview">Doctor of Business Administration in Majors</h1>
            <h3
              style={{
                textTransform: 'uppercase',
                lineHeight: '1em',
                letterSpacing: '3.7px',
                color: '#bfbfbf',
              }}
            >
              TWO doctor qualifications from the UK and France
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
              The Doctor of Business Administration (DBA) for 17 specialisations is a dual-degree program, a partnership
              between the UK&apos;s national training system and Université Libérale de LAMS (LAMS). The DBA is the
              highest academic and scientific degree available in Business Administration.
            </p>
            <p>
              The Doctor of Business Administration (DBA) curriculum with 17 majors emphasises knowledge-intensive
              management and business administration research. The program consists of two phases: (1) the learning phase
              involving in-depth investigation of eight organizational modules, and (2) the research phase focused on
              the formation of a career-oriented, practical doctoral thesis.
            </p>
            <p>
              Through the process of learning and research, students develop not only research capacity (a required skill
              at the doctoral level) but also a solid knowledge depth of each enterprise activity. This forms the basis
              for in-depth research and teaching in their chosen sector and subject of enthusiasm.
            </p>
            <p>
              After completing fundamental courses in business and management, the curriculum focuses on in-depth
              research to develop a novel theory suitable for the student&apos;s or teacher&apos;s industry or sector of
              study or instruction.
            </p>
            <p>
              In contrast to the PhD in Management degree, the DBA program emphasises research highly applicable to the
              candidate&apos;s chosen sector. As a dual-degree program, students will graduate simultaneously with two
              Doctoral degrees:
            </p>
            <ul>
              <li>
                The Professional Doctorate as part of the United Kingdom&apos;s National Regulated Qualification
                Framework (RQF): OTHM Level 8 Diploma in Strategic Management and Leadership Practice.
              </li>
              <li>Doctor of Business Administration (DBA) in one of 17 majors from LAMS.</li>
            </ul>
            <hr />
            <h3 id="entry-requirements">
              <strong>Entry requirements</strong>
            </h3>
            <p>
              To enroll in the Dual-degree Doctor of Business Administration in 17 majors, the learner must meet the
              following criteria:
            </p>
            <ul>
              <li>
                Hold a Master&apos;s degree from an accredited university or possess a Level 7 Diploma according to the
                European Qualifications Framework.
              </li>
              <li>
                In case such degree is from a non-recognized university, the student should have followed the Recognition
                of Prior Learning (RPL) policy of LAMS.
              </li>
              <li>Degrees from fake universities or diploma mills will not be accepted.</li>
              <li>Learners must be over 24 years old.</li>
            </ul>
            <p>
              LAMS reserves the highest decision-making power for admission, whether to accept or not, after a specific
              review of each candidate&apos;s profile to ensure they can comprehend and gain benefits when participating.
            </p>
            <h3 id="english-requirements">
              <strong>English requirements</strong>
            </h3>
            <p>
              If a learner is not from a predominantly English-speaking country, they must prove English language
              proficiency with one of the following:
            </p>
            <ul>
              <li>Common European Framework of Reference (CEFR) level B2 or equivalent.</li>
              <li>Or a minimum TOEFL score of 101 or IELTS 6.5; Reading and Writing must be at 6.5 or equivalent.</li>
            </ul>
            <hr />
            <h3 id="tuition-fees">
              <strong>
                <em>Tuition Fees</em>
              </strong>
            </h3>
            <p>
              Tuition policies are in keeping with the provisions of the LAMS policy and subject to change without
              notice. In some cases, LAMS offers a variety of scholarships for international students.
            </p>
            <ul>
              <li>
                Application Fees: <strong>400€</strong>
              </li>
              <li>
                Full Programs: <strong>12.000€</strong>
              </li>
              <li>
                Installments: <strong>2</strong>
              </li>
            </ul>
          </section>
        </article>
        <footer></footer>
      </section>
    </main>
  );
}

