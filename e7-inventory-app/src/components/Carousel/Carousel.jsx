import React from 'react'

import boots from "../../assets/boots.svg"
import armor from "../../assets/armor.svg"
import earring from "../../assets/earring.svg"

import AliceCarousel from 'react-alice-carousel'
import './Carousel.scss'

  const itemsImg = [ boots, armor, earring, boots, armor, earring, boots, armor, earring, boots, armor, earring, boots, armor, earring, boots, armor, earring ];

const items = itemsImg.map((item, index) => {
    return <div className="item">
      <img src={item} alt=""/>
    </div>;
});

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="container carousel__container">
        <div className="carousel__inventory">
          <h3>Find Saved Similar Items</h3>
          <AliceCarousel
            autoHeight
            autoWidth
            items={items}
          />
        </div>
      </div>
    </section>
  )
}

export default Carousel