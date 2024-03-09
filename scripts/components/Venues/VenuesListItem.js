export const VenuesListItem = (venueObject) => {
    return `<li data-type="venue" id="${venueObject.id}">${venueObject.name}</li>`
}