import React, { useState, createContext, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPostElem from '../pages/AddPostElem'
import PostElement from '../pages/PostElement'
import UserPost from '../pages/UserPost'
import AddPost from './AddPost'
import DisplayPost from './DisplayPost'
import Header from './Header'
import CommentContent from '../pages/CommentContent'
import AddComment from './AddComment'
import ProfileOptions from './ProfileOption'

function App() {
    
    return (
        <article>
            <Header/>
            <div className='container'>
                <Switch>
                    <Route exact path="/">
                        <DisplayPost>
                            <UserPost/>
                            <PostElement/>
                            <CommentContent/>
                            <AddComment/>
                        </DisplayPost>
                    </Route>
                    <Route path="/addPost">
                        <AddPost>
                            <AddPostElem/>
                        </AddPost>
                    </Route>
                    <Route path="/user">
                        <ProfileOptions/>
                    </Route>
                </Switch>
            </div>   
        </article>
    )
}

export default App
