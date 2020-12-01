import React from 'react'
import { PostContext } from '../components/displayPost'

function PostTemplate({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

export default PostTemplate
