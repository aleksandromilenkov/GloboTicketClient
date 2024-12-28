
export type EventListModel = {
    eventId: string,
    name: string,
    date: Date,
    imageUrl: string
}

export type EventCreateModel = {
    name: string,
    imageUrl?: string,
    price: number,
    date: Date,
    artist?: string,
    description?: string,
    categoryId: string,
}

export type EventEditModel = {
    eventId: string,
    name: string,
    imageUrl?: string,
    price: number,
    date: Date,
    artist?: string,
    description?: string,
    categoryId: string,
}