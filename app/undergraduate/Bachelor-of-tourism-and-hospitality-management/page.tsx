import Image from 'next/image';

export default function BTHMPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/undergraduate/Bachelor-of-tourism-and-hospitality-management" title="Graduate Studies">
              The Bachelor of Tourism and Hospitality Management
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">The Bachelor of Tourism and Hospitality Management</a>
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
            <h1 id="overview">The Bachelor of Tourism and Hospitality Management</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram4.png" alt="" width={800} height={400} />
            </div>
            <p>
              The Bachelor of Tourism and Hospitality Management (Top-Up) is a one-year final-stage programme designed
              for students who already hold a Level 5 qualification or equivalent diploma in tourism, hospitality, or
              related fields. This programme focuses on leadership in tourism and hospitality operations, service
              excellence, sustainable tourism, strategic management, and evidence-based practice. It provides a direct
              pathway for students to upgrade their current qualification to an internationally recognised bachelor&apos;s
              degree — with the flexibility and affordability that LAMS is known for.
            </p>

            <hr />
            <h3 id="who-is-this-programme-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This Top-Up programme is ideal for:</p>
            <ul>
              <li>Students with a Level 5 Diploma in Tourism &amp; Hospitality or equivalent</li>
              <li>Learners seeking to complete their bachelor&apos;s degree in just one year</li>
              <li>Working professionals in tourism and hospitality settings needing a flexible progression route</li>
              <li>
                International students requiring a globally recognised qualification for career advancement or
                postgraduate study
              </li>
              <li>
                Individuals planning to enter managerial, supervisory, or coordinator roles in hotels, resorts, travel
                agencies, event management, or tourism organisations
              </li>
            </ul>
            <h3 id="program-structure">
              <strong>Program Structure </strong>
            </h3>
            <p>Students complete advanced-level modules such as:</p>
            <ul>
              <li>Strategic Marketing </li>
              <li>Tourism Policy and Planning </li>
              <li>Organisational Behaviour and Performance </li>
              <li>Technology in the Tourism and Hospitality Industry </li>
              <li>Tourism and International Development </li>
              <li>Researching Tourism and Hospitality Management </li>
              <li>Final Project </li>
            </ul>
            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the Top-Up program, students will be able to:</p>
            <ul>
              <li>Apply leadership and management principles within tourism and hospitality settings</li>
              <li>Understand tourism policy, legislation, and industry standards</li>
              <li>Promote inclusive, sustainable, and customer-focused approaches to service</li>
              <li>Analyse and improve service quality, operational efficiency, and guest experience</li>
              <li>Conduct research and present a professional tourism or hospitality project</li>
              <li>
                Progress toward postgraduate studies such as MSc Tourism Management, Hospitality Leadership, or Event
                Management
              </li>
            </ul>
            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Level 5 Diploma in Tourism &amp; Hospitality (or related field)</li>
              <li>Higher National Diploma (HND) in Tourism &amp; Hospitality</li>
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

