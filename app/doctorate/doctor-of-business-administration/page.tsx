import Image from 'next/image';

export default function DBAPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/doctorate/doctor-of-business-administration" title="Graduate Studies">
              The Doctor of Business Administration
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#"> The Doctor of Business Administration </a>
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
            <h1 id="overview">The Doctor of Business Administration</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram13.jpeg" alt="" width={800} height={400} />
            </div>
            <p>
              The Doctor of Business Administration (DBA) is a two- to five-year advanced professional doctoral
              programme designed for experienced managers, executives, entrepreneurs, and professionals who already hold a
              master&apos;s degree in business, management, or a related field. This programme emphasizes strategic
              leadership, organisational transformation, applied research, and evidence-based decision-making at the
              highest level. It prepares candidates for senior executive roles, academic careers, consultancy, and
              thought leadership, offering a pathway to globally recognised doctoral qualifications with the flexibility
              and affordability that LAMS is known for.
            </p>

            <hr />
            <h3 id="who-is-this-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This DBA programme is ideal for:</p>
            <ul>
              <li>
                Graduates holding a master&apos;s degree in business, management, or a related discipline.
              </li>
              <li>
                Senior professionals seeking to advance into executive leadership, consultancy, or organisational
                development roles.
              </li>
              <li>Academics or lecturers aiming to enhance their research credentials and career prospects.</li>
              <li>
                Entrepreneurs looking to combine practical business insight with advanced research capabilities.
              </li>
              <li>
                Individuals planning to contribute to strategic, organisational, or policy-level decision-making at
                corporate, governmental, or international levels.
              </li>
            </ul>

            <h3 id="program-structure">
              <strong>Program Structure</strong>
            </h3>
            <p>Students complete advanced doctoral-level modules such as:</p>
            <ul>
              <li>Developing Strategic Management and Leadership Potential.</li>
              <li>Managing Strategic Change.</li>
              <li>Project Development, Planning and Management.</li>
              <li>Advanced Research Design and Methodologies.</li>
              <li>Developing Research Capability.</li>
              <li>Strategic Financial Management.</li>
              <li>Entrepreneurship and Innovation.</li>
              <li>Globalisation and Corporate Governance.</li>
              <li>Dissertation.</li>
            </ul>

            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the DBA programme, students will be able to:</p>
            <ul>
              <li>
                Demonstrate advanced leadership, strategic analysis, and organisational development capabilities.
              </li>
              <li>Understand global business dynamics, governance frameworks, and emerging management trends.</li>
              <li>
                Develop innovative, research-based solutions to complex business and organisational challenges.
              </li>
              <li>
                Analyse strategic, financial, operational, and market performance at an executive level.
              </li>
              <li>
                Design and conduct applied research that contributes to professional practice and organisational
                improvement.
              </li>
              <li>
                Progress toward academic careers or senior executive roles as research-informed leaders.
              </li>
            </ul>

            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Master&apos;s degree in Business, Management, or a related field.</li>
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

