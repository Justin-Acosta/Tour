/* 
<section class="container__bookings--main">
    <header class="header__bookings"></header>
    <div class="container__bookings--list">
        <li class="list__bookings"></li>
    </div>
</section>
 */

import { BookingsListItem } from "./BookingsListItem.js"


export const BookingsBlockHTML = (bookings) => {
    let blockHTML = `
    <section class="container__bookings--main">
        <header class="header__bookings">Bookings</header>
        <div class="container__bookings--list">`

    for (const booking of bookings) {
        blockHTML += BookingsListItem(booking)
    }

    blockHTML += `</div></section>`
    return blockHTML
}