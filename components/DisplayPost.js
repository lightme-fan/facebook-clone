import React, { createContext, useContext, useState, useEffect, useReducer, Fragment } from 'react'
import Comments from '../pages/CommentContent';
import AddComment from './AddComment'
import LikeContent from '../pages/LikeContent';
import PostTemplate from '../pages/PostTemplate';
import {AppContext} from './UseContextWithReducer'
import PostElement from '../pages/PostElement';

function DisplayPost({children}) {
    const { postData, userData, state, dispatch } = useContext(AppContext)
    
    return (
        <div>
            {children}
        </div>
    )
}


export default DisplayPost
