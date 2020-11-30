import React, { useContext } from 'react'
import { PostContext } from '../components/displayPost'

function useDate() {
    const { feeds } = useContext(PostContext)
    
    const convertDate = feeds.find(post => post.id)
    console.log(convertDate);

    return 
}

export default useDate
