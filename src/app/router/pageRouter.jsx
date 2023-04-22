import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MainPage from '../layouts/main'
import RootCatalog from '../pages/rootCatalog'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import Login from '../components/ui/login/login'

const PageRouter = () => {
    return (
        <>
            <Header />
            <main className="page">
                <div className="page__container">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route
                            path="/catalog/:categoryId?/:productId?"
                            component={RootCatalog}
                        />
                        <Route path="/" exact component={MainPage} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default PageRouter
