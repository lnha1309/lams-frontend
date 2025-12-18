import Image from 'next/image';

export default function BLSCMPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/undergraduate/Bachelor-of-logistics-and-supply-chain-management" title="Graduate Studies">
              The Bachelor of Logistics and Supply Chain Management
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">The Bachelor of Logistics and Supply Chain Management</a>
                <ul>
                  <li className="selected">
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#who-is-this-programme-for">Who Is This Programme For?</a>
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
                    <a href="#english-language-requirements">English Language Requirements</a>
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
            <h1 id="overview">The Bachelor of Logistics and Supply Chain Management</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram3.png" alt="" width={800} height={400} />
            </div>
            <p>
              The Bachelor of Logistics and Supply Chain Management (Top-Up) is a one-year final-stage programme designed
              for students who already hold a Level 5 qualification or equivalent diploma in logistics, supply chain, or
              related fields.
            </p>
            <p>
              This programme focuses on strategic supply chain management, logistics operations, procurement, transport
              management, and project planning. It provides a direct pathway for students to upgrade their current
              qualification to an internationally recognised bachelor&apos;s degree — with the flexibility and
              affordability that LAMS is known for.
            </p>

            <hr />
            <h3 id="who-is-this-programme-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This Top-Up programme is ideal for:</p>
            <ul>
              <li>Students with a Level 5 Diploma in Logistics &amp; Supply Chain Management or equivalent</li>
              <li>Learners seeking to complete their bachelor&apos;s degree in just one year</li>
              <li>Working professionals in logistics or supply chain roles needing a flexible progression route</li>
              <li>
                International students requiring a globally recognised qualification for career advancement or postgraduate
                study
              </li>
              <li>
                Individuals planning to enter managerial, supervisory, or coordinator roles in logistics, supply chain,
                procurement, or operations management
              </li>
            </ul>
            <h3 id="program-structure">
              <strong>Program Structure </strong>
            </h3>
            <p>Students complete advanced-level modules such as:</p>
            <ul>
              <li>Entrepreneurship Development </li>
              <li>Global Logistics and Supply Chain Management </li>
              <li>International Logistics Management</li>
              <li>Project Management </li>
              <li>Strategic Procurement </li>
              <li>Supply Chain Planning and Control </li>
              <li>Final Project </li>
            </ul>
            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the Top-Up program, students will be able to:</p>
            <ul>
              <li>Apply leadership and management principles within logistics and supply chain environments</li>
              <li>Analyse supply chain operations and implement process improvements</li>
              <li>Understand regulatory compliance, health and safety, and industry standards</li>
              <li>Optimise resources, inventory, and distribution strategies</li>
              <li>Conduct research and present a professional logistics or supply chain project</li>
              <li>
                Progress toward postgraduate studies such as MSc Logistics Management, Supply Chain Strategy, or
                Operations Leadership
              </li>
            </ul>
            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Level 5 Diploma in Logistics and Supply Chain Management (or related field)</li>
              <li>Higher National Diploma (HND) in Logistics, Transport, or Supply Chain Management</li>
              <li>
                International Diploma / Associate Degree equivalent to 2 years of study in a relevant discipline
              </li>
            </ul>
            <p>Additional requirements:</p>
            <ul>
              <li>Official transcripts</li>
              <li>Statement of purpose</li>
              <li>Updated CV for mature-entry applicants</li>
            </ul>
            <h3 id="english-language-requirements">
              <strong>English Language Requirements</strong>
            </h3>
            <p>Students must provide one of the following:</p>
            <ul>
              <li>IELTS Academic 6.0 (minimum 5.5 in each band)</li>
              <li>TOEFL iBT 70</li>
              <li>PTE Academic 50</li>
              <li>LAMS Placement Test</li>
              <li>Proof of previous study in English (subject to verification)</li>
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
                <strong>Tuition Fee: £7,500</strong>
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

