import React from 'react'

const Buttons = ({ slides, setSingleSlide, singleSlide }) => {
	return (
		<div className='btn-container'>
			{slides.map((slide, i) => {
				return (
					<button
						key={i}
						className={`btn-sm ${singleSlide === i ? 'active' : ''}`}
						onClick={() => setSingleSlide(i)}
					></button>
				)
			})}
		</div>
	)
}

export default Buttons
