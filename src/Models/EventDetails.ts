import { CategoryModel } from "./Category"

export type EventDetailsModel = {
    eventId: string,
    name: string,
    price: number,
    artist: string,
    description?: string,
    categoryId: string,
    date: Date,
    imageUrl?: string,
    category?: CategoryModel
}