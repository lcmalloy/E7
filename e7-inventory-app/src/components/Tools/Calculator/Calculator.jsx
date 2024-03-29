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
  const [score, setScore] = useState(0);
  const [calcActive, setCalcActive] = useState(false);
  const [equipmentStat, setEquipmentStat] = useState({
    flatAtk: null,
    flatHp: null,
    flatDef: null,
    atkPercent: null,
    defPercent: null,
    hpPercent: null,
    critChance: null,
    critDamage: null,
    effectiveness: null,
    effectResist: null,
    speed: null,
  })

  const resetStatValues = (e) => {
    e.preventDefault();
    setEquipmentStat(
      {
        flatAtk: null,
        flatHp: null,
        flatDef: null,
        atkPercent: null,
        defPercent: null,
        hpPercent: null,
        critChance: null,
        critDamage: null,
        effectiveness: null,
        effectResist: null,
        speed: null,
      }
    )
    setScore(0);
    setCalcActive(false);
  }

  const generateGearScore = (e) => {
    e.preventDefault();
    const calculateCurrentGearScore = () => {
      let currentStat = 0;

      currentStat += equipmentStat.flatAtk ? (+equipmentStat.flatAtk / 10) : 0;
      currentStat += equipmentStat.flatDef ? (+equipmentStat.flatDef / 6) : 0;
      currentStat += equipmentStat.flatHp ? (+equipmentStat.flatHp / 50) : 0;
      currentStat += equipmentStat.atkPercent ? +equipmentStat.atkPercent : 0;
      currentStat += equipmentStat.defPercent ? +equipmentStat.defPercent : 0;
      currentStat += equipmentStat.hpPercent ? +equipmentStat.hpPercent : 0;
      currentStat += equipmentStat.effectiveness ? +equipmentStat.effectiveness : 0;
      currentStat += equipmentStat.effectResist ? +equipmentStat.effectResist : 0;
      currentStat += equipmentStat.critChance ? (+equipmentStat.critChance * 1.5) : 0;
      currentStat += equipmentStat.critDamage ? (+equipmentStat.critDamage * 1.1) : 0;
      currentStat += equipmentStat.speed ? (+equipmentStat.speed * 1.9) : 0;
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
    } else if (gearScore < 0) {
      setScore(0)
    } else {
      setScore(Math.floor(gearScore))
    }
    setCalcActive(true)
  }

  const statInput = stats.map((stat) => (
    <div className={`stat-input-${stat}`} key={stat}>
      <label htmlFor={`calc-${stat}`}>{stat}</label>
      <input
        type="number"
        id={`calc-${stat}`}
        value={equipmentStat[`${stat}`] ? equipmentStat[`${stat}`] : ''}
        placeholder="0"
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
    <div className="container calculator__container">
      <div className="calculator__hpBar">
        <h2>Gear Quality</h2>
        <HpBar  score={score} calcActive={calcActive}/>
      </div>
      <div className="calculator__main">
        <div className="calculator__form">
          <h2>Calculator</h2>
          <form className="calc-stats" id="calc-form">
            {statInput}
            <div className="calc__CTA">
              <button type="submit" onClick={(e) => generateGearScore(e)} className="btn">Submit</button>
              <button type="button" onClick={(e) => resetStatValues(e)} className="btn btn-primary">Reset</button>
            </div>
          </form>
        </div>
        <div className="calculator__context">
            <GearScoreStatus score={score} calcActive={calcActive} gear={props.gear}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator