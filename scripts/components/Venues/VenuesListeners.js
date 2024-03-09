import { getBands, getBookings } from "../../database.js";

document.addEventListener("click", (clickEvent) => {

    if (clickEvent.target.dataset.type === "venue") {
    
        let bandsList = ``

        for (const booking of getBookings()) {
            if(booking.venueId === parseInt(clickEvent.target.id)) {
                for (const band of getBands()) {
                    if(booking.bandId === band.id) {
                        bandsList += `${band.name}\n`
                    }
                }
            }
        }
        window.alert(bandsList)
    }
})