import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="range-slider"
export default class extends Controller {
	
	static targets = ["slider"]

  connect() {
		this.sliderTarget.innerHTML = "Put a slider here!"
  }
}
