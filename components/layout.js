import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from './layout.module.css'
import ThemeToggle from './ThemeToggle'

export const siteTitle = 'Jake Siddall'

export default function Layout({ children, home }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      setDarkMode(savedTheme === 'dark');
       // Set initial body background color
       document.body.style.backgroundColor = savedTheme === 'dark' ? '#1a1a1a' : '#FFFEEB';
  }, []);
  
      // Update body background color whenever theme changes
      useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#1a1a1a' : '#FFFEEB';
        document.body.style.transition = 'background-color 0.3s ease';
    }, [darkMode]);

  return (
      <div className={`${styles.container} ${darkMode ? styles.darkMode : styles.lightMode}`}>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jake Siddall's personal website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={styles.heading}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <h2 className={styles.headingMd}>
              <Link href="/">{siteTitle}</Link>
            </h2>
          </>
        )}
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      
      <main>{children}</main>
      
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Jake Siddall
      </footer>
    </div>
  )
}