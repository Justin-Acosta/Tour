import { BandsBlockHTML } from "./components/Bands/BandsBlock.js";
import { BookingsBlockHTML } from "./components/Bookings/BookingsBlock.js";
import { VenuesBlockHTML } from "./components/Venues/VenuesBlock.js";
import { getBands, getBookings, getVenues } from "./database.js";

import {} from "./components/Bookings/BookingsListeners.js"
import {} from "./components/Venues/VenuesListeners.js"
import {} from "./components/Bands/BandsListeners.js"

document.querySelector(".container__main").innerHTML = 
`
<div class="container__top">${BookingsBlockHTML(getBookings())}</div>
<div class="container__bottom">${VenuesBlockHTML(getVenues())}${BandsBlockHTML(getBands())}</div>
`