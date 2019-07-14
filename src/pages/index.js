import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world!</h1>
    <p>I'm working on my new website!</p>
    <p>Please, follow me on twitter <a href="https://twitter.com/diegofelix">@diegofelix</a> and github <a href="https://github.com/diegofelix">@diegofelix</a></p>

    <p>See you there!</p>
  </Layout>
)

export default IndexPage
