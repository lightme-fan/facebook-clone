import React from 'react'
import { PostContext } from '../components/displayPost'

function PostTemplate({photoProfil, id, imagePost, username, converted, postText, likes, onClick}) {
    return (
        <>
            <div>
                <div>
                    <img className='photo-profile' src={photoProfil} alt={username}/>
                    <p>{username}</p>
                </div>
                <p>{converted}</p>
            </div>

            <p>{postText}</p>
            <img src={imagePost} alt={username}/>

            <div>
                <span>{likes} 👍</span><br/>
                <button onClick={onClick} value={id}>Like</button>
            </div>

            
        </>
    )
}

export default PostTemplate
