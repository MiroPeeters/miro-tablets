import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  image,
  tabletInfo,
  tabletName,
} from "./tablets.module.css"

export const Tablets = ({ tablet, slug }) => {
  const profile = getImage(tablet.product.productImage.localFile)
  return (
    <Link
     className={wrapper}
     to={slug}>
      <GatsbyImage
        className={image}
        image={profile}
        alt={tablet.product.productImage.altText}
      />
      <div className={tabletInfo}>
        {tablet.product.productName && <p className={tabletName}>{tablet.product.productName}</p>}
        <p>
        </p>
      </div>
    </Link>
  )
}
export default Tablets;