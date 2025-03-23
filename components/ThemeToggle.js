/*import styles from './layout.module.css';

export default function ThemeToggle({ darkMode, setDarkMode }) {
    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    };

    return (
        <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
        >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
}*/

import styles from './layout.module.css';

export default function ThemeToggle({ darkMode, setDarkMode }) {
    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    };

    return (
        <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            💡
        </button>
    );
}