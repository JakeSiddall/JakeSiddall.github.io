import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Jake Siddall</title>
        <meta name="description" content={postData.description} />
      </Head>
      
      <article>
        <header>
          <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
          </div>
        </header>
        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}