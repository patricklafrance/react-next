import {
    AddInventoryProductPage,
    AllInventoryProductsPage
} from "@features/inventory";
import { AdminRoute, AppRoute } from "@core/routing";
import { AllAvailableProductsPage } from "@features/buy/all-products";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { DefaultLayout } from "@features/layouts";

export function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <AppRoute
                    path="/products"
                    component={AllAvailableProductsPage}
                    layout={DefaultLayout}
                    exact
                />
                <AdminRoute
                    path="/inventory/all-products"
                    component={AllInventoryProductsPage}
                    layout={DefaultLayout}
                    exact
                />
                <AdminRoute
                    path="/inventory/add-product"
                    component={AddInventoryProductPage}
                    layout={DefaultLayout}
                    exact
                />
                <Redirect from="/" to="/products" />
            </Switch>
        </BrowserRouter>
    );
}
