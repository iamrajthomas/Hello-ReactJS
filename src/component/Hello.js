import React from 'react'

export const Hello = () => {
    // return(
    //     <div>
    //         <h1 className="componentName">Hello From Regular JSX Component</h1>
    //     </div>
    // )

    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('h1', null, 'Hello Component - Hello from JSX Component Without using JSX'));

    // return React.createElement(
    //     'div',
    //     {id: 'hello', className: 'componentName'},
    //     React.createElement('h1', null, 'Hello Component - Hello from JSX Component Without using JSX'));

    return React.createElement(
        'div',
        null,
        React.createElement('h1', {id: 'hello', className: 'componentName'}, 'Hello Component'),
        React.createElement('h1', null, 'Hello from JSX Component Without using JSX'));
};

// export default Hello