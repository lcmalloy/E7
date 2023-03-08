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
    const calculateCurrentGearScore = () => {
      let currentStat = 0;
      currentStat += (+props.gearScore.flatAtk / 10);
      currentStat += (+props.gearScore.flatDef / 6);
      currentStat += (+props.gearScore.flatHp / 50);
      currentStat += +props.gearScore.atkPercent;
      currentStat += +props.gearScore.defPercent;
      currentStat += +props.gearScore.hpPercent;
      currentStat += +props.gearScore.effectiveness;
      currentStat += +props.gearScore.effectResist;
      currentStat += (+props.gearScore.critChance * 1.5);
      currentStat += (+props.gearScore.critDamage * 1.1);
      currentStat += (+props.gearScore.speed * 1.9);
      switch(props.gear.level) {
        case 0:
          return (currentStat/32) * 100;
        case 3:
          return (currentStat/40) * 100;
        case 6:
          return (currentStat/48) * 100;
        case 9:
          return (currentStat/56) * 100;
        case 12:
          return (currentStat/64) * 100;
        case 15:
          return (currentStat/72) * 100;
        default:
          console.log('error occurred, please select item level');
      }
    };
    const gearScore = calculateCurrentGearScore();
    if (gearScore > 100) {
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



