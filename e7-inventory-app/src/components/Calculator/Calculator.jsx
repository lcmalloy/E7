import React, { useState } from 'react'
import HpBar from '../HpBar/HpBar'
import './Calculator.scss'

const stats = [ 'flatAtk', 'flatHp', 'flatDef', 'atkPercent', 'defPercent', 'hpPercent', 'critChance', 'critDamage', 'speed']

const Calculator = () => {
  const [equipmentStat, setEquipmentStat] = useState({
    flatAtk: 0,
    flatHp: 0,
    flatDef: 0,
    atkPercent: 0,
    defPercent: 0,
    hpPercent: 0,
    critChance: 0,
    critDamage: 0,
    speed: 0,
  })
  const [level, setLevel] = useState(0)

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
        speed: 0,
      }
    )
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
      <HpBar gearScore={equipmentStat} />
      <h3>Calculator</h3>
      <div className="calc-stats-context-container">
        <div className="calc-main-stat">
          <form className="calc-stats" id="calc-form">
            {statInput}
            <button disabled>Submit</button>
            <button type="button" onClick={(e) => resetStatValues(e)}>Reset</button>
          </form>
        </div>
        <div className="calc-main-context">
          <div className="calc-context">
            <p>
              This is context
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator