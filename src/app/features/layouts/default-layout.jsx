import { Link } from "react-router-dom";

export function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/inventory/all-products">Inventory</Link>
                    </li>
                </ul>
            </div>
            <div>{children}</div>
        </div>
    );
}
