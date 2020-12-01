import React, { createContext, useReducer, useState } from 'react'
import posts from '../posts.json'
import username from '../username.json'

const AppContext = createContext()

const initialValue = {
    postData: [...posts],
    userData: [...username],
    currentUser: '1'
}

const appReducer = (state, action) => {
  const { postData, userData, currentUser } = state

  switch (action.type) {
    case "ADD_NEW_POST": {
      return {...state, postData: [...postData, action.newPost]} 
    }
    
    case "ADD_COMMENT": {
      const newPosts = postData.map(post => {
        if (post.postId !== action.postId) {
          console.log(post.comments);
          return {
            ...post,
            comments: [...post.comments, action.newComments],
          };
        }
        return post;
      });
      return {
        ...state,
        postData: newPosts,
      }
    }

    case "LIKES": {
      const newPosts = postData.map(post => {
        console.log(action.likeId)
          return {
            ...post,
            likes: post.likes.map(like => like.totalLike++)
          }
      });
      return {
        ...state,
        postData: newPosts,
      }
    }

    default: {
      return state
    }
  }
}

function UseContextWithReducer({children}) {
    const [state, dispatch] = useReducer(appReducer, initialValue)
    const { postData, userData} = state

    return (
        <AppContext.Provider value={{postData, userData, state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
    
}
  
export { UseContextWithReducer, AppContext }
