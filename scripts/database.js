const database = {
    bookings: [
        {id: 1, bandId: 1, venueId: 3, date: "3/12/2024"},
        {id: 2, bandId: 1, venueId: 4, date: "3/15/2024"},
        {id: 3, bandId: 2, venueId: 2, date: "3/12/2024"},
        {id: 4, bandId: 3, venueId: 5, date: "3/15/2024"},
        {id: 5, bandId: 3, venueId: 2, date: "3/12/2024"},
        {id: 6, bandId: 3, venueId: 3, date: "3/12/2024"},
        {id: 7, bandId: 3, venueId: 1, date: "3/12/2024"},
        {id: 8, bandId: 4, venueId: 1, date: "3/12/2024"},
        {id: 9, bandId: 4, venueId: 2, date: "3/12/2024"},
        {id: 10, bandId: 5, venueId: 6, date: "3/27/2024"},
        {id: 11, bandId: 6, venueId: 1, date: "3/25/2024"}
    ],
    venues: [
        {id: 1, name: "Sunset Hall", address: "1231 Fart Rd.", sqFootage: 50, maxCap: 45},
        {id: 2, name: "Moonlight Manor", address: "4552 Lane Ln.", sqFootage: 1000, maxCap: 1},
        {id: 3, name: "Starry Sky Garden", address: "8954 Apple Ct.", sqFootage: 300, maxCap: 100},
        {id: 4, name: "Green Meadows Pavilion", address: "2643 Red Rd.", sqFootage: 150, maxCap: 35},
        {id: 5, name: "Riverfront Retreat", address: "5984 Yam St.", sqFootage: 50, maxCap: 35},
        {id: 6, name: "Mountain View Lodge", address: "1947 Toot Ln.", sqFootage: 50, maxCap: 35}
    ],
    bands: [
        {id: 1, name: "Iron Titans", memberCount: 3, genera: "thrash metal", yearFormed: 1900},
        {id: 2, name: "Thunderforge", memberCount: 1, genera: "death metal", yearFormed: 1992},
        {id: 3, name: "Eternal Fury", memberCount: 5, genera: "power metal", yearFormed: 2023},
        {id: 4, name: "Steel Storm", memberCount: 3, genera: "black metal", yearFormed: 2003},
        {id: 5, name: "Shadowsteel", memberCount: 2, genera: "progressive metal", yearFormed: 2020},
        {id: 6, name: "Razor Edge", memberCount: 1, genera: "heavy metal", yearFormed: 2010}
    ]
}


export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}
