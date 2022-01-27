import React from "react";

const withCounter = (WrappedComponent, increamentValue, haha) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 hasError: false,
                 count: 0
            }
        }
        
        handleIncreamentCount = () => {
            this.setState((prevState) => ({
                count: prevState.count + increamentValue
            }))
        }

        render() {
            const { count } = this.state;
            return(
                <WrappedComponent 
                    count={count}
                    handleIncreamentCount={this.handleIncreamentCount}
                    {...this.props}>
                </WrappedComponent>
            )
        }
    }

    return WithCounter;
}

export default withCounter