import React, { useState, useContext } from 'react'
import { AppContext } from '../components/UseContextWithReducer'

function AddPostElem() {
    const [postContent, setPostContent] = useState('');
	const [postImage, setPostImage] = useState('http://picsum.photos/100');
    
    const {state, dispatch} = useContext(AppContext)
    
    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target;
        const newPost = {
            imagePost: postImage,
            postText: postContent,
            date: new Date(),
            userId: state.currentUser,
            postId: Date.now(),
            likes: [],
            comments: []
        } 
        console.log(newPost);
        
        dispatch({
            type: 'ADD_NEW_POST', 
            newPost: newPost
        })
    }
    console.log(state.postData);
    // https://bit.ly/3qmKNub

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Write a Post <br/>
                <textarea 
                    name='post' 
                    id="postText"rows="5"
                    value={postContent}
					onChange={e => setPostContent(e.target.value)}
                    />
            </label>
            <label>
                Add pictures <br/>
                <input 
                    type='url' 
                    name='image'
                    value={postImage}
					onChange={e => setPostImage(e.target.value)}
                />
            </label> <br/>
            <hr/>
            <button>Post</button>
        </form>
    )
}

export default AddPostElem
