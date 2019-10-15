import { useApiGet } from "@core/http";

function Product({ id, name, price, quantity }) {
    return (
        <li key={id}>
            <span>{name}</span> - <span>{price}$</span> -{" "}
            <span>{quantity} in stock</span>
        </li>
    );
}

// TODO: is loading.
export function AllInventoryProductsPage() {
    const { data, loading } = useApiGet({ url: "/inventory/products" });

    return (
        <div>
            <h1>Products Inventory</h1>

            <div>
                <Choose>
                    <When condition={loading}>Loading...</When>
                    <Otherwise>
                        <ul>
                            {data.map(x => {
                                return <Product {...x} />;
                            })}
                        </ul>
                    </Otherwise>
                </Choose>
            </div>
        </div>
    );
}
