import React, { useState, createContext, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import DisplayPost from './DisplayPost'
import Header from './Header'
import UseContextWithReducer from './UseContextWithReducer'

function App() {
    
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    Post
                    <DisplayPost/>
                </Route>
                <Route path="/addPost">Add a post</Route>
            </Switch>   
        </>
    )
}

export default App
