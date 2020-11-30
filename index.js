import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter as Router} from 'react-router-dom'
import { UseContextWithReducer } from './components/UseContextWithReducer'

ReactDOM.render(
    <UseContextWithReducer>
        <Router><App/></Router>
    </UseContextWithReducer>, 
    document.getElementById('root')
)
