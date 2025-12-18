import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsDetail, NewsItem } from '@/lib/api';
import type { Metadata } from 'next';

type PageParams = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const news = await getNewsDetail(slug).catch(() => null);

    if (!news) {
        return { title: 'News Not Found | LAMS' };
    }

    return {
        title: news.metaTitle || `${news.title} | LAMS`,
        description: news.metaDescription || news.teaser || '',
        openGraph: {
            title: news.metaTitle || news.title,
            description: news.metaDescription || news.teaser || '',
            images: news.featuredImage ? [news.featuredImage] : [],
        },
    };
}

export default async function NewsDetailPage({ params }: PageParams) {
    const { slug } = await params;
    const news = await getNewsDetail(slug).catch(() => null);

    if (!news) {
        notFound();
    }

    const publishDate = news.publishDate ? new Date(news.publishDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }) : null;

    return (
        <main id="main-content">
            <article id="newsroom-article">
                <section className="page-section" id="article-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <nav className="nav-breadcrumb">
                                    <Link href="/news-events">← Back to News</Link>
                                </nav>
                                <header className="clearfix">
                                    {news.featuredImage && (
                                        <div
                                            className="article-featured-image"
                                            style={{
                                                backgroundImage: `url(${news.featuredImage})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '400px',
                                                borderRadius: '8px',
                                                marginBottom: '30px',
                                            }}
                                        />
                                    )}
                                    <div className="header-text" id="article-header-image">
                                        {news.category && (
                                            <span
                                                className="article-category"
                                                style={{
                                                    display: 'inline-block',
                                                    padding: '4px 12px',
                                                    backgroundColor: '#4a90a4',
                                                    color: '#fff',
                                                    borderRadius: '4px',
                                                    fontSize: '12px',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                {news.category}
                                            </span>
                                        )}
                                        <h1 className="entry-title">{news.title}</h1>
                                        {publishDate && (
                                            <p className="article-meta" style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                                                Published on {publishDate}
                                                {news.views !== undefined && ` • ${news.views} views`}
                                            </p>
                                        )}
                                        {news.teaser && (
                                            <p className="article-teaser-intro" style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.6 }}>
                                                {news.teaser}
                                            </p>
                                        )}
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="article-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-10 col-lg-8">
                                <div
                                    className="article-body"
                                    style={{ lineHeight: 1.8, fontSize: '16px' }}
                                    dangerouslySetInnerHTML={{ __html: news.content || '' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Link href="/news-events" className="btn btn-outline-secondary">
                                    ← Back to All News
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}
