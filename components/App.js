import React, { useState, createContext, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPostElem from '../pages/AddPostElem'
import AddPost from './AddPost'
import DisplayPost from './DisplayPost'
import Header from './Header'

function App() {
    
    return (
        <article>
            <Header/>
            <div className='container'>
                <Switch>
                    <Route exact path="/">
                        <DisplayPost/>
                        {/* <Comment /> */}
                    </Route>
                    <Route path="/addPost">
                        <AddPost>
                            <AddPostElem/>
                        </AddPost>
                    </Route>
                </Switch>
            </div>   
        </article>
    )
}

export default App
