import { config } from "@shared/config";
import { httpGet, httpPost } from "./http-client";
import { isNil } from "lodash";
import { useEffect, useState } from "react";

const OPERATIONS = {
    "GET": httpGet,
    "POST": httpPost
};

// TODO: Use api-client from apricot
// TODO: Validate options, method and url are required.
export function useApiRequest() {
    const [request, setRequest] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);
    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [apiLoading, setApiLoading] = useState(true);

    function setApiRequest(apiRequest) {
        setRequest(apiRequest);
    }

    async function executeRequest({ handleUnmanagedError = true, ...apiOptions }) {
        const { method, url, ...rest } = apiOptions;

        const operation = OPERATIONS[method];

        if (isNil(operation)) {
            throw new Error(`API - The HTTP method "${method}" is not supported.`);
        }

        try {
            setApiLoading(true);

            const response = await operation({
                url: toAbsoluteApiUrl(url),
                ...rest
            });

            setApiResponse(response);

            if (response.ok) {
                const json = await response.json();

                setApiData(json);
            } else {
                // If this is not a managed error, throw an exception instead of setting the error and catch the error with an Error Boundary.
                // TODO: do something
            }
        }
        catch (e) {
            if (handleUnmanagedError) {
                // eslint-disable-next-line
                console.log(e);

                throw new Error("Throw a more specific error");
            } else {
                setApiError(e);
            }
        }
        finally {
            setApiLoading(false);
        }
    }

    useEffect(() => {
        if (!isNil(request)) {
            executeRequest(request);
        }
    }, [request]);

    return [{ apiResponse, apiData, apiError, apiLoading }, setApiRequest];
}

export function useApiGet() {
    const [response, executeRequest] = useApiRequest();

    return [response, apiOptions => {
        executeRequest({
            ...apiOptions,
            method: "GET"
        });
    }];

    // TODO: Faire le defer avec un useEffect [];

    // if (deferExecution) {
    //     return [response, executeRequest];
    // }

    // executeRequest({
    //     ...apiOptions,
    //     method: "GET"
    // });

    // return [response];
}

export function useApiPost() {
    const [response, executeRequest] = useApiRequest();

    return [response, apiOptions => {
        executeRequest({
            ...apiOptions,
            method: "POST"
        });
    }];
}

function toAbsoluteApiUrl(relativeUrl) {
    return `${config.api.baseUrl}/api${relativeUrl}`;
}
