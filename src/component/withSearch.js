import React from "react";

const withSearch = (WrappedComponent) => {

    class WithSearch extends React.Component{

        constructor(props) {
            super(props)
        
            this.state = {
                searchTerm: ''
            }
        }
        
        handleSearch = (event) => {    
            this.setState({ searchTerm: event.target.value }, 
            ()=> {
                console.log(`SearchTerm: ${this.state.searchTerm}`);
            })
        }
        
        render(){
            const { searchTerm } = this.state;
            return(
                <div>
                    <div>
                        <input type="text" onChange={this.handleSearch} value={searchTerm}/>
                    </div>
                    <div>
                        <WrappedComponent searchTerm={searchTerm} {...this.props}>
                        </WrappedComponent>
                    </div>
                </div>
            )
        }
    }

    return WithSearch;
}

export default withSearch