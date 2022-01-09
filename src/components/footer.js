import React from "react"
import {
    wrapper,
    title,
    socials,
    instagram,
    facebook,
  } from "./footer.module.css"

const Footer = ({ siteTitle }) => {
  return (
    <div className={wrapper}>
      <div>
        <p className={title} >{siteTitle}</p>
        <p>Tablet Shop</p>
        <p>All rights reserved.</p>
      </div>
      <div>
        <div className={socials}>
          Follow us:
          <a
            className={instagram}
            target="__blank"
            href=""
          />
          <a
            className={facebook}
            target="__blank"
            href=""
          />
        </div>
      </div>
    </div>
  )
}

export default Footer