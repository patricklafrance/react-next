import { Route } from "react-router-dom";

export function AdminRoute({ component: Component, layout: Layout, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}
