import { fetchAndParse } from "./utils";

export function getUsers() {
    return fetchAndParse("https://fakestoreapi.com/users");
}