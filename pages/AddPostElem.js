import React, { useContext } from 'react'
import { AppContext } from '../components/UseContextWithReducer'

function AddPostElem() {
    const {state, dispatch} = useContext(AppContext)
    
    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target;
        const newPost = {
            imagePost: form.image.value,
            postText: form.postText.value,
            date: new Date(),
            postId: Date.now(),
            likes: [
                {
                    totalLike: 0,
                    likeId: "1606725399303",
                    userId: Date.now()
                }
            ],
            comments: []
        } 
        
        dispatch({
            type: 'ADD_NEW_POST', 
            newPost: newPost
        })
    }
    
    // https://bit.ly/3qmKNub

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Write a Post <br/>
                <textarea name='post' id="postText"rows="5"/>
            </label>
            <label>
                Add pictures <br/>
                <input type='url' name='image'/>
            </label> <br/>
            <hr/>
            <button>Post</button>
        </form>
    )
}

export default AddPostElem
