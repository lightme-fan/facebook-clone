import React, { createContext, useContext, useState, useEffect, useReducer, Fragment } from 'react'
import Comments from '../pages/Comments';
import AddComment from './AddComment'
import LikeContent from '../pages/LikeContent';
import PostTemplate from '../pages/PostTemplate';
import {AppContext} from './UseContextWithReducer'
import PostElement from '../pages/PostElement';

function DisplayPost({children}) {
    const { postData, userData, state, dispatch } = useContext(AppContext)
    
    return (
        <>
            {state.postData.map(post => {
                const date = new Date(post.date)
                const convertedDate = date.toLocaleDateString()

                    return (
                    <PostTemplate key={post.postId}>
                        <PostElement {...post} converted={convertedDate}/>
                        {post.likes.map(like => <LikeContent key={like.userId} {...like}/>)}
                        
                        {post.comments.map(comment => {
                            const date = new Date(comment.date)
                            const convertedDate = date.toLocaleDateString()
                            return <Comments photoProfil={post.photoProfil} key={comment.id} {...comment} date={convertedDate}/>
                        })}
                        
                        <AddComment/>
                    </PostTemplate>
                    )
            })}
        </>
    )
}


export default DisplayPost
