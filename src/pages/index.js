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
    <p>Leechjul is the alias for singer/songwriter Cheongah Gray and the name of her musical project with husband Phil Gray. Inspired by a range of shared influences including 60s/70s and contemporary indie folk and psychedelic, deep cuts of classic R&B and soul, French disco funk, K-pop, and Korean trot, the duo aims to craft a sound that is both emotionally intelligent and raw and with a feeling of looking back and reflecting while simultaneously giving in completely to the overwhelming urge to move forward.</p>
    <p>The Washington D.C.-based husband and wife duo met over 10 years ago in Portland, Oregon when Cheongah’s room at the time was double-rented to Phil, who had been travelling the country and performing as a singer/songwriter, deciding to winter in Portland. As he sat down and casually started playing guitar, Cheongah, a native of Namyangju, South Korea (in the Seoul metro area) and a university student nearing the end of a year of study abroad, was suddenly confronted with the indescribable feeling that she was looking at her soulmate, confirming the message she had read from a fortune cookie earlier that day.</p>
    <p>Most of Cheongah’s lyrics focus on that first meeting and the two years that followed as she poured her heart into building a lasting international connection from that chance encounter, in which their shared passion for exploring the world through music would often play a central role. After living in Korea together for a year and getting married there, the couple moved to the D.C. area where Phil struggled to find value in his music and balance with his other aspirations and Cheongah struggled to find her voice in her newly adopted country. For years, Phil continued to write songs and make recordings for no one. As he experimented, he occasionally featured Cheongah’s unique voice on his recordings. Spurred on by the isolation of the lockdown resulting from the pandemic, Phil encouraged her to try her hand at songwriting, both in English and in her native Korean. With Cheongah writing and working with Phil intimately on the compositions and arrangements, the couple recognized almost instantaneously that they had stumbled on something special and almost magical.</p>
    <h2>Releases</h2>
    <YouTubeEmbed youtubeId="cUOFIw6_gPs" title="hanmadi by leechjul"></YouTubeEmbed>

  </Layout>
)

export default IndexPage
