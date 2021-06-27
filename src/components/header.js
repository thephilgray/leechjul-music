import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  FacebookWithCircle,
  InstagramWithCircle,
  TwitterWithCircle,
  YoutubeWithCircle,
  SpotifyWithCircle,
  Soundcloud,
} from "@styled-icons/entypo-social"
import SiteHeaderImage from '../images/siteheader.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#DCE4F2`,
      // marginBottom: `1.45rem`,
      height: `100vh`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={SiteHeaderImage} alt="" />
        </Link>
      </h1>
      <div style={{ maxWidth: "600", display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <InstagramWithCircle size="48" fill="#0E5FCF" title="Instagram"></InstagramWithCircle>
        <FacebookWithCircle size="48" fill="#0E5FCF" title="Facebook"></FacebookWithCircle>
        <TwitterWithCircle size="48" fill="#0E5FCF" title="Twitter"></TwitterWithCircle>
        <YoutubeWithCircle size="48" fill="#0E5FCF" title="YouTube"></YoutubeWithCircle>
        <SpotifyWithCircle size="48" fill="#0E5FCF" title="Spotify"></SpotifyWithCircle>
        <Soundcloud size="48" fill="#0E5FCF" title="SoundCloud"></Soundcloud>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
