import React, { useReducer } from 'react'
import { AppContext } from '../components/UseContextWithReducer'

function LikeContent({totalLike, userId, onClick}) {
    const {state, dispatch} = useReducer(AppContext)
    console.log(dispatch);

    function handleLikeClick() {
        console.log("clicked");
        dispatch({type: 'LIKES'})
    }

    return (
        <div className='likes'>
            <span>{totalLike} 👍</span><br/>
            <button onClick={handleLikeClick} value={userId}>Like</button>
        </div>
    )
}

export default LikeContent
