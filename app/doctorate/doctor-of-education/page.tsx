import Image from 'next/image';

export default function EdDPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/doctorate/doctor-of-education" title="Graduate Studies">The Doctor of Education</a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#"> The Doctor of Education </a>
                <ul>
                  <li className="selected">
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#who-is-this-for">Who Is This Programme For?</a>
                  </li>
                  <li>
                    <a href="#program-structure">Program Structure</a>
                  </li>
                  <li>
                    <a href="#learning-outcomes">Learning Outcomes</a>
                  </li>
                  <li>
                    <a href="#academic-requirements">Academic Requirements</a>
                  </li>
                  <li>
                    <a href="#english-language-requirements">English Requirements</a>
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
            <h1 id="overview">The Doctor of Education</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram14.jpeg" alt="" width={800} height={400} />
            </div>
            <p>
              The Doctor of Education (EdD) is a two- to five-year advanced professional doctoral programme designed
              for experienced educators, academic leaders, policymakers, and professionals who already hold a
              master&apos;s degree in education, teaching, leadership, or a related field. This programme emphasizes
              educational leadership, curriculum innovation, policy analysis, organisational improvement, and applied
              research aimed at transforming educational practice. It prepares candidates for senior leadership roles in
              schools, colleges, universities, government agencies, NGOs, and research institutions, offering a pathway
              to globally recognised doctoral qualifications with the flexibility and affordability that LAMS is known for.
            </p>

            <hr />
            <h3 id="who-is-this-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This EdD programme is ideal for:</p>
            <ul>
              <li>
                Graduates holding a master&apos;s degree in education, teaching, leadership, or a related discipline.
              </li>
              <li>
                Senior educators seeking to advance into leadership roles in schools, colleges, or educational
                organisations.
              </li>
              <li>Academics or lecturers aiming to enhance their research credentials and career prospects.</li>
              <li>
                Policymakers and administrators looking to combine practical educational insight with advanced research
                capabilities.
              </li>
              <li>
                Individuals planning to contribute to strategic, organisational, or policy-level decision-making in
                educational settings.
              </li>
            </ul>

            <h3 id="program-structure">
              <strong>Program Structure</strong>
            </h3>
            <p>Students complete advanced doctoral-level modules such as:</p>
            <ul>
              <li>Educational Leadership and Management.</li>
              <li>Curriculum Design and Innovation.</li>
              <li>Educational Policy Analysis.</li>
              <li>Advanced Research Design and Methodologies.</li>
              <li>Organisational Development in Education.</li>
              <li>Strategic Planning in Educational Contexts.</li>
              <li>Dissertation.</li>
            </ul>

            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the EdD programme, students will be able to:</p>
            <ul>
              <li>
                Demonstrate advanced leadership, strategic analysis, and educational development capabilities.
              </li>
              <li>Understand global educational trends, policies, and regulatory frameworks.</li>
              <li>
                Develop innovative, research-based solutions to complex educational challenges.
              </li>
              <li>
                Analyse strategic, operational, and performance metrics in educational contexts.
              </li>
              <li>
                Design and conduct applied research that contributes to educational practice and organisational
                improvement.
              </li>
              <li>
                Progress toward academic careers or senior leadership roles as research-informed educational leaders.
              </li>
            </ul>

            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Master&apos;s degree in Education, Teaching, Leadership, or a related field.</li>
              <li>International postgraduate degree equivalent to a UK master&apos;s degree.</li>
              <li>
                Relevant professional qualifications with substantial senior management experience (for mature-entry
                applicants).
              </li>
            </ul>

            <p>Additional requirements:</p>
            <ul>
              <li>Official transcripts.</li>
              <li>Statement of purpose.</li>
              <li>Updated CV for mature-entry applicants.</li>
              <li>References (academic or professional).</li>
            </ul>

            <h3 id="english-language-requirements">
              <strong>English Language Requirements</strong>
            </h3>
            <p>Students must provide one of the following:</p>
            <ul>
              <li>IELTS Academic 6.5 (minimum 6.0 in each band).</li>
              <li>TOEFL iBT 80.</li>
              <li>PTE Academic 58.</li>
              <li>LAMS Placement Test.</li>
              <li>Proof of previous study in English (subject to verification).</li>
            </ul>
            <hr />

            <h3 id="tuition-fees">
              <strong>
                <em>Tuition Fees</em>
              </strong>
            </h3>
            <p>LAMS is committed to affordability. Indicative fees:</p>
            <ul>
              <li>
                Tuition Fee: <strong>£11,500</strong>
              </li>
              <li>
                Registration Fee:<strong>£150</strong>
              </li>
            </ul>
          </section>
        </article>
        <footer></footer>
      </section>
    </main>
  );
}

