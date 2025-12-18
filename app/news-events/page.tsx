import Link from 'next/link';
import { getNewsList } from '@/lib/api';

export const dynamic = 'force-dynamic';

type SearchParams = {
  page?: string | string[];
  category?: string | string[];
  limit?: string | string[];
};

type NewsEventsPageProps = {
  searchParams?: Promise<SearchParams>;
};

export default async function NewsEvents({ searchParams }: NewsEventsPageProps) {
  const params = await searchParams;
  const pageValue = params?.page;
  const limitValue = params?.limit;
  const categoryValue = params?.category;

  const page = Number(Array.isArray(pageValue) ? pageValue[0] : pageValue) || 1;
  const limit = Number(Array.isArray(limitValue) ? limitValue[0] : limitValue) || 9;
  const category = Array.isArray(categoryValue) ? categoryValue[0] : categoryValue;

  const data = await getNewsList({ page, limit, category }).catch(() => null);
  const news = data?.news ?? [];

  const featured = news[0];
  const others = news.slice(1);

  const totalPages = data?.totalPages ?? 1;
  const currentPage = data?.currentPage ?? page;

  const buildPageLink = (p: number) => {
    const params = new URLSearchParams();
    params.set('page', String(p));
    params.set('limit', String(limit));
    if (category) params.set('category', category);
    const qs = params.toString();
    return `/news-events${qs ? `?${qs}` : ''}`;
  };

  return (
    <main id="main-content">
      <nav className="nav-breadcrumb">
        <div className="container"></div>
      </nav>
      <section className="page-section" id="newsroom-title">
        <div className="container news-header">
          <div className="newsroom-header row align-items-center">
            <div className="col-xs-12" id="page-title">
              <h1>Newsroom | LAMS</h1>
            </div>
            <div className="col input-groups"></div>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="page-section" id="featured-story">
          <div className="container feature-story-container">
            <div className="row">
              <Link
                aria-hidden="true"
                className="col-12 col-lg-7 feature-story-img"
                href={`/news-events/${featured.slug}`}
                style={{
                  backgroundImage: `url(${featured.featuredImage || '/_resources/images/asian-young-woman-in-college.jpg'})`,
                }}
                tabIndex={-1}
              >
                <span className="visually-hidden">{featured.title}</span>
              </Link>
              <div className="col-12 col-lg-5 feature-story-text">
                <p className="news-date">{featured.publishDate ? new Date(featured.publishDate).toLocaleDateString() : '--'}</p>
                <h2 className="article-title">
                  <Link href={`/news-events/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="article-teaser">{featured.teaser || 'Xem them chi tiet...'}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="container">
          <p>Chưa có tin nào.</p>
        </div>
      )}

      {others.length > 0 && (
        <div className="page-section" id="top-stories">
          <div className="container">
            <h2 className="section-heading">Top Stories</h2>
            <div className="section-grid">
              {others.map((item) => (
                <div className="col-12 col-lg-4" key={item._id}>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-12">
                      <Link aria-hidden="true" href={`/news-events/${item.slug}`} tabIndex={-1}>
                        <div
                          className="grid-image"
                          style={{
                            backgroundImage: `url(${item.featuredImage || '/_resources/images/handsome-young-alumnus.jpg'})`,
                          }}
                        >
                          <span className="visually-hidden">{item.title}</span>
                        </div>
                      </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-12">
                      <p className="article-date">{item.publishDate ? new Date(item.publishDate).toLocaleDateString() : '--'}</p>
                      <h3 className="article-title">
                        <Link href={`/news-events/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="article-teaser">{item.teaser || 'Xem them chi tiet...'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <div className="container" style={{ marginBottom: '40px' }}>
          <div className="d-flex justify-content-between align-items-center">
            <Link className={`btn btn-outline-secondary ${currentPage <= 1 ? 'disabled' : ''}`} href={buildPageLink(Math.max(1, currentPage - 1))}>
              ← Trang truoc
            </Link>
            <span>
              Trang {currentPage} / {totalPages}
            </span>
            <Link
              className={`btn btn-outline-secondary ${currentPage >= totalPages ? 'disabled' : ''}`}
              href={buildPageLink(Math.min(totalPages, currentPage + 1))}
            >
              Trang sau →
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
