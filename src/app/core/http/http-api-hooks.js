import { config } from "@shared/config";
import { httpGet } from "./http-client";
import { useEffect, useState } from "react";

export const useApiGet = ({ handleUnmanagedError = true, ...apiOptions }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const { url, ...rest } = apiOptions;

            const response = await httpGet({
                url: toAbsoluteApiUrl(url),
                ...rest
            });

            if (response.ok) {
                const json = await response.json();

                setData(json);
            } else {
                // If this is not an managed error, throw an exception instead of setting the error and catch the error with an Error Boundary.
                // TODO: do something
            }

            setLoading(false);
        } catch (e) {
            if (handleUnmanagedError) {
                throw new Error("Throw a more specific error");
            } else {
                setError(e);
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading };
};

function toAbsoluteApiUrl(relativeUrl) {
    return `${config.api.baseUrl}/api${relativeUrl}`;
}
