/* 
<section class="container__bands--main">
    <header class="header__bands"></header>
    <div class="container__bands">
        <li class="list__bands"></li>
    </div>
</section>
 */

import { BandsListItem } from "./BandsListItem.js"

export const BandsBlockHTML = (bands) => {
    let blockHTML = `
    <section class="container__bands--main">
        <header class="header__bands">Bands</header>
        <div class="container__bands--list">`

    for (const band of bands) {
        blockHTML += `${BandsListItem(band)}`
    }

    blockHTML += `</div></section>`
    return blockHTML
}