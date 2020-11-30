import React, { useContext } from 'react'
import { PostContext } from './DisplayPost'

function Comment() {
    const { feeds } = useContext(PostContext)
    console.log(feeds);

    return (
        <div>
            Comment        
        </div>
    )
}

export default Comment
