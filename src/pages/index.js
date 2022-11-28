import * as React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage =  ({data}) => {
  console.log({data})
  return(
    <Layout>
      <div>
        <h1>My Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {
          data.allMarkdownRemark.edges.map(({node})=>(
            <div key={node.id}>
              <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
          )
          
          )
        }
      </div>
    </Layout>
  )
}
  
    
 


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
export default IndexPage;

export const query = graphql`
query MyQuery{
  allMarkdownRemark(sort: { fields:[frontmatter___date], order: DESC}){
    totalCount
    edges {
      node {
        excerpt
        html
        id
        frontmatter {
          date
          description
          title
        }
      }
    }
  }
}
`