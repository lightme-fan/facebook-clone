import React, { useContext } from 'react'
import { AppContext } from './UseContextWithReducer'

function AddComment() {

    const {state, dispatch} = useContext(AppContext)

    const allPosts = state.postData.find(post=> {
        return post
    });

    function handleSubmitComment(e) {
        e.preventDefault();
        const form = e.target;
        const newComment = {
            textComment: form.commentText.value,
            id: "1606725399303",
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
                <textarea name='commentText' rows="2"/>
                <button>Comment</button>
            </div>
        </form>
    )
}

export default AddComment
