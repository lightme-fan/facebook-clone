import React, { createContext, useReducer, useState } from 'react'
import posts from '../posts.json'
import username from '../username.json'

const AppContext = createContext()
const UserContext = createContext() 

function appReducer(state, action) {
    switch (action.type) {
        case 'POSTS':{ 
            return posts 
        };
        case 'USERNAME':{ 
            return username 
        };
        case 'ADD_COMMENT': {
            const findState = state.find(item => item.id)
            return [
                ...state, 
                [...action.comments, action.comments]
            ]
        }
        case 'INCREMENT': {
            return {...state, likes: action.likes + 1 }
        }
        
        default:
            break;
    }
    return state
}

function UseContextWithReducer({children}) {
    const [allPosts, dispatch] = useReducer(appReducer, posts)
    const [userNameData, setUserName] = useState(username)

    const actions = {
        authStateChanged: (user) => {
            if (user) {
                dispatch({ type: 'POSTS', payload: posts },
                { type: 'USERNAME', payload: username });
            } 
        },
    };

    const foundUser = userNameData.find(user => user.id)

      function handleChange(e) {
          e.target.name = e.target.value
      }

      function handleSubmit (e) {
          e.preventDefault()
          const form = e.target;
          const textareaValue = form.commentText.value;
          const newComent = {
            id: Date.now(),
            textComment: textareaValue,
            date: Date.now()
          }
          dispatch({type: 'ADD_COMMENT', newComent});
          console.log(comment);
          form.reset(allPosts)
      }

      function handleIncreament() {
          console.log('Increament');
          dispatch('INCREMENT')
      }

    return (
        <AppContext.Provider
            value={{
                allPosts,
                userNameData,
                foundUser,
                actions,
                handleChange,
                handleSubmit,
                handleIncreament
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {UseContextWithReducer, AppContext}
