import Image from "next/image";

export default function MBAPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a
              href="/postgraduate/master-of-business-administration"
              title="Graduate Studies"
            >
              The Master of Business Administration{" "}
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">The Master of Business Administration </a>
                <ul>
                  <li className="selected">
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#who-is-this-programme-for">
                      Who Is This Programme For?
                    </a>
                  </li>
                  <li>
                    <a href="#program-structure">Program Structure </a>
                  </li>
                  <li>
                    <a href="#learning-outcomes">Learning Outcomes</a>
                  </li>
                  <li>
                    <a href="#academic-requirements">Academic Requirements</a>
                  </li>
                  <li>
                    <a href="#english-language-requirements">
                      English Language Requirements
                    </a>
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
            <h1 id="overview">The Master of Business Administration</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image
                src="/_images/images-2024/anhprogram1.png"
                alt=""
                width={800}
                height={400}
              />
            </div>
            <p>
              The Master of Business Administration (MBA) is a one- to two-year
              advanced programme designed for students who already hold an
              undergraduate degree in business, management, or a related field.
              This programme emphasizes leadership, strategic management,
              innovation, and evidence-based decision-making. It prepares
              students for senior management and executive roles in a variety of
              industries, providing a pathway to globally recognised
              qualifications with the flexibility and affordability that LAMS is
              known for.
            </p>

            <hr />
            <h3 id="who-is-this-programme-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This MBA programme is ideal for:</p>
            <ul>
              <li>
                Graduates holding a bachelor&apos;s degree in business,
                management, or a related discipline
              </li>
              <li>
                Professionals seeking to accelerate their career into leadership
                or executive roles
              </li>
              <li>
                Working managers looking for a flexible learning option while
                continuing employment
              </li>
              <li>
                International students aiming for a globally recognised
                qualification to advance their careers or pursue doctoral
                studies
              </li>
              <li>
                Individuals planning to work in strategic, operational, or
                managerial positions across corporate, public, or
                entrepreneurial settings
              </li>
            </ul>
            <h3 id="program-structure">
              <strong>Program Structure </strong>
            </h3>
            <p>Students complete advanced-level modules such as:</p>
            <ul>
              <li>Strategic Management </li>
              <li>Strategic Leadership </li>
              <li>Strategic Human Resource Management </li>
              <li>Globalisation and Corporate Governance </li>
              <li>Strategic Financial Management </li>
              <li>Advanced Business Research Methods </li>
              <li>Work-based Project </li>
            </ul>
            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the MBA programme, students will be able to:</p>
            <ul>
              <li>
                Apply advanced leadership, management, and decision-making
                principles in diverse business contexts
              </li>
              <li>
                Understand global business trends, corporate governance, and
                regulatory frameworks
              </li>
              <li>
                Develop innovative strategies for sustainable business growth
                and competitive advantage
              </li>
              <li>
                Analyse organisational performance, operational efficiency, and
                market dynamics
              </li>
              <li>
                Conduct applied research and present professional business
                solutions
              </li>
              <li>
                Progress toward doctoral-level studies such as DBA or PhD in
                Business Administration
              </li>
            </ul>
            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>
                Bachelor&apos;s degree in Business, Management, or a related
                field
              </li>
              <li>
                International undergraduate degree equivalent to a UK
                bachelor&apos;s degree
              </li>
              <li>
                Relevant professional qualifications with substantial managerial
                experience (for mature-entry applicants)
              </li>
            </ul>
            <p>Additional requirements:</p>
            <ul>
              <li>Official transcripts</li>
              <li>Statement of purpose</li>
              <li>Updated CV for mature-entry applicants</li>
              <li>References (academic or professional)</li>
            </ul>
            <h3 id="english-language-requirements">
              <strong>English Language Requirements</strong>
            </h3>
            <p>Students must provide one of the following:</p>
            <ul>
              <li>IELTS Academic 6.5 (minimum 6.0 in each band)</li>
              <li>TOEFL iBT 80</li>
              <li>PTE Academic 58</li>
              <li>LAMS Placement Test</li>
              <li>
                Proof of previous study in English (subject to verification)
              </li>
            </ul>
            <hr />
            <h3 id="tuition-fees">
              <strong>
                <em>Tuition Fees</em>
              </strong>
            </h3>
            <p>LAMS remains committed to affordability. Indicative fees:</p>
            <ul>
              <li>
                <strong>Tuition Fee: £11,500</strong>
              </li>
              <li>
                <strong>Registration fee: £150</strong>
              </li>
            </ul>
          </section>
        </article>
        <footer></footer>
      </section>
    </main>
  );
}
