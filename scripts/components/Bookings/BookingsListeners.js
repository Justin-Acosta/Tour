import { getBands, getBookings } from "../../database.js";

document.addEventListener("click", (clickEvent) => {

    if (clickEvent.target.dataset.type === "booking") {

        for (const booking of getBookings()) {
            if (parseInt(clickEvent.target.id) === booking.id) {
                for (const band of getBands()) {
                    if (booking.bandId === band.id) {
                        window.alert(
                            `
                            ${band.name}
                            ${band.genera}
                            Formed in ${band.yearFormed}
                            ${band.memberCount} band members
                            `
                        )
                        return
                    }
                }
            }
        }
    }
})

