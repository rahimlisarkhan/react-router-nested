import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import Layout from "../components/Layout";
import { ROUTE } from "../util/route";

const DashboardPage = React.lazy(() => import('../pages/dashboard'));
// const ProductsPage = React.lazy(() => import('../pages/products'));
const Basket = React.lazy(() => import('../components/Basket'));

const RootPage = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF} component={DashboardPage} />
                <Route exact path={ROUTE.MAIN.PANEL.CHILD.PRODUCTS.HREF} component={Basket} />
                <Redirect exact from={ROUTE.MAIN.PANEL.HREF} to={ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF} />
            </Switch>
        </Layout>
    )
}

export default RootPage