import * as React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import YouTubeEmbed from "../components/youtubeEmbed"

const StyledSection = styled.section`padding-bottom: 1rem;`;

const IndexPage = () => (
  <Layout>
    <Seo title="Leechjul music" />
    {/* <StaticImage
      src="../images/Instagram5.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <StyledSection>
      <h2>About</h2>
      <p>Leechjul is the alias for Washington, DC-based singer/songwriter Cheongah Gray and the name of her musical project with husband and multi-instrumentalist Phil Gray. With original songs in Korean and English, and inspired by a range of shared influences including 60s/70s and contemporary indie folk and psychedelic, deep cuts of classic R&B and soul, French disco funk, K-pop, and Korean trot, the duo aims to craft a sound that is both emotionally intelligent and raw and with a feeling of looking back and reflecting while simultaneously giving in to the physical urge to move forward.</p>
    </StyledSection>
    <StyledSection>
      <h2>Latest</h2>
      <a class="twitter-timeline" data-height="600" href="https://twitter.com/leechjulmusic?ref_src=twsrc%5Etfw">Tweets by leechjulmusic</a>
    </StyledSection>
    <StyledSection>
      <h2>Releases</h2>
      <YouTubeEmbed youtubeId="IbnNk0n00no" title="Tunnel (터널) by leechjul"></YouTubeEmbed>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <iframe title="tunnel ep" style={{ margin: "1em auto", textAlign: "center", border: 0, width: "350px", height: "621px" }} src="https://bandcamp.com/EmbeddedPlayer/album=610546101/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/">
          <a href="https://leechjul.bandcamp.com/album/tunnel">Tunnel by Leechjul</a>
        </iframe>
      </div>
      <YouTubeEmbed youtubeId="ohhZrg3Rgwo" title="why can't I be the one by leechjul"></YouTubeEmbed>
      <YouTubeEmbed youtubeId="nJmJHFEFSnE" title="hanmadi by leechjul"></YouTubeEmbed>
    </StyledSection>
    <Helmet>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Helmet>
  </Layout>
)

export default IndexPage
