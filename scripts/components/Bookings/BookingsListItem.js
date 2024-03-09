import { getBands, getVenues } from "../../database.js"

export const BookingsListItem = (bookingObject) => {
    let listItemHTML = `<li data-type="booking" id="${bookingObject.id}">`

    for (const band of getBands()) {
        if (bookingObject.bandId === band.id) {
            listItemHTML += `${band.name} is playing at `
            break
        }
    }

    for (const venue of getVenues()) {
        if (bookingObject.venueId === venue.id) {
            listItemHTML += `${venue.name} on ${bookingObject.date}`
            break
        }
    }

    listItemHTML += `</li>`
    return listItemHTML
}