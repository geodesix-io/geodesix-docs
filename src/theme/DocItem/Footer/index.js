import React, { useState } from 'react';
import OriginalDocItemFooter from '@theme-original/DocItem/Footer';

export default function DocItemFooter(props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.querySelector('.theme-doc-markdown');
    const filename = document.title.replace(' | Geodesix Docs', '') + '.pdf';

    await html2pdf()
      .set({
        margin: [15, 15, 15, 15],
        filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(element)
      .save();

    setLoading(false);
  };

  return (
    <>
      <OriginalDocItemFooter {...props} />
      <div style={{ marginTop: '2rem', textAlign: 'right' }}>
        <button
          onClick={handleDownload}
          disabled={loading}
          className="button button--primary button--md"
        >
          {loading ? 'Generating PDF…' : 'Download as PDF'}
        </button>
      </div>
    </>
  );
}
