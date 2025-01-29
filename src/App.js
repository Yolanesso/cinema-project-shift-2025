import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

import './scss/main.scss';

export default function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content__wrapper'>
				<h1 className='title'>Афиша</h1>
				<main className='main'>
					<div className='main__container'>
						<MovieList />
					</div>
				</main>
			</div>
		</div>
	);
}
