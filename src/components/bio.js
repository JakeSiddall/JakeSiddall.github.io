/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          My name is <strong>Jake Siddall</strong> and I live in Seattle. I have a fiancee who is completing a surgical 
          fellowship in Nova Scotia. We have two cats (they live with her in Nova Scotia). 
          You should follow me on <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a>, or 
          checkout my <a href={`https://github.com/JakeSiddall`}>Github</a>!
        </p>
      )}
    </div>
  )
}

export default Bio
