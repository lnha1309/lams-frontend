export default function NewsListLoading() {
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
                    </div>
                </div>
            </section>

            {/* Featured story skeleton */}
            <section className="page-section" id="featured-story">
                <div className="container feature-story-container">
                    <div className="row">
                        <div
                            className="col-12 col-lg-7"
                            style={{
                                height: '400px',
                                backgroundColor: '#e0e0e0',
                                borderRadius: '8px',
                                animation: 'pulse 1.5s ease-in-out infinite',
                            }}
                        />
                        <div className="col-12 col-lg-5" style={{ padding: '20px' }}>
                            <div
                                style={{
                                    width: '100px',
                                    height: '14px',
                                    backgroundColor: '#e0e0e0',
                                    borderRadius: '4px',
                                    marginBottom: '15px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                }}
                            />
                            <div
                                style={{
                                    width: '80%',
                                    height: '28px',
                                    backgroundColor: '#e0e0e0',
                                    borderRadius: '4px',
                                    marginBottom: '15px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                }}
                            />
                            <div
                                style={{
                                    width: '100%',
                                    height: '60px',
                                    backgroundColor: '#e0e0e0',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid skeleton */}
            <div className="page-section" id="top-stories">
                <div className="container">
                    <h2 className="section-heading">Top Stories</h2>
                    <div className="section-grid">
                        {[1, 2, 3].map((i) => (
                            <div className="col-12 col-lg-4" key={i}>
                                <div className="row">
                                    <div className="col-12">
                                        <div
                                            style={{
                                                height: '200px',
                                                backgroundColor: '#e0e0e0',
                                                borderRadius: '8px',
                                                marginBottom: '15px',
                                                animation: 'pulse 1.5s ease-in-out infinite',
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <div
                                            style={{
                                                width: '80px',
                                                height: '12px',
                                                backgroundColor: '#e0e0e0',
                                                borderRadius: '4px',
                                                marginBottom: '10px',
                                                animation: 'pulse 1.5s ease-in-out infinite',
                                            }}
                                        />
                                        <div
                                            style={{
                                                width: '90%',
                                                height: '20px',
                                                backgroundColor: '#e0e0e0',
                                                borderRadius: '4px',
                                                marginBottom: '10px',
                                                animation: 'pulse 1.5s ease-in-out infinite',
                                            }}
                                        />
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '40px',
                                                backgroundColor: '#e0e0e0',
                                                borderRadius: '4px',
                                                animation: 'pulse 1.5s ease-in-out infinite',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </main>
    );
}
