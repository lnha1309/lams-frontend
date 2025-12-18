export default function Loading() {
    return (
        <main id="main-content">
            <div className="container" style={{ padding: '60px 20px' }}>
                <div className="loading-skeleton">
                    {/* Breadcrumb skeleton */}
                    <div
                        style={{
                            width: '120px',
                            height: '16px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            marginBottom: '30px',
                            animation: 'pulse 1.5s ease-in-out infinite',
                        }}
                    />

                    {/* Featured image skeleton */}
                    <div
                        style={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '8px',
                            marginBottom: '30px',
                            animation: 'pulse 1.5s ease-in-out infinite',
                        }}
                    />

                    {/* Category badge skeleton */}
                    <div
                        style={{
                            width: '80px',
                            height: '24px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            marginBottom: '15px',
                            animation: 'pulse 1.5s ease-in-out infinite',
                        }}
                    />

                    {/* Title skeleton */}
                    <div
                        style={{
                            width: '80%',
                            height: '36px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            marginBottom: '15px',
                            animation: 'pulse 1.5s ease-in-out infinite',
                        }}
                    />

                    {/* Meta skeleton */}
                    <div
                        style={{
                            width: '200px',
                            height: '14px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            marginBottom: '30px',
                            animation: 'pulse 1.5s ease-in-out infinite',
                        }}
                    />

                    {/* Content skeleton lines */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            style={{
                                width: i % 2 === 0 ? '90%' : '100%',
                                height: '16px',
                                backgroundColor: '#e0e0e0',
                                borderRadius: '4px',
                                marginBottom: '12px',
                                animation: 'pulse 1.5s ease-in-out infinite',
                            }}
                        />
                    ))}
                </div>

                <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
            </div>
        </main>
    );
}
