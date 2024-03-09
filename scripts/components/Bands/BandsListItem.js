export const BandsListItem = (bandObject) => {
    return `<li data-type="band" id="${bandObject.id}">${bandObject.name}</li>`
}