import React, { useContext, useState } from 'react'
import { AppContext } from './UseContextWithReducer'

function AddComment() {
    const [ newComment, setComment ] = useState('')
    const {state, dispatch} = useContext(AppContext)

    const allPosts = state.postData.find(post=> {
        return post
    });

    console.log(allPosts.comments);

    function handleSubmitComment(e) {
        e.preventDefault();
        const form = e.target;
        const newComment = {
            textComment: newComment,
            commentId: "1606725399303",
            date: 1606779068327
        }
        dispatch({
            type: "ADD_COMMENT",
            newComments: newComment
       })

       form.reset()
    }

    return (
        <form className='add-comment' onSubmit={handleSubmitComment}>
            <label>Add a comment</label><br/>
            <div>
                <textarea 
                    name='commentText' 
                    rows="2"
                    value={newComment}
                    onChange={e => setComment(e.target.value)}
                />
                <button>Comment</button>
            </div>
        </form>
    )
}

export default AddComment
