import Image from 'next/image';

export default function MTHMPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/postgraduate/master-of-tourism-and-hospitality-management" title="Graduate Studies">
              The Master of Tourism and Hospitality Management
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">The Master of Tourism and Hospitality Management</a>
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
            <h1 id="overview">The Master of Tourism and Hospitality Management</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram10.png" alt="" width={800} height={400} />
            </div>
            <p>
              The Master of Tourism and Hospitality Management (MTHM) is a one- to two-year advanced programme designed
              for students who already hold an undergraduate degree in tourism, hospitality, business, management, or a
              related field. This programme emphasizes strategic hospitality management, tourism development, service
              excellence, sustainability, and evidence-based decision-making. It prepares students for senior roles in
              hotels, resorts, tourism boards, event organisations, travel companies, and global hospitality enterprises,
              offering a pathway to internationally recognised qualifications with the flexibility and affordability that
              LAMS is known for.
            </p>
            <hr />
            <h3 id="who-is-this-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This MTHM programme is ideal for:</p>
            <ul>
              <li>
                Graduates holding a bachelor&apos;s degree in tourism, hospitality, business, management, or a related
                discipline.
              </li>
              <li>
                Professionals seeking to advance into senior roles within hotels, resorts, tourism organisations, or
                hospitality service providers.
              </li>
              <li>Working managers looking for a flexible learning option while continuing employment.</li>
              <li>
                International students aiming for a globally recognised qualification to enhance career prospects or
                pursue doctoral studies.
              </li>
              <li>
                Individuals planning to work in strategic, operational, or managerial positions across hotels, travel
                organisations, tourism authorities, event management companies, and hospitality service providers.
              </li>
            </ul>

            <h3 id="program-structure">
              <strong>Program Structure</strong>
            </h3>
            <p>Students complete advanced-level modules such as:</p>
            <ul>
              <li>Strategic Management and Marketing.</li>
              <li>Destination Management.</li>
              <li>International Tourism Policy and Development.</li>
              <li>Digital Tourism and Hospitality.</li>
              <li>Organisational Behaviour in International Contexts.</li>
              <li>Advanced Research Methods.</li>
              <li>Work-based Project.</li>
            </ul>

            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the MTHM programme, students will be able to:</p>
            <ul>
              <li>
                Apply advanced management, service, and tourism development principles in hospitality and tourism
                contexts.
              </li>
              <li>Understand global tourism trends, hospitality regulations, and sustainability frameworks.</li>
              <li>Develop innovative strategies to enhance service quality, customer experience, and destination competitiveness.</li>
              <li>Analyse organisational performance, operational efficiency, and tourism market dynamics.</li>
              <li>Conduct applied research and present professional solutions in tourism and hospitality management.</li>
              <li>Progress toward doctoral-level studies such as a DBA or PhD in Tourism or Hospitality Management.</li>
            </ul>

            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Bachelor&apos;s degree in Tourism, Hospitality, Business, Management, or a related field.</li>
              <li>International undergraduate degree equivalent to a UK bachelor&apos;s degree.</li>
              <li>
                Relevant professional qualifications with substantial managerial experience (for mature-entry applicants).
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

