import { getBookings, getVenues } from "../../database.js"

document.addEventListener("click", (clickEvent) => {

    if (clickEvent.target.dataset.type === "band") {
    
        let venuesList = ``

        for (const booking of getBookings()) {
            if(booking.bandId === parseInt(clickEvent.target.id)) {
                for (const venue of getVenues()) {
                    if(booking.venueId === venue.id) {
                        venuesList += `${venue.name}\n`
                    }
                }
            }
        }
        window.alert(venuesList)
    }
})