import Image from 'next/image';

export default function BBAPage() {
  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col col-sm-3">
          <h2>
            <a href="/undergraduate/Bachelor-of-business-administration" title="Graduate Studies">
              The Bachelor of Business Administration
            </a>
          </h2>
          <nav role="navigation">
            <ul>
              <li className="opened">
                <a href="#">The Bachelor of Business Administration</a>
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
            <h1 id="overview">The Bachelor of Business Administration</h1>
          </header>
          <section id="content-well">
            <div className="feature">
              <Image src="/_images/images-2024/anhprogram11.jpeg" alt="" width={800} height={400} />
            </div>
            <p>
              The Bachelor of Business Administration (Top-Up) is a one-year final-stage program designed for students
              who already hold a Level 5 qualification or equivalent diploma and wish to complete a full bachelor&apos;s
              degree.
            </p>
            <p>
              This program focuses on advanced business concepts, strategic thinking, leadership, and real-world
              professional skills. It provides a direct pathway for students to upgrade their current qualification to an
              internationally recognized BBA degree — with the flexibility and affordability that LAMS is known for.
            </p>

            <hr />
            <h3 id="who-is-this-programme-for">
              <strong>Who Is This Programme For?</strong>
            </h3>
            <p>This Top-Up programme is ideal for:</p>
            <ul>
              <li>Students with a Level 5 Diploma, HND, or Associate Degree</li>
              <li>Learners seeking to complete their bachelor&apos;s degree in just one year</li>
              <li>Working professionals needing a flexible and cost-effective progression route</li>
              <li>
                International students who require a globally recognised qualification for career or postgraduate study
                (e.g., MBA)
              </li>
            </ul>
            <h3 id="program-structure">
              <strong>Program Structure </strong>
            </h3>
            <p>Students complete advanced-level modules such as:</p>
            <ul>
              <li>Leadership and People Management </li>
              <li>Operations Management </li>
              <li>Financial Decision Making </li>
              <li>Sustainable Business Practices </li>
              <li>Strategic Human Resource Management </li>
              <li>Business Research Project </li>
              <li>Final Project </li>
            </ul>
            <h3 id="learning-outcomes">
              <strong>Learning Outcomes</strong>
            </h3>
            <p>By the end of the Top-Up program, students will be able to:</p>
            <ul>
              <li>Apply strategic and analytical thinking to complex business problems</li>
              <li>Demonstrate leadership, communication, and decision-making skills</li>
              <li>Understand global markets and international business trends</li>
              <li>Conduct research and present a professional business project</li>
              <li>Progress toward postgraduate studies such as an MBA or relevant Master&apos;s degrees</li>
            </ul>
            <h3 id="academic-requirements">
              <strong>Academic Requirements</strong>
            </h3>
            <p>Applicants must meet one of the following entry criteria:</p>
            <ul>
              <li>Level 5 Diploma in Business (or related field)</li>
              <li>Higher National Diploma (HND) in Business or equivalent</li>
              <li>International Diploma / Associate Degree equivalent to 2 years of undergraduate study</li>
              <li>Additional requirements</li>
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
            <p>Flexible payment plans and international student discounts are available.</p>
          </section>
        </article>
        <footer></footer>
      </section>
    </main>
  );
}

