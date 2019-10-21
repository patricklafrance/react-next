import { isNil, pickBy } from "lodash";
import { isNotNullOrEmpty } from "../utils/types";
import { toSearch } from "./to-search";

const DEFAULT_TIMEOUT = 0;

const DEFAULT_OPTIONS = {
    headers: {
        "Content-Type": "application/json"
    },
    timeout: DEFAULT_TIMEOUT
};

export function httpGet({ url, data, options = {} }) {
    let requestUrl = url;

    if (!isNil(data)) {
        const urlParameters = toSearch(pickBy(data, x => !isNil(x)));

        if (isNotNullOrEmpty(urlParameters)) {
            requestUrl = `${requestUrl}?${urlParameters}`;
        }
    }

    return fetch(requestUrl, {
        method: "GET",
        ...DEFAULT_OPTIONS,
        ...options
    });
}

export function httpPost({ url, data, options = {} }) {
    return fetch(url, {
        method: "POST",
        body: data && JSON.stringify(data),
        ...DEFAULT_OPTIONS,
        ...options
    });
}
