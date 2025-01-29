import React from 'react';
import logo from '../images/header/logo.svg';
import profile from '../images/header/profile.svg';
import ticket from '../images/header/ticket.svg';

export default function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>
					<a href='/' className='header__logo-link'>
						<img src={logo} alt='' className='header__logo-img' />
					</a>
				</div>
				<nav className='nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<img src={profile} alt='' className='nav__link__img' />
							<a href='/' className='nav__link'>
								Профиль
							</a>
						</li>
						<li className='nav__item'>
							<img src={ticket} alt='' className='nav__link__img' />
							<a href='/' className='nav__link'>
								Билеты
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
