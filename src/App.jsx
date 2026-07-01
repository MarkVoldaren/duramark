import React from 'react';

function LogoMark() {
  return (
    <div className="logo" aria-label="Duramark Technologies">
      <div className="logo-icon" aria-hidden="true">
        <span className="logo-triangle" />
        <span className="logo-dot" />
      </div>
      <div className="logo-text">
        <span className="logo-name">DuraMark</span>
        <span className="logo-company">Technologies</span>
      </div>
    </div>
  );
}

function ReportIcon() {
  return (
    <svg
      className="report-icon"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Report chart"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="8" width="48" height="48" rx="6" stroke="currentColor" strokeWidth="4" />
      <rect x="20" y="34" width="8" height="12" rx="2" fill="currentColor" />
      <rect x="32" y="22" width="8" height="24" rx="2" fill="currentColor" />
      <rect x="44" y="28" width="8" height="18" rx="2" fill="currentColor" />
    </svg>
  );
}

function Shell({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <LogoMark />
        </div>
      </header>
      {children}
    </div>
  );
}

function AppsHome() {
  return (
    <Shell>
      <main className="home">
        <section className="intro" aria-labelledby="page-title">
          <h1 id="page-title">Duramark Apps</h1>
          <p>Your internal tools and reporting dashboard</p>
        </section>

        <section className="app-grid" aria-label="Available apps">
          <article className="app-card">
            <ReportIcon />
            <h2>Daily Production Report</h2>
            <p>View daily production performance, department activity, and drill-down reports.</p>
            <a className="primary-button" href="/daily-production/">
              Open App
            </a>
          </article>
        </section>
      </main>
    </Shell>
  );
}

export default function App() {
  return <AppsHome />;
}
