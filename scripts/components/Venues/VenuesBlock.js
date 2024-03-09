/* 
<section class="container__venues--main">
    <header class="header__venues"></header>
    <div class="container__venues">
        <li class="list__venues"></li>
    </div>
</section>
 */

import { VenuesListItem } from "./VenuesListItem.js"

export const VenuesBlockHTML = (venues) => {
    let blockHTML = `
    <section class="container__venues--main">
        <header class="header__venues">Venues</header>
        <div class="container__venues--list">`

    for (const venue of venues) {
        blockHTML += `${VenuesListItem(venue)}`
    }

    blockHTML += `</div></section>`
    return blockHTML
}