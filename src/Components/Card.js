import React from 'react'
import '../Styles/Cards.css'


const Card = ({name, imgID, prof}) => {

        return(
            <div className ='tc bg-light-green grow pa2 ma3 bw2 shadow-5 w-20 tw'>
                <img src= {`https://robohash.org/${imgID}.png?set=set1&size=200x200`} alt='profile'/>
                <div>
                    <h2>{name}</h2>
                    <p>City: {prof}</p>
                </div>
            </div>
        )
    }

export default Card;