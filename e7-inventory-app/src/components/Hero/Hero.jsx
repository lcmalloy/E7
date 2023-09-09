import React from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <section id="about">
      <h5>Important Information</h5>
      <h2>How to calculate gear score</h2>
      <div className="container hero__container">
        <div className="content__instructions">
          <p>Welcome to the Epic 7 Gear Management Web Application</p>
          <br />
          <p>Epic 7 is a mobile Real Time Arena Strategy game where players collect gear, level up characters, and fight other players</p>
          <br />
          <p>One of the challenging aspects of the game, especially as a newer player is deciding which gear are worth leveling with the limited materials provided</p>
          <br />
          <p>I developed this tool to help players organize their inventory, and help newer players decide on which gear are worth leveling</p>
          <br />
          <p>If you have any questions regarding the app or if you would like to chat, Feel free to drop by my discord:[discord link] </p>
        </div>
        <div className="content__account">
          <p>To calculate gear score for your item, you need to do the following:</p>
          <br />
          <li className="sm-hidden">Select the type of gear you are grading. Options are: Weapon, Helmet, Armor plate, Necklace, Ring, Boots</li>
          <br />
          <li>Select the current level of the item. If your current level doesnt match any of the ones listed, select the lower value closest to your item level.</li>
          <br />
          <li>Input your item's selected gear values in the corresponding text fields</li>
          <br />
          <li>Select the submit button and the calculator will calculate the gear score, and display additional information about the item</li>
          <br />
          <li>If you make a mistake, or if you would like to calculate a different piece of gear, select the reset button to reset all values</li>
        </div>
      </div>
    </section>
  )
}

export default Hero