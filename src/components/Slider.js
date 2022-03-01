import { useState, useEffect, useCallback } from 'react'
import Buttons from './Buttons'
import data from '../data'
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle
} from 'react-icons/io'

const Slider = () => {
	const [slides, setSlides] = useState(data.map(item => item.url))
	const [singleSlide, setSingleSlide] = useState(0)

	const handleClickPrev = () => {
		setSingleSlide(prev => {
			if (prev === 0) {
				return slides.length - 1
			}

			return prev - 1
		})
	}

	// wrapped in useCallback because it is dep in useEffect
	const handleClickNext = useCallback(() => {
		setSingleSlide(prev => {
			if (prev === slides.length - 1) {
				return 0
			}

			return prev + 1
		})
	}, [slides])

	useEffect(() => {
		const timer = setTimeout(() => {
			handleClickNext()
		}, 5000)

		return () => clearTimeout(timer)
	}, [singleSlide, handleClickNext])

	return (
		<div
			className='slider-container'
			style={{
				backgroundImage: `url(${slides[singleSlide]})`
			}}
		>
			<button className='btn-prev' onClick={handleClickPrev}>
				<IoIosArrowDropleftCircle />
			</button>
			<button className='btn-next' onClick={handleClickNext}>
				<IoIosArrowDroprightCircle />
			</button>

			<Buttons
				slides={slides}
				singleSlide={singleSlide}
				setSingleSlide={setSingleSlide}
			/>
		</div>
	)
}

export default Slider
