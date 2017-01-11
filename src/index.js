import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount-createClass'

window.React = React

render(
	<SkiDayCount total="lots"/>,
	document.getElementById('react-container')
)
