import Link from 'next/link';
import { getContactData } from '@/lib/api';
import ContactForm from '@/app/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | LAMS',
  description: 'Get in touch with London Academy of Management and Sciences. Find our address, phone, email, and office hours.',
};

export default async function ContactUs() {
  const data = await getContactData().catch(() => null);

  const mainCampus = data?.mainCampus ?? {
    address: '207 Regent Street, London, England W1B3HH',
    phone: '+44 20 8068 4422',
    email: 'info@lams.ac',
    mapUrl: '',
  };
  const offices = data?.additionalOffices ?? [];
  const social = data?.social ?? {};
  const formSettings = data?.formSettings ?? { enabled: true };
  const businessHours = data?.businessHours ?? { weekdays: 'Mon - Fri: 9:00 AM - 5:00 PM', weekends: 'Sat - Sun: Closed' };

  return (
    <main className="container" id="wrap">
      <section className="row" id="page">
        <div className="nav-secondary col">
          <header>
            <h1 className="site-title">
              <Link href="/contact-us" title="Contact Us">
                Contact Us
              </Link>
            </h1>
          </header>
          <nav role="navigation">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <article id="main-content-span" className="col-12 col-md-9">
          <header>
            <h1>London Academy of Management and Sciences</h1>
          </header>
          <div className="row">
            <section className="col-12 col-md-8" id="content-well">
              <p>
                <strong>
                  Welcome to the LAMS, a premier platform offering courses from top universities and institutions around
                  the world.
                </strong>
              </p>

              <p>
                <strong>Main campus:</strong>
                <br />
                {mainCampus.address}
                <br />
                {mainCampus.phone && (
                  <>
                    <a href={`tel:${mainCampus.phone}`}>Tel.: {mainCampus.phone}</a>
                    <br />
                  </>
                )}
                {mainCampus.email && <a href={`mailto:${mainCampus.email}`}>{mainCampus.email}</a>}
              </p>

              {/* Business Hours */}
              <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <strong>Business Hours:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0 0' }}>
                  <li style={{ marginBottom: '5px' }}>
                    <i className="bi bi-clock" style={{ marginRight: '8px' }}></i>
                    {businessHours.weekdays}
                  </li>
                  <li>
                    <i className="bi bi-clock" style={{ marginRight: '8px' }}></i>
                    {businessHours.weekends}
                  </li>
                </ul>
              </div>

              {offices.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                  <strong>Additional offices:</strong>
                  <ul>
                    {offices.map((office, idx) => (
                      <li key={`${office.name}-${idx}`}>
                        <div>{office.name}</div>
                        <div>{office.address}</div>
                        {office.phone && (
                          <div>
                            <a href={`tel:${office.phone}`}>{office.phone}</a>
                          </div>
                        )}
                        {office.email && (
                          <div>
                            <a href={`mailto:${office.email}`}>{office.email}</a>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(social.facebook || social.twitter || social.linkedin || social.instagram || social.youtube) && (
                <div style={{ marginTop: '20px' }}>
                  <strong>Follow us:</strong>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                    {social.facebook && (
                      <a href={social.facebook} target="_blank" rel="noreferrer" title="Facebook">
                        <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
                      </a>
                    )}
                    {social.twitter && (
                      <a href={social.twitter} target="_blank" rel="noreferrer" title="Twitter">
                        <i className="bi bi-twitter-x" style={{ fontSize: '24px' }}></i>
                      </a>
                    )}
                    {social.linkedin && (
                      <a href={social.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                        <i className="bi bi-linkedin" style={{ fontSize: '24px' }}></i>
                      </a>
                    )}
                    {social.instagram && (
                      <a href={social.instagram} target="_blank" rel="noreferrer" title="Instagram">
                        <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
                      </a>
                    )}
                    {social.youtube && (
                      <a href={social.youtube} target="_blank" rel="noreferrer" title="YouTube">
                        <i className="bi bi-youtube" style={{ fontSize: '24px' }}></i>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Google Maps Embed */}
              {mainCampus.mapUrl ? (
                <div style={{ marginTop: '30px' }}>
                  <strong>Find us on the map:</strong>
                  <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden' }}>
                    <iframe
                      src={mainCampus.mapUrl}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="LAMS Location"
                    />
                  </div>
                </div>
              ) : (
                <div style={{ marginTop: '30px' }}>
                  <strong>Find us on the map:</strong>
                  <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0893478647064!2d-0.14154028422954!3d51.512861079637094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d502b5e7cb%3A0x5bb10db5dd6f6f6!2s207%20Regent%20St%2C%20London%20W1B%203HH%2C%20UK!5e0!3m2!1sen!2s!4v1639432000000!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="LAMS Location"
                    />
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <ContactForm enabled={formSettings.enabled} recipientEmail={formSettings.recipientEmail} />
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
