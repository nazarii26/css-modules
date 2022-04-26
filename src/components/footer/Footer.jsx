import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
	return (
		<div className="container">
			<div className="main">
				<div className="logo"></div>
				<p className="descript"><b>the best</b> real estate in Spain</p>
				<div className="line"></div>
			</div>

			<div className="menu">
				<a href="" className="item">All cities</a>
				<a href="" className="item">Blog</a>
				<a href="" className="item">Video</a>
				<a href="" className="item">Contacts</a>
			</div>

			<div className="info">

				<div className="contacts">
					<h2 className="title">Contacts</h2>
					<p className="number">+34 (965) 020 - 784</p>
					<p className="mail">sales@wtgspain.com</p>
					<p className="geo">Centro Comercial «Playa Flamenca»
						C/ Niagara, 63 Local 60/PB, first floor,
						03189 - Orihuela Costa (Alicante), Spain</p>
					<div className="rate">
						<p className="grade">Reating 4.9/5:</p>
						<div className="stars"></div>
						<p className="votes">820 votes</p>
					</div>
				</div>

				<div className="type">
					<h2 className="title">Type</h2>
					<ul className="types">
						<li>Appartaments</li>
						<li>Penthousses</li>
						<li>Townhouses</li>
						<li>Commercial</li>
						<li>Bungalows</li>
						<li>Duplexes</li>
						<li>Villas</li>
					</ul>
				</div>

				<div className="web">
					<h2 className="title">Follow us:</h2>
					<div className="sites">
						<a href="">Facebook</a>
						<a href="">YouTube</a>
						<a href="">Linkedin</a>
						<a href="">Instagram</a>
					</div>
					<p className="inputText">Subscribe to new objects</p>
					<div className="reg">
						<input type="text" className="input" />
						<button className="subscribe">Subscribe</button>
					</div>
				</div>
			</div>

			<div className="footer">
				<p className={s.footerText}>The company "WTG Spain" specializes in the investment and sale of real estate in Spain, and the provision of legal and consulting services.
					All rights reserved. "WTG Spain" - The Best Real Estate in Spain. © Copyright 2007 - 2020.</p>
			</div>

		</div>
	)
}
