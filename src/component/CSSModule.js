import React from 'react'

import '../css/appStyles.css'
import styles from '../css/appStyles.module.css'

import CSSChild from './CSSChild'

function CSSModule() {
    return (
        <div>
            <div className="componentName"><h1>CSSModule Component</h1></div>
            
            <h1 className='error'>Lets Try The Normal CSS</h1>
            <h1 className={styles.success}>Lets Try The CSS Module Approach</h1>

            <CSSChild></CSSChild>
        </div>
    )
}

export default CSSModule

// ReadME
// CSS Module feature is available in React Script version 2 and higher 
// Check React Script version in package.json File
// Create module with .module.css extension
// Import with named approch import.e. import styles from '../css/appStyles.module.css' 
// Use it as className={styles.success} 

// CSS Module are locally scoped so the CSS conflict wont happen unlike the normal CSS
