import Image from 'next/image';

export default function MLSCMPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/postgraduate/master-of-logistics-and-supply-chain-management" title="Graduate Studies">
              The Master of Logistics and Supply Chain Management
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">The Master of Logistics and Supply Chain Management</a>
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
            <h1 id="overview">The Master of Logistics and Supply Chain Management</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram12.jpeg" alt="" width={800} height={400} />
            </div>
            <p>
              The Master of Logistics and Supply Chain Management (MLSCM) is a one- to two-year advanced programme
              designed for students who already hold an undergraduate degree in logistics, supply chain, business,
              management, or a related field. This programme emphasizes strategic supply chain planning, operations
              management, procurement, logistics technologies, and evidence-based decision-making. It prepares students
              for senior roles in logistics, manufacturing, retail, transport, and global supply chain operations,
              offering a pathway to globally recognised qualifications with the flexibility and affordability that LAMS
              is known for.
            </p>
            <hr />
            <h3 id="who-is-this-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This MLSCM programme is ideal for:</p>
            <ul>
              <li>
                Graduates holding a bachelor&apos;s degree in logistics, supply chain, business, management, or a
                related discipline.
              </li>
              <li>
                Professionals seeking to advance into senior roles within logistics, operations, procurement, or supply
                chain management.
              </li>
              <li>Working managers looking for a flexible learning option while continuing employment.</li>
              <li>
                International students aiming for a globally recognised qualification to enhance career prospects or
                pursue doctoral studies.
              </li>
              <li>
                Individuals planning to work in strategic, operational, or managerial positions across manufacturing,
                distribution, retail, transportation, warehousing, or global supply networks.
              </li>
            </ul>

            <h3 id="program-structure">
              <strong>Program Structure</strong>
            </h3>
            <p>Students complete advanced-level modules such as:</p>
            <ul>
              <li>Logistics Management.</li>
              <li>Supply Chain Planning, Modelling and Analytics.</li>
              <li>Procurement and Supply Management.</li>
              <li>Supply Chain and Operations Strategy.</li>
              <li>Sustainable Operations Management.</li>
              <li>Business Research Methods.</li>
              <li>Work-based Project.</li>
            </ul>

            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the MLSCM programme, students will be able to:</p>
            <ul>
              <li>
                Apply advanced logistics, operations, and supply chain management principles in diverse organisational
                contexts.
              </li>
              <li>Understand global supply chain trends, policies, regulations, and sustainability frameworks.</li>
              <li>Develop innovative strategies to improve efficiency, reduce costs, and enhance supply chain resilience.</li>
              <li>Analyse organisational performance, logistics operations, and end-to-end supply chain processes.</li>
              <li>Conduct applied research and present professional solutions in logistics and supply chain management.</li>
              <li>Progress toward doctoral-level studies such as a DBA or PhD in Supply Chain Management.</li>
            </ul>

            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Bachelor&apos;s degree in Logistics, Supply Chain, Business, Management, or a related field.</li>
              <li>International undergraduate degree equivalent to a UK bachelor&apos;s degree.</li>
              <li>
                Relevant professional qualifications with substantial managerial experience (for mature-entry
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
              <li>LAMS Placement Test</li>
              <li>Proof of previous study in English (subject to verification)</li>
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

