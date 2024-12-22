import { EventDetailsModel } from "./EventDetails"

export type CategoryModel = {
    name: string,
    categoryId: string
}

export type CreateCategoryModel = {
    name :string,
}

export type CategoryModelWithEvent = {
    name: string,
    categoryId: string,
    events: EventDetailsModel[]
}