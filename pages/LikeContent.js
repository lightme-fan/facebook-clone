import React from 'react'

function LikeContent({likeId, userId, onClick}) {
    return (
        <div className='likes'>
            <span>{likeId} 👍</span><br/>
            <button onClick={onClick} value={userId}>Like</button>
        </div>
    )
}

export default LikeContent
