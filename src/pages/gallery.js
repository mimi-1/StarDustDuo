import React from "react"
import Layout from "../components/layout/layout"
import Section from "../components/layout/section"
import Videos from "../components/gallery/videos"
import Pictures from "../components/gallery/pictures"
import palette from "../components/theme/palette"

const Gallery = props => {
  return (
    <Layout>
      <Section style={{ background: palette.black.main }}>
        <Videos />
      </Section>
      <Section style={{ background: palette.black.main }}>
        <Pictures />
      </Section>
    </Layout>
  )
}

export default Gallery
