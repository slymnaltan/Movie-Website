import React from 'react'
import '../style/about.css'

function About() {
  return (
    <div>
      <div className="about-page">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Discover what makes our platform special and how it can enhance your entertainment experience.</p>
        </header>

        <section className="about-platform">
          <h2>What is Our Platform?</h2>
          <p>Our platform is a state-of-the-art entertainment service designed to bring you the best in movies, series, and kids' content. We offer a wide range of options from various streaming giants such as Netflix, Disney+, and Amazon Prime, all in one convenient place. Whether you are a movie buff, a series enthusiast, or looking for quality content for kids, we have something for everyone.</p>
        </section>

        <section className="about-content">
          <h2>What Can You Find Here?</h2>
          <p>Our platform offers a diverse selection of content categories including:</p>
          <ul>
            <li><strong>Popular Movies:</strong> Discover the latest and greatest films, complete with detailed information and easy access to watch now.</li>
            <li><strong>Trending Series:</strong> Stay updated with the most popular series from top streaming services.</li>
            <li><strong>Kids Content:</strong> Safe and engaging content tailored for younger audiences, ensuring family-friendly viewing.</li>
          </ul>
          <p>Each category is designed to provide you with seamless navigation and easy access to the content you love.</p>
        </section>

        <section className="about-mission-vision">
          <h2>Our Mission & Vision</h2>
          <p><strong>Mission:</strong> Our mission is to revolutionize the way you experience entertainment by offering a user-friendly platform that aggregates top-quality content from various sources. We are committed to making your entertainment experience as enjoyable and hassle-free as possible.</p>
          <p><strong>Vision:</strong> We envision a future where entertainment is personalized, accessible, and tailored to individual preferences. Our goal is to continuously innovate and expand our offerings to meet the evolving needs of our global audience.</p>
        </section>
      </div>
    </div>
  )
}

export default About