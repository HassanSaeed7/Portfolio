import Layout from "../components/Layout"
import aboutStyles from "../styles/About.module.css"
import { FaHtml5, FaCss3Alt, FaNode, FaSass, FaReact, FaWordpress } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from "react-icons/si"

const about = () => {

  const size = 90;
  return (
    <Layout>
      <h1>ABOUT ME</h1>


      <div className={aboutStyles.about}>
        <article className={aboutStyles.aboutArticle}>
          <p>
            Hello! Thank you for taking the time to explore my portfolio. I am
            Hassan and I am looking forward to meeting you! A little bit about
            me. I am from Los Angeles, California and enjoy cooking, lifting weights, and
            watching film. I graduated with a Bachelors Degree for Public Policy
            and Political Science from the University of California, Riverside.
            While I do not have a computer science background, I took an
            elective on the subject in my last year and enjoyed it so much, that
            I wanted to continue to learn more about programming in my free
            time.
          </p>
          <p>
            I am a web designer. I enjoy
            designing beautiful user interfaces for websites and web
            applications. I can spend hours just centering a div, I love it. I
            have tried CSS preprocessors like SCSS/SASS and and CSS frameworks
            like Bootstrap and Tailwind CSS.
          </p>
          <p>
            I am a front-end developer.
            I have experience with front-end web application development through
            personal projects and coding boot camps. Beyond HTML, CSS, and
            JavaScript, I am familiar with JQuery, NodeJS, and ReactJS.
          </p>
          <p>
            I am a wordpress developer.
            From site creation to search engine optimization, Wordpress sites
            can be great options for small businesses or independent creators
            who are looking to join the internet community. Wordpress provides a
            number of robust features and plugins that can get your site
            launched in minutes, complete with blog posts, a shop, customer
            portal, and a number of other features.
          </p>
          <div className={aboutStyles.icons}>
            <FaHtml5 size={size} color="orange"/>
            <FaCss3Alt size={size} color='blue'/>
            <FaSass size={size} color="pink"/>
            <SiJavascript size={size} color='gold' />
            <SiTypescript size={size} color='lightblue' />
            <FaNode size={size} color='green' />
            <FaReact size={size} color='cyan' />
            <FaWordpress size={size} />
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default about