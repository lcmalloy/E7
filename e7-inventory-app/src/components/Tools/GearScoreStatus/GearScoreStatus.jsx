import React from 'react'

import './GearScoreStatus.scss'

const GearScoreStatus = (props) => {

  return (
    <>
    <h2>Gear Context</h2>
    <div className="context__container">
      {!props.calcActive && (
        <>
          <p>Content will display information about gear score as well as potential for leveling.</p>

          <p> Please select current level index above </p>

          <p> Make sure to fill out content of calculator and click on the "submit" button</p>
        </>
          )}
      {props.calcActive && (
          <article className="context__info">
            <div className="context__equipment">
              <h3>Current Equipment:</h3>
              <div className="context__head">
                <div className="context__type">
                  <h4>Equipment Type:</h4>
                  <p>{props.gear.type}</p>
                </div>
                <div className="context__level">
                  <h4>Equipment Level:</h4>
                  <p>{props.gear.level}</p>
                </div>
              </div>
              <div className="context__stat">
                <h4>Current Stat</h4>
                <p>{props.score}</p>
                {props.score >= 90 && (
                  <>
                    <p className="quality-e"> Quality: Excellent </p>
                    <p> This piece of gear rolled relatively high and is worth leveling </p>
                  </>
                )}
                {(props.score >= 75 && props.score < 90) && (
                  <>
                    <p className="quality-g"> Quality: Great </p>
                    <p> This piece of gear currently consist of higher than average stats. You can continue leveling </p>
                  </>
                )}
                {(props.score >= 50 && props.score < 75) && (
                  <>
                    <p className="quality-a"> Quality: Average </p>
                    <p> This piece of gear has average stats and can be increased further </p>
                  </>
                )}
                {(props.score >= 30 && props.score < 50) && (
                  <>
                    <p className="quality-o"> Quality: Ok </p>
                    <p> This piece of gear rolled a few low stat % and started out with lower then average stats. You may want to consider scrapping this piece unless you are missing this piece to complete a set. This can be replaced at a later time, but if next rolls are low then this piece may have low value </p>
                  </>
                )}
                {(props.score < 30 && props.score > 0) && (
                  <>
                    <p className="quality-p"> Quality: Poor </p>
                    <p> This piece rolled too many low stats / started out with low stat rolls. This piece is not worth upgrading and should be used as fodder </p>
                  </>
                )}
                {props.score <= 0 && (
                  <>
                    <p className="quality-error"> Current Score is 0 or less</p>
                    <p>You need to either update the current item level, or correct the calculator input</p>
                  </>
                )}
              </div>
            </div>
          </article>
        )}
    </div>

    </>
  )
}

export default GearScoreStatus



/*
 { !props.calcActive && (
      <div className="context-container">
        <p>Content will display information about gear score as well as potential for leveling.</p>
        <p> Please select current level index above </p>

        <p> Make sure to fill out content of calculator and click on the "submit" button</p>
      </div>
    )}
    {(props.score >= 90 && props.calcActive) && (
      <div className="context-container">
        <section className="context-info">
          <div className="current-equipment">
            <h2 className="status-equip-h"> Current Equipment: </h2>
            <p> Equipment Type: {props.gear.type}</p>
            <p> Equipment Level: {props.gear.level}</p>
          </div>
          <p> Current Stat: {Math.floor(props.score)} </p>
          <p className="quality-e"> Quality: Excellent </p>
          <p> This piece of gear rolled relatively high and is worth leveling </p>
        </section>
      </div>
    )}
    {(props.score >= 75 && props.score < 90 && props.calcActive)&& (
      <div className="context-container">
        <section className="context-info">
          <div className="current-equipment">
            <h2 className="status-equip-h"> Current Equipment: </h2>
            <p> Equipment Type: {props.gear.type}</p>
            <p> Equipment Level: {props.gear.level}</p>
          </div>
          <p> Current Stat: {Math.floor(props.score)} </p>
          <p className="quality-g"> Quality: Great </p>
          <p> This piece of gear currently consist of higher than average stats. You can continue leveling </p>
        </section>
      </div>
    )}
    {(props.score >= 50 && props.score < 75 && props.calcActive) && (
      <div className="context-container">
        <section className="context-info">
          <div className="current-equipment">
            <h2 className="status-equip-h"> Current Equipment: </h2>
            <p> Equipment Type: {props.gear.type}</p>
            <p> Equipment Level: {props.gear.level}</p>
          </div>
          <p> Current Stat: {Math.floor(props.score)} </p>
          <p className="quality-a"> Quality: Average </p>
          <p> This piece of gear has average stats and can be increased further </p>
        </section>
      </div>
    )}
    {(props.score >= 30 && props.score < 50 && props.calcActive) && (
      <div className="context-container">
        <section className="context-info">
          <div className="current-equipment">
            <h2 className="status-equip-h"> Current Equipment: </h2>
            <p> Equipment Type: {props.gear.type}</p>
            <p> Equipment Level: {props.gear.level}</p>
          </div>
          <p> Current Stat: {Math.floor(props.score)} </p>
          <p className="quality-o"> Quality: Ok </p>
          <p> This piece of gear rolled a few low stat % and started out with lower then average stats. You may want to consider scrapping this piece unless you are missing this piece to complete a set. This can be replaced at a later time, but if next rolls are low then this piece may have low value </p>
        </section>
      </div>
    )}
    {(props.score < 30 && props.score >= 0 && props.calcActive) && (
      <div className="context-container">
        <section className="context-info">
          <div className="current-equipment">
            <h2 className="status-equip-h"> Current Equipment: </h2>
            <p> Equipment Type: {props.gear.type}</p>
            <p> Equipment Level: {props.gear.level}</p>
          </div>
          <p> Current Stat: {Math.floor(props.score)} </p>
          <p className="quality-p"> Quality: Poor </p>
          <p> This piece rolled too many low stats / started out with low stat rolls. This piece is not worth upgrading and should be used as fodder </p>
        </section>
      </div>
    )}
    {(props.score < 0 && props.calcActive) && (
      <div className="context-container">
        <p className="quality-error"> Current Score is less then 0.</p>
        <p>You need to either update the current item level, or correct the calculator input</p>
      </div>
      )
    }





*/