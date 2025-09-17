import React from 'react';
import styles from './ResourceCards.module.css';
import Link from 'next/link';

const cardsData = [
  { title: "高等数学", href: "/resources/advanced-math" },
  { title: "大学物理", href: "/resources/university-physics" },
  { title: "大学化学", href: "/resources/university-chemistry" },
  { title: "线性代数", href: "/resources/linear-algebra" },
  { title: "生物学原理", href: "/resources/principles-of-biology" },
  { title: "数学分析", href: "/resources/mathematical-analysis" },
  { title: "思想与政治", href: "/resources/ethics-and-law" },
];

export function ResourceCards() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>课程资源</h1>
      <p className={styles.subtitle}>在这里下载电子课本等资源</p>
      <div className={styles.cardGrid}>
        {cardsData.map((card) => (
          <Link key={card.href} href={card.href} passHref legacyBehavior>
            <a className={styles.card}>{card.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
