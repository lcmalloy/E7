import React, { useState } from 'react'
import GearScoreStatus from '../GearScoreStatus/GearScoreStatus'
import HpBar from '../HpBar/HpBar'
import './Calculator.scss'

const stats = [ 'flatAtk', 'flatHp', 'flatDef', 'atkPercent', 'defPercent', 'hpPercent', 'critChance', 'critDamage', 'effectiveness', 'effectResist', 'speed']

/*
min - max level scores at different levels
0: 13.91 - 32
3: 16.85 - 40
6: 19.79 - 48
9: 22.73 - 56
12: 25.67 - 64
15: 28.61 - 72
*/

const Calculator = (props) => {
  const [score, setScore] = useState(0)
  const [equipmentStat, setEquipmentStat] = useState({
    flatAtk: 0,
    flatHp: 0,
    flatDef: 0,
    atkPercent: 0,
    defPercent: 0,
    hpPercent: 0,
    critChance: 0,
    critDamage: 0,
    effectiveness: 0,
    effectResist: 0,
    speed: 0,
  })

  const resetStatValues = (e) => {
    e.preventDefault();
    setEquipmentStat(
      {
        flatAtk: 0,
        flatHp: 0,
        flatDef: 0,
        atkPercent: 0,
        defPercent: 0,
        hpPercent: 0,
        critChance: 0,
        critDamage: 0,
        effectiveness: 0,
        effectResist: 0,
        speed: 0,
      }
    )
    setScore(0);
  }

  const generateGearScore = (e) => {
    e.preventDefault();
    const calculateCurrentGearScore = () => {
      let currentStat = 0;

      currentStat += (+equipmentStat.flatAtk / 10);
      currentStat += (+equipmentStat.flatDef / 6);
      currentStat += (+equipmentStat.flatHp / 50);
      currentStat += +equipmentStat.atkPercent;
      currentStat += +equipmentStat.defPercent;
      currentStat += +equipmentStat.hpPercent;
      currentStat += +equipmentStat.effectiveness;
      currentStat += +equipmentStat.effectResist;
      currentStat += (+equipmentStat.critChance * 1.5);
      currentStat += (+equipmentStat.critDamage * 1.1);
      currentStat += (+equipmentStat.speed * 1.9);

      //((current - min) / (max - min)) * 100
      switch(props.gear.level) {
        case 0:
          return ((currentStat - 13.91)/(32 - 13.91)) * 100;
        case 3:
          return ((currentStat - 16.85)/(40 - 16.85)) * 100;
        case 6:
          return ((currentStat - 19.79)/(48 - 19.79)) * 100;
        case 9:
          return ((currentStat - 22.73)/(56 - 22.73)) * 100;
        case 12:
          return ((currentStat - 25.67)/(64 - 25.67)) * 100;
        case 15:
          return ((currentStat - 28.61)/(72 - 28.61)) * 100;
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
  }

  const statInput = stats.map((stat) => (
    <div className={`stat-input-${stat}`} key={stat}>
      <label htmlFor={`calc-${stat}`}>{stat}</label>
      <input
        type="number"
        id={`calc-${stat}`}
        value={equipmentStat[`${stat}`]}
        onChange={e => {
          setEquipmentStat({
            ...equipmentStat,
            [stat]: e.target.value
          })
        }}
      />
    </div>
  ))

  return (
    <div className="calc-container-main">
      <h3>Gear Quality</h3>
      <HpBar  score={score}/>
      <h3>Calculator</h3>
      <div className="calc-stats-context-container">
        <div className="calc-main-stat">
          <form className="calc-stats" id="calc-form">
            {statInput}
            <button type="submit" onClick={(e) => generateGearScore(e)}>Submit</button>
            <button type="button" onClick={(e) => resetStatValues(e)}>Reset</button>
          </form>
        </div>
        <div className="calc-main-context">
          <div className="calc-context">
            <GearScoreStatus score={score} level={props.gear.level}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator