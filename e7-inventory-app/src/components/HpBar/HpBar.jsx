import React, { useState, useEffect } from 'react'
import './HpBar.scss'

/*
max level scores at different levels
0: 32
3: 40
6: 48
9: 56
12: 64
15: 72

*/
const HpBar = (props) => {
  const [score, setScore] = useState(0)


  useEffect(() => {
    let level = 0;
    const calculateCurrentGearScore = () => {
      let currentStat = 0;
      currentStat += +props.gearScore.atkPercent;
      currentStat += +props.gearScore.defPercent;
      currentStat += +props.gearScore.hpPercent;
      currentStat += (+props.gearScore.critChance * 1.5);
      currentStat += (+props.gearScore.critDamage * 1.1);
      currentStat += (+props.gearScore.speed * 2);
      switch(level) {
        case 0:
          return (currentStat/32) * 100;
        case 3:
          return (40 / currentStat) * 100;
        case 6:
          return (48 / currentStat) * 100;
        case 9:
          return (56 / currentStat) * 100;
        case 12:
          return (64 / currentStat) * 100;
        case 15:
          return (72 / currentStat) * 100;
        default:
          console.log('error occurred, please select item level');
      }
    };
    const gearScore = calculateCurrentGearScore();
    if (gearScore > 100) {
      console.log(gearScore);
      setScore(100)
    } else {
      setScore(gearScore)
    }
  }, [props])


  return (
      <div className="hp-bar" style={{ "--percent": score === 0 ? 100 : score}}>
      </div>
  )
}

export default HpBar



