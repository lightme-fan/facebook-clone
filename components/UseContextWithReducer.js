import React, { createContext, useReducer } from 'react'
import posts from '../posts.json'

const AppContext = createContext()

function appReducer(state, action) {
    switch (action.type) {
        case 'DISPLAY_POSTS':{ 
            return posts 
        }
        default:
            break;
    }
    return state
}

function UseContextWithReducer({children}) {
    const [allPosts, dispatch] = useReducer(appReducer, posts)

    const actions = {
        authStateChanged: (user) => {
          if (user) {
            dispatch({ type: 'DISPLAY_POSTS', payload: posts });
          } 
        },
      };

    return (
        <AppContext.Provider
            value={{
                allPosts,
                actions,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {UseContextWithReducer, AppContext}
