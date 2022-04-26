import React from 'react'
import c from './Main.module.css'
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;500;600;700&family=Montserrat:ital,wght@0,300;0,500;1,200&display=swap" rel="stylesheet"></link>

export const Main = () => {
	return (
		<div className={c.container}>
			<p className={c.quote}>We are always in touch and will be happy to resolve any of your questions.</p>

			<div className={c.window}>
				<div className={c.map}></div>
				<div className={c.form}>
					<h2 className={c.title}>Contact us</h2>
					<input type="text" placeholder='Name' />
					<input type="number" placeholder='Number' />
					<input type="email" placeholder='E-mail' />
					<input className={c.message} type="text" placeholder='Message' />
					<button className={c.send}>Send</button>
					<p className={c.subscribtion}>Privacy policy</p>
				</div>

			</div>

			<div className={c.contacts}>
				<div className={c.blueLine1}></div>
				<div className={c.row1}>
					<div className={c.item1}>
						<p className={c.name}>Phone</p>
						<ul>
							<li className={c.phoneIcon}>+34 965 020784</li>
						</ul>
					</div>

					<div className={c.item2}>
						<p className={c.name}>Office in Spain</p>
						<p className={c.text}>Centro Comercial Playa Flamenca C / Niagara, <br />
							63 Local 60/PB, first floor, 03189 - Orihuela <br />
							Costa (Alicante), Spain</p>
					</div>

					<div className={c.item3}>
						<p className={c.name}>E-mail</p>
						<ul>
							<li className={c.mailIcon}>sales@wtgspain.com</li>
						</ul>
					</div>
				</div>

				<div className={c.blueLine2}></div>

				<div className={c.row2}>
					<p className={c.name}>We are online</p>
					<ul className={c.web}>
						<li className={c.wh}>WhatsApp</li>
						<li className={c.v}>Viber</li>
						<li className={c.m}>Messenger</li>
						<li className={c.t}>Telegram</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
