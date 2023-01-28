export const getDataFromBaseURIUtils = async <T>(url: string, num: number): Promise<T> => {
    if (url === "ipfs://bafybeihpjhkeuiq3k6nqa3fkgeigeri7iebtrsuyuey5y6vy36n345xmbi/") {
        const response = await fetch("https://gateway.ipfs.io/ipfs/" + url.slice(7)  + num);
        return await response.json();
    } else {
        const response = await fetch("https://gateway.ipfs.io/ipfs/" + url.slice(7) + num + ".json");
        return await response.json();
    }
}