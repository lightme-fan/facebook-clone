import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddPost from './AddPost';
import Feed from './Feed';
import ProfileOptions from './ProfileOptions';
import Menu from './Menu';
import styled from 'styled-components';

const ArticleStyle = styled.article`
	max-width: 400px;
	margin: auto;
	padding: 1rem;
	border: 1px solid;
	border-radius: 8px;
`; 

export default function App() {
	return (
		<ArticleStyle>
			<h1>Facebook Clone</h1>
			<Menu />
			<Switch>
				<Route path="/" exact>
					<Feed />
				</Route>
				<Route path="/add">
					<AddPost />
				</Route>
				<Route path="/options">
					<ProfileOptions />
				</Route>
			</Switch>
		</ArticleStyle>
	);
}
