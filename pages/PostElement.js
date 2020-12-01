import React, { useContext } from 'react'
import { AppContext } from '../components/UseContextWithReducer'

function PostElement() {
    const {state, dispatch} = useContext(AppContext)
    
    return (
        <div>
            {state.postData.map(post => 
                <div key={post.postId}>
                    <p>{post.convertedDate}</p>
                    <p>{post.postText}</p>
                    <img className='post-img' src={post.imagePost} alt={post.username}/>
                </div>
            )}
        </div>
    )
}

export default PostElement
