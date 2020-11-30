import React, { createContext, useContext, useState, useEffect, useReducer, Fragment } from 'react'
import Comments from '../pages/Comments';
import Comment from './Comment'
import LikeContent from '../pages/LikeContent';
import PostTemplate from '../pages/PostTemplate';
import {AppContext} from './UseContextWithReducer'

function DisplayPost({children}) {
    const { allPosts, handleIncreament, userNameData, handleSubmit } = useContext(AppContext)
    const findUser = userNameData.map(user => user.userId)
    
    const findPost = allPosts.map(post => {
        if (Number(post.postId) === findUser.userId) {
            console.log(post.postId);
            console.log(findUser.userId);
        }
    })
    console.log(findPost);

    return (
        <>  
            {allPosts.map(post => {
                const date = new Date(post.date)
                const convertedDate = date.toLocaleString()
                
                const likes = post.likes.map(like => 
                    <LikeContent key={like.likeId} {...like}/>    
                )

                const comments = post.comments.map(comment => {
                    const date = new Date(comment.date)
                    console.log(date);
                    const convertedDate = date.toLocaleString()
                    console.log(convertedDate);
                    return <Comments key={comment.id} {...comment} date={convertedDate} photoProfil={post.photoProfil}/>    
                }
                )

                return (
                    <>
                        <PostTemplate key={post.postText} {...post} converted={convertedDate}/>
                        {likes}
                        {comments}
                    </>
                )


            })}  
            <Comment onClick={handleSubmit}/>
        </>
    )
}

export default DisplayPost
