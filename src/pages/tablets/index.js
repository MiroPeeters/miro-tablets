import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Tablet from '../../components/tablets'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import {
    hero,
    section,
    subtitle,
    tablets,
    description,
  } from "../../page.module.css"

const TabletsPage = ({
    data: {
    allWpTablet: {edges : tabletsInfo},
    wpPage: { tabletPage },
    },
}) => {
    const image = getImage(tabletPage.bannerImage.localFile)
    return (
      <Layout pageTitle="Onze tablets">
          <GatsbyImage
          className={hero}
          image={image}
          alt={tabletPage.bannerImage.altText}
          />
          <div className={section}>
              <h2 className={subtitle}>
                  De tablets
              </h2>
              <div className={description}
              dangerouslySetInnerHTML={{
                __html: tabletPage.description,
              }}
              />
              <div className={tablets}>
              {tabletsInfo.map(({ node: tablet}) => (
                  <Tablet key={tablet.id} slug={tablet.slug} tablet={tablet} />
              ))}
              </div>
          </div>
      </Layout>
    )
  }
  export const query = graphql`
  query {
    wpPage(slug: {eq: "tablet"}) {
      tabletPage {
        description
        bannerImage {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED)
            }
          }
        }
      }
    }
    allWpTablet {
      edges {
        node {
          product {
            productName
            productImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100,placeholder: BLURRED, transformOptions: {grayscale: false})
                }
              }
            }
          }
          slug
          id
        }
      }
    }
  }
  `
  export default TabletsPage