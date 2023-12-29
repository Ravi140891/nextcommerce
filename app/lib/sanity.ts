import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId:"1fv6ly18",
    dataset:"production",
    apiVersion:"2023-12-30",
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
    return builder.image(source)
}