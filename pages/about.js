import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me - Jake Siddall</title>
        <meta name="description" content="About Jake Siddall" />
      </Head>
      
      <h1>About Me</h1>
      <p>
        I'm Jake Siddall, a product manager living in the Bay Area. 
      </p>
      <p>
        This site is built with Next.js and showcases some of my projects 
        and thoughts on technology.
      </p>
    </Layout>
  )
}