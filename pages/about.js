import Layout from '../components/layout'
import Post from '../components/posts/Post'
import { attributes, html } from '../content/about.md'

const About = () => (
  <Layout>
    <Post 
      post={{
        attributes,
        html,
      }} 
      renderHeader={false}
    />
  </Layout>
)

export default About
