import Image from 'next/image'
import styles from './bio.module.css'

export default function Bio() {
  return (
    <div className={styles.bio}>
      <Image
        priority
        src="/images/profile.jpg"
        className={styles.bioAvatar}
        height={150}
        width={150}
        alt="Profile photo"
        style={{
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      <p>
        Hi, I'm <strong>Jake</strong>! I live near Oakland, CA with my wife, daughter, and two cats. You can find me on{' '}
        <a href="https://github.com/JakeSiddall">GitHub</a>
        {' or '}
        <a href="https://twitter.com/siddalljake">Twitter</a>
      </p>
    </div>
  )
}