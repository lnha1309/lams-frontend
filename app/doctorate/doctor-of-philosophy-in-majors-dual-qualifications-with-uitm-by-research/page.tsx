import Image from 'next/image';

export default function PhDMajorsUITMPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a
              href="/doctorate/doctor-of-philosophy-in-majors-dual-qualifications-with-uitm-by-research"
              title="Graduate Studies"
            >
              Doctor of Philosophy in Majors Dual Qualifications with UITM Poland
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">Doctor of Philosophy in Majors Dual Qualifications with UITM Poland</a>
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
            <h1 id="overview">Doctor of Philosophy in Majors Dual Qualifications with UITM Poland</h1>
            <h3
              style={{
                textTransform: 'uppercase',
                lineHeight: '1em',
                letterSpacing: '3.7px',
                color: '#bfbfbf',
              }}
            >
              TWO Qualifications from the UK and France
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
              Successfully finishing a doctoral program requires the integration of a substantial and groundbreaking
              contribution that advances both professional practice and academic research. Moreover, doctoral candidates
              must attain recognition for their research within the academic community, achieved through international
              publications in esteemed journal systems such as ISI/SCOPUS.
            </p>

            <p>
              The Doctor of Philosophy (Ph.D) Dual Degree program in the field of management and business stands as the
              sole program in Switzerland that fulfills these stringent criteria. This program adopts a research-centric
              model (By Research), empowering doctoral candidates to immerse themselves in research right from the
              beginning.
            </p>

            <p>
              The program unfolds in two distinct phases: (1) an initial stage devoted to studying research topics,
              providing guidance for their research endeavors, and acquainting them with scientific research methods, and
              (2) a subsequent phase centered on research and thesis development for the Ph.D, with a career-oriented
              emphasis, under the guidance of academic supervisors.
            </p>

            <blockquote
              style={{
                borderLeft: '2px solid rgba(102, 102, 102, .2)',
                background: 'rgba(153, 153, 153, .05)',
                padding: '20px 35px',
                margin: '25px 0',
                letterSpacing: 0,
                fontStyle: 'italic',
              }}
            >
              As an accredited institution, LAMS&apos;s program is widely recognized by partner universities. In
              particular, LAMS has collaborated with UITM<sup>*</sup> University, one of Poland&apos;s premier
              universities, mutually recognizing graduation outcomes and granting degrees.
            </blockquote>

            <div>
              <p>As a program with multiple recognized outcomes, students will simultaneously earn two doctoral qualifications upon graduation:</p>
              <ul>
                <li>
                  Doctor of Business Administration (DBA) from the University of Information Technology and Management
                  (UITM Poland).
                </li>
                <li>Doctor of Philosophy (Ph.D) in one of 17 majors from LAMS.</li>
              </ul>
            </div>

            <hr />

            <h3 id="entry-requirements">
              <strong>Entry requirements</strong>
            </h3>

            <p>
              To enroll in the Doctor of Philosophy in Majors Dual Qualifications program, the learner must possess one
              of the criteria below:
            </p>
            <ul>
              <li>Learners must be over 24 years old, and</li>
              <li>Hold a Master&apos;s degree from an accredited university; or</li>
              <li>Possess a Level 7 Diploma according to the European Qualifications Framework.</li>
            </ul>
            <p>
              In case of such degree from a non-recognized university, the student should have followed the Recognition
              of Prior Learning (RPL) policy of LAMS. Additionally, degrees from fake universities or diploma mills will
              not be accepted.
            </p>

            <p>
              <strong>
                <em>Note:</em>
              </strong>{' '}
              LAMS reserves the highest decision making power for admission, whether to accept or not, after a specific
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
              <li>Common European Framework of Reference (CEFR) level B2 or equivalent; or</li>
              <li>A minimum TOEFL score of 101 or IELTS 6.5; Reading and Writing must be at 6.5 or equivalent</li>
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

