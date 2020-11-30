import React, { useContext } from 'react'
import { AppContext } from './UseContextWithReducer'

function Comment() {

    const {allPosts, handleChange, handleSubmit} = useContext(AppContext)
    console.log(allPosts);

    return (
        <form className='add-comment' onSubmit={handleSubmit}>
            <label>Add a comment</label><br/>
            <div>
                <textarea name='commentText' id="story"rows="2" onChange={handleChange}/>
                <button>Comment</button>
            </div>
        </form>
    )
}

export default Comment
