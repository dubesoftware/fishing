import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sort-link"
export default class extends Controller {
  updateForm(event) {
		let searchParams = new URL(event.detail.url).searchParams
		
		// searchParams.get("sort")
  }
}
