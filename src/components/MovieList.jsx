import React from 'react';
import beSalvadorane from '../images/card/be_salvadoran.svg';
import dog from '../images/card/dog.svg';
import weekendWithDad from '../images/card/weekend_with_dad.svg';
import emptyStar from '../images/rating/empty-star.svg';
import fillStar from '../images/rating/fill-star.svg';

const movies = [
	{
		id: 1,
		title: 'Уикенд с батей',
		rating: 6.6,
		ageRating: 16,
		image: weekendWithDad,
	},
	{
		id: 2,
		title: 'Пёс',
		rating: 9.2,
		ageRating: 12,
		image: dog,
	},
	{
		id: 3,
		title: 'Быть Сальвадором',
		rating: 7.5,
		ageRating: 18,
		image: beSalvadorane,
	},
];

function Card({ movie }) {
	const renderStars = rating => {
		const stars = [];
		const fullStars = Math.round(rating / 2);
		const emptyStars = 5 - fullStars;

		for (let i = 0; i < fullStars; i++) {
			stars.push(<img key={i} src={fillStar} alt='filled star' className='card__rating' />);
		}

		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<img key={fullStars + i} src={emptyStar} alt='empty star' className='card__rating' />,
			);
		}

		return stars;
	};

	return (
		<div className='card'>
			<div className='card__content'>
				<img src={movie.image} alt={movie.title} className='card__img' />
				<div className='card__content__inner'>
					<h1 className='card__title'>
						{movie.title} ({movie.ageRating}+)
					</h1>{' '}
					<p className='card__type'>Фильм</p>
					<div className='card__rating__container'>{renderStars(movie.rating)}</div>
					<p className='card__rating__platform'>Kinopoisk - {movie.rating}</p>
					<button className='card__btn-info'>Подробнее</button>
				</div>
			</div>
		</div>
	);
}

export default function MovieList() {
	return (
		<div className='movie-list'>
			{' '}
			{movies.map(movie => (
				<Card key={movie.id} movie={movie} />
			))}
		</div>
	);
}
