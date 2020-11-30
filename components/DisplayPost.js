import React, { createContext, useContext, useState, useEffect, useReducer } from 'react'
import {AppContext} from './UseContextWithReducer'

function DisplayPost({children}) {
    const { allPosts, actions } = useContext(AppContext)
    console.log(allPosts);
    
    return (
        <>
            {allPosts.map(post => {
                const dateNum = Number(post.date)
                
            })}
        </>
    )
}

export default DisplayPost
