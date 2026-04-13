import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Logo() {
  const homeHref = useBaseUrl('/');

  return (
    <>
      <Link to={homeHref} className="geodesix-logo-link">
      <div className="geodesix-logo-icon-wrapper">
        <svg
          className="geodesix-logo-dots-animated"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <g transform="rotate(30 50 50)">
            <circle className="geodesix-logo-dot geodesix-dot-a" cx="40" cy="20" r="9" />
            <circle className="geodesix-logo-dot geodesix-dot-b" cx="40" cy="40" r="9" />
            <circle className="geodesix-logo-dot geodesix-dot-c" cx="60" cy="40" r="9" />
            <circle className="geodesix-logo-dot geodesix-dot-d" cx="80" cy="40" r="9" />
            <circle className="geodesix-logo-dot geodesix-dot-e" cx="20" cy="60" r="9" />
            <circle className="geodesix-logo-dot geodesix-dot-f" cx="40" cy="60" r="9" />
            <circle className="geodesix-logo-dot geodesix-dot-g" cx="60" cy="60" r="9" />
            <circle className="geodesix-logo-dot geodesix-dot-h" cx="60" cy="80" r="9" />
          </g>
        </svg>
      </div>
      <span className="geodesix-logo-text">
        <span className="geodesix-logo-name">Geodesix</span>
        <span className="geodesix-logo-tagline">by impact.com</span>
      </span>
    </Link>
    </>
  );
}
