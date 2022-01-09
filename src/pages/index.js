import * as React from "react"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import Tablets from '../components/tablets'
import {
  header,
  headerInfo,
  headerTitle,
  section,
  subtitle,
  tablets,
} from "../page.module.css"


const IndexPage = ({
  data: {
    wpPage: { homePage }
  }
}) => {

  const image = getImage(homePage.bannerFoto.localFile)
  return (
    <Layout pageTitle="Welcome to the Tablet Shop!">
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.title}</h1>
        </div >
        <div>
          <GatsbyImage
            image={image}
            alt={homePage.bannerFoto.localFile.altText}
          />
        </div>
      </div>
      <div className={section}>
        <h2 className={subtitle}>{homePage.featureProducts.title}</h2>
        <p>{homePage.featureProducts.description}</p>
        <div className={tablets}>
          {homePage.featureProducts.tablets.map(tablet => (
            <Tablets slug={`tablets/${tablet.slug}`} key={tablet.id} tablet={tablet} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePage {
      description
      title
      bannerFoto {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
          }
        }
      }
      featureProducts {
        tablets {
          ... on WpTablet {
            id
            product {
              productName
              productImage {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: false})
                  }
                }
              }
            }
            slug
          }
        }
        title
        description
      }
    }
  }
}
`

export default IndexPage
