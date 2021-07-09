import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import YouTubeEmbed from "../components/youtubeEmbed"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <StaticImage
      src="../images/Instagram5.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <h2>About</h2>
    <p>Leechjul is the alias for Washington, DC-based singer/songwriter Cheongah Gray and the name of her musical project with husband and multi-instrumentalist Phil Gray. With original songs in Korean and English, and inspired by a range of shared influences including 60s/70s and contemporary indie folk and psychedelic, deep cuts of classic R&B and soul, French disco funk, K-pop, and Korean trot, the duo aims to craft a sound that is both emotionally intelligent and raw and with a feeling of looking back and reflecting while simultaneously giving in to the physical urge to move forward.</p>
    <h2>Releases</h2>
    <YouTubeEmbed youtubeId="https://www.youtube.com/watch?v=nJmJHFEFSnE&t=5s" title="hanmadi by leechjul"></YouTubeEmbed>

  </Layout>
)

export default IndexPage
