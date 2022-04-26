import React from 'react'
import classes from './Header.module.css'
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;500;600;700&family=Montserrat:ital,wght@0,300;0,500;1,200&display=swap" rel="stylesheet"></link>


export const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.info}>
				<div className="contacts">
					<ul className={classes.list}>
						<li className={classes.a1}><a className={classes.anchor} href="">sales@wtgspain.com</a></li>
						<li className={classes.a2}><a className={classes.anchor} href="">+34 965 020784</a></li>
						<li className={classes.a3}><a className={classes.anchor} href="">WhatsApp</a></li>
					</ul>

				</div>
				<div className={classes.signs}>

					<div className={classes.heart}></div>
					<div className={classes.flag}></div>


				</div>
			</div>

			<div className={classes.menu}>
				<div className={classes.container}>

					<div className={classes.logo}>
					</div>

					<div className={classes.rightSide}>
						<div className={classes.menuList}>
							<ul className={classes.links}>
								<li className={classes.select}><a className={classes.itemLink} href="">Cities</a></li>
								<li className={classes.select}><a className={classes.itemLink} href="">Properties</a></li>
								<li ><a className={classes.itemLink} href="">Blog</a></li>
								<li ><a className={classes.itemLink} href="">Video</a></li>
								<li ><a className={classes.itemLink} href="">Contacts</a></li>
							</ul>
						</div>
						<div className={classes.log}>
							<button className={classes.log__button}>Log in</button>
							<button className={classes.log__button}>Sign in</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
