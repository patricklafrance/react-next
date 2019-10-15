export function toSearch(params) {
    const instance = new URLSearchParams();

    Object.keys(params).forEach(key => {
        instance.append(key, params[key]);
    });

    return instance.toString();
}
