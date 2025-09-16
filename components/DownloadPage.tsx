import React from 'react';
import styles from './DownloadPage.module.css';

interface DownloadPageProps {
  subjectTitle: string;
  itemName: string;
  downloadLink: string;
}

// Generic Book Icon
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

// Download Icon for the button
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

export function DownloadPage({ subjectTitle, itemName, downloadLink }: DownloadPageProps) {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
            <BookIcon />
        </div>
        <h1 className={styles.title}>{subjectTitle}</h1>
        <p className={styles.itemName}>{itemName}</p>
        <a href={downloadLink} className={styles.downloadButton} download>
            <DownloadIcon />
            <span>下载</span>
        </a>
    </div>
  );
}
