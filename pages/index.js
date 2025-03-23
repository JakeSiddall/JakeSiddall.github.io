import Head from 'next/head'
import Layout from '../components/layout'
import Bio from '../components/bio'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Jake Siddall</title>
        <meta name="description" content="Jake Siddall's personal website" />
      </Head>

      <Bio />

      <section>
        <h2 className="heading-lg">Blog</h2>
        <ul className="post-list">
          {allPostsData.map(({ id, date, title, description }) => (
            <li className="post-item" key={id}>
              <article>
                <header>
                  <h3>
                    <Link href={`/posts/${id}`}>
                      <span>{title}</span>
                    </Link>
                  </h3>
                  <small>
                    <Date dateString={date} />
                  </small>
                </header>
                <section>
                  <p>{description}</p>
                </section>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}