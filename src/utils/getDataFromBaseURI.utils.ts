export const getDataFromBaseURIUtils = async <T>(url: string, num: number): Promise<T> => {
    if (url === "ipfs://bafybeiflxz54udq4jh4rh4fwawk7rislmkilkinqbwkk5lxkiy5lzpgyp4/") {
        const response = await fetch("https://gateway.ipfs.io/ipfs/" + url.slice(7) + num + ".json");
        return await response.json();
    } else if (url.slice(0,4) !== "ipfs") {
        const response = await fetch(url + num);
        return await response.json();
    } else {
        const response = await fetch("https://gateway.ipfs.io/ipfs/" + url.slice(7)  + num);
        return await response.json();
    }
}