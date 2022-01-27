import React from 'react'

function Hero({heroName}) {

    if(heroName === 'Joker'){
        throw new Error('SomeThing Went Wrong!!!!');
    }

    return (
        <div>
            <div className="componentName"><h1>Hero Component</h1></div>
            <div>
                HeroName: {heroName}
            </div>
        </div>
    )
}

export default Hero
