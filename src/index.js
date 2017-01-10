import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={
		[
			{
				resort: "Squaw",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirk",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mammoth",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
	}/>,
	document.getElementById('react-container')
)