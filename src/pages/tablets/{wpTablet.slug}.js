import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import {
    header,
    headerInfo,
    headerPicture,
    tabletName,
    tabletDescription,
    tabletInfo,
    tabletRoles,
    fullName,
} from "../../page.module.css"

const TabletPage = ({
    data: {
        wpTablet: {
            product: tablet,
        },
    },
}) => {
    const image = getImage(tablet.productImage.localFile)
    return (
        <Layout pageTitle="Tablets Template">
            <div className={header}>
                <div className={headerInfo}>
                    {tablet.productName && (
                        <h3 className={tabletName}>{tablet.productName}</h3>
                    )}
                    <div className={tabletRoles}>
                        <span>
                        </span>
                    </div>
                    <h1 className={fullName}>
                    </h1>

                    <div className={tabletDescription}
                        dangerouslySetInnerHTML={{ __html: tablet.description }} />
                    <p>
                    <span className={tabletInfo}>Kleur:</span>{tablet.color}
                    </p>
                    <p>
                    <span className={tabletInfo}>Prijs:</span>{tablet.price}
                    </p>
                    <p>
                    <span className={tabletInfo}>Resolutie:</span>{tablet.resolution}
                    </p>
                    <p>
                    <span className={tabletInfo}>Schermgrote:</span>{tablet.screensize}
                    </p>
                    <p>
                    <span className={tabletInfo}>Systeem: </span>{tablet.softwareSystem}
                    </p>
                    <p>
                    <span className={tabletInfo}>Geheugen:</span>{tablet.internalMemory}
                    </p>
                </div>
                <GatsbyImage className={headerPicture}
                    image={image} alt={tablet.productImage.altText}
                />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        wpTablet(id: {eq: $id}) {
        product {
        color
        description
        internalMemory
        price
        resolution
        productName
        screensize
        softwareSystem
        productImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
        }
      }
    }
  }
`
export default TabletPage