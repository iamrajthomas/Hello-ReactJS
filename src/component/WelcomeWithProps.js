import React from "react";

class WelcomeWithProps extends React.Component {

    // render(){
    //     return(
    //         <div>
    //             <h1>This is WelcomeWithProps From {this.props.name} A.K.A. {this.props.heroName}</h1>
    //             {this.props.children}
    //         </div>
    //     )
    // }

    render(){
        const { name, heroName, children } = this.props;
        return(
            <div>
                <div className="componentName"><h1>WelcomeWithProps Component</h1></div>

                <h1>This is WelcomeWithProps From {name} A.K.A. {heroName}</h1>
                {children}
            </div>
        )
    }

}

export default WelcomeWithProps;