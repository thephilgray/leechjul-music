import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import {
  // FacebookWithCircle,
  InstagramWithCircle,
  TwitterWithCircle,
  YoutubeWithCircle,
  SpotifyWithCircle,
  // Soundcloud,
} from "@styled-icons/entypo-social"


const StyledLink = styled(Link)`
& + & {
  margin-left: 1rem;
}
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#DCE4F2`,
      // marginBottom: `1.45rem`,
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
          href="https://distrokid.com/hyperfollow/leechjul/why-cant-i-be-the-one"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src="https://pg-image-host.s3.amazonaws.com/leechjul/siteheader.png" alt="New Single Out August 6" />
        </Link>
      </h1>
      <div style={{ maxWidth: "600", display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <StyledLink href="https://instagram.com/leechjulmusic/" target="_blank">
          <InstagramWithCircle size="48" fill="#0E5FCF" title="Instagram"></InstagramWithCircle>
        </StyledLink>
        {/* <FacebookWithCircle size="48" fill="#0E5FCF" title="Facebook"></FacebookWithCircle> */}
        <StyledLink href="https://twitter.com/leechjulmusic" target="_blank">
          <TwitterWithCircle size="48" fill="#0E5FCF" title="Twitter"></TwitterWithCircle>
        </StyledLink>
        <StyledLink href="https://www.youtube.com/channel/UCzsdTLEJwLLPF1KU0gmjURQ" target="_blank">
          <YoutubeWithCircle size="48" fill="#0E5FCF" title="YouTube"></YoutubeWithCircle>
        </StyledLink>
        <StyledLink href="https://open.spotify.com/artist/5zsf66c4bHsiKuqGMATZSS?si=qdovnIBUR5CmOjtGf033Lg&dl_branch=1" target="_blank">
          <SpotifyWithCircle size="48" fill="#0E5FCF" title="Spotify"></SpotifyWithCircle>
        </StyledLink>
        {/* <Soundcloud size="48" fill="#0E5FCF" title="SoundCloud"></Soundcloud> */}
      </div>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
