import Image from 'next/image';

export default function PhDPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/doctorate/doctor-of-philosophy" title="Graduate Studies">The Doctor of Philosophy</a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#"> The Doctor of Philosophy </a>
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
            <h1 id="overview">The Doctor of Philosophy</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram15.jpeg" alt="" width={800} height={400} />
            </div>
            <p>
              The Doctor of Philosophy (PhD) is a three- to seven-year advanced academic research degree designed for
              scholars, researchers, and professionals who aim to generate original knowledge and contribute significantly
              to their field. The programme develops expertise in theoretical analysis, critical inquiry, and rigorous
              research methodologies. Unlike professional doctorates such as the EdD, the PhD emphasises the creation
              of new scholarly knowledge and prepares graduates for careers in academia, research-intensive roles, and
              specialised leadership positions across sectors.
            </p>

            <p>
              Students work closely with expert supervisors, engage in advanced research training, and produce a
              substantial doctoral thesis that demonstrates independent, original contribution to knowledge.
            </p>

            <hr />
            <h3 id="who-is-this-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This PhD programme is ideal for:</p>
            <ul>
              <li>
                Master&apos;s degree holders seeking to advance into academic or research careers.
              </li>
              <li>
                Professionals aiming to contribute original research to their field of expertise.
              </li>
              <li>
                Academics or lecturers looking to enhance their research credentials and career prospects.
              </li>
              <li>
                Individuals planning to work in research-intensive roles across various sectors.
              </li>
            </ul>

            <h3 id="program-structure">
              <strong>Program Structure</strong>
            </h3>
            <p>Students complete advanced research training and produce a doctoral thesis:</p>
            <ul>
              <li>Advanced Research Methodologies.</li>
              <li>Theoretical Frameworks and Critical Analysis.</li>
              <li>Literature Review and Research Design.</li>
              <li>Data Collection and Analysis.</li>
              <li>Academic Writing and Publication.</li>
              <li>Doctoral Thesis (original research contribution).</li>
            </ul>

            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the PhD programme, students will be able to:</p>
            <ul>
              <li>
                Demonstrate advanced research capabilities and theoretical understanding.
              </li>
              <li>Generate original knowledge that contributes significantly to their field.</li>
              <li>
                Design and conduct rigorous research using appropriate methodologies.
              </li>
              <li>
                Analyse and synthesise complex information from multiple sources.
              </li>
              <li>
                Present research findings effectively to academic and professional audiences.
              </li>
              <li>
                Progress toward academic careers or research-intensive leadership roles.
              </li>
            </ul>

            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Master&apos;s degree in a relevant field.</li>
              <li>International postgraduate degree equivalent to a UK master&apos;s degree.</li>
              <li>
                Relevant professional qualifications with substantial research experience (for mature-entry applicants).
              </li>
            </ul>

            <p>Additional requirements:</p>
            <ul>
              <li>Official transcripts.</li>
              <li>Research proposal.</li>
              <li>Statement of purpose.</li>
              <li>Updated CV.</li>
              <li>References (academic or professional).</li>
            </ul>

            <h3 id="english-language-requirements">
              <strong>English Language Requirements</strong>
            </h3>
            <p>Students must provide one of the following:</p>
            <ul>
              <li>IELTS Academic 7.0 (minimum 6.5 in each band).</li>
              <li>TOEFL iBT 100.</li>
              <li>PTE Academic 68.</li>
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

