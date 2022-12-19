import { Controller } from "@hotwired/stimulus"

import noUiSlider from 'nouislider'
import wNumb from 'wnumb'

// Connects to data-controller="range-slider"
export default class extends Controller {
	
	static targets = ["slider"]

  connect() {
		this.slider = noUiSlider.create(this.sliderTarget, {
			range: {
				min: 0,
				max: 10
			},
			start: [2, 8],
			step: 1,
			connect: [false, true, false],
			tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})]
		})
  }
	
	disconnect() {
		this.slider.destroy()
	}
}
