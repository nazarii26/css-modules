import React from 'react'
import c from './Banner.module.css'

export const Banner = () => {
	return (

		<div className={c.banner}>
			<div className={c.image}>
				<div className={c.heading}>
					<h3 className={c.subtitle}>WTG SPAIN</h3>
					<p className={c.title}>Do you need <p className={c.blueText}> some help</p>?</p>
					<p className={c.parag}>Contact us right now and our team will do everything to help you.</p>
					<button className={c.button}>Contact us</button>
				</div>
			</div>

		</div>


	)
}
