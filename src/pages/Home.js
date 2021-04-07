import React from "react"

const Home = () => {
  return (
    <div className = "homePage">
      <h1>Welcome to Steph's Lookbook!</h1>
      <div className = "aboutMe">
        <h2>About Me</h2>
        <p>Just a girl with a big love for fashion and an even bigger love for God 💕 <br />Height: 5’3 <br />
        Size: M <br />
        Instagram: @stephslookbook. <br />
        Like To Know It: /stephslookbook</p>
      </div>
      <div className = "supportMe">
        <h2>Support Me</h2>
        <div className = "likeToKnowIt">
          <h3>Like To Know It</h3>
          <p>Enter info about Like To Know It</p>
        </div>
        <div className = "Instagram">
          <h3>Instagram</h3>
          <p>Enter info about Instagram</p>
        </div>
      </div>
    </div>
  )
}

export default Home