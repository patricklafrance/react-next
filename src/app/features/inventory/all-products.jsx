import { useApiGet, useApiPost } from "@core/http";
import { useEffect } from "react";

function Product({ id, name, price, quantity }) {
    const [{ apiLoading }, executeRequest] = useApiPost();

    const handleDelete = () => {
        // TODO: How do i know it's over and I can refresh my data?
        executeRequest({
            url: "/inventory/products/remove",
            data: {
                id
            }
        });
    };

    return (
        <li>
            <span>{name}</span> - <span>{price}$</span> -{" "}
            <span>{quantity} in stock</span>
            <button type="button" onClick={handleDelete}>delete</button>
        </li>
    );
}

export function AllInventoryProductsPage() {
    const [{ apiData, apiLoading }, executeRequest] = useApiGet();

    useEffect(() => {
        executeRequest({ url: "/inventory/products" });
    }, []);

    return (
        <div>
            <h1>Products Inventory</h1>

            <div>
                <Choose>
                    <When condition={apiLoading}>Loading...</When>
                    <Otherwise>
                        <ul>
                            {apiData.map(x => {
                                return <Product key={x.id} {...x} />;
                            })}
                        </ul>
                    </Otherwise>
                </Choose>
            </div>
        </div>
    );
}
