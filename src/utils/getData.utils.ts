import {getRandomNum} from "@/utils/random.utils";

export const getDataUtils = async <T>(url: string): Promise<T> => {
    if (url === "ipfs://bafybeiflxz54udq4jh4rh4fwawk7rislmkilkinqbwkk5lxkiy5lzpgyp4/") {
        const response = await fetch(url + getRandomNum(3) + ".json");
        return await response.json();
    } else {
        const response = await fetch(url + getRandomNum(3));
        return await response.json();
    }
}