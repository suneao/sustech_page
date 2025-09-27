import React from 'react';
import styles from './DownloadPage.module.css';

interface DownloadItem {
  readonly name: string;
  readonly downloadLink: string;
}

interface DownloadCategory {
  readonly title: string;
  readonly items: readonly DownloadItem[];
}

interface DownloadPageProps {
  readonly subjectTitle: string;
  readonly categories?: readonly DownloadCategory[];
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

export function DownloadPage({ subjectTitle, categories = [] }: DownloadPageProps) {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
            <BookIcon />
        </div>
        <h1 className={styles.title}>{subjectTitle}</h1>
        
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.itemsContainer}>
                {category.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <p className={styles.itemName}>{item.name}</p>
                    <a href={item.downloadLink} className={styles.downloadButton} download>
                        <DownloadIcon />
                        <span>下载</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noResources}>暂无资源</p>
        )}
    </div>
  );
}
