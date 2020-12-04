import React, { useContext, createContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../Context';

const PostStyles = styled.div`
	.main-picture {
		width: 100%;
	}
`;

const PostContext = createContext();

function Post({ post, children }) {
	const { state } = useContext(GlobalContext);
	const { users, currentUser } = state;
	const currentUserObj = users.find(user => user.userId === currentUser);
	return (
		<PostContext.Provider value={{ post, currentUserObj }}>
			<PostStyles>{children}</PostStyles>
		</PostContext.Provider>
	);
}

export { PostContext, Post };
