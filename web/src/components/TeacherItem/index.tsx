import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://media-exp1.licdn.com/dms/image/C4D03AQEqfUM3XerJoQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=yJUTx_RHsUKOp8qCOHRkKIAjOZ_vYr1y0_ydxINTPT0" alt="Vinicus" />
				<div>
					<strong>Vinicius Souza</strong>
					<span>Ajudante</span>
				</div>
			</header>

					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 100,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem;