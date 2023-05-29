import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MainPage from '../layouts/main'
import RootCatalog from '../pages/rootCatalog'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import Login from '../components/ui/login/login'
import { ToastContainer } from 'react-toastify'
import withPopup from '../components/ui/hoc/withPopup'
import { PopupProvider } from '../hooks/useTriggerPopup'
import UserProfile from '../pages/userProfile/userProfile'

const PageRouter = () => {
    const ComponentWithPopup = withPopup(Login)
    return (
        <>
            <PopupProvider>
                <ComponentWithPopup />
                <Header />
                <main className="page">
                    <div className="page__container">
                        <Switch>
                            <Route path="/profile" component={UserProfile} />
                            <Route
                                path="/catalog/:categoryId?/:productId?"
                                component={RootCatalog}
                            />
                            <Route path="/login" component={Login} />
                            <Route path="/" exact component={MainPage} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </main>
                <Footer />
            </PopupProvider>
            <ToastContainer />
        </>
    )
}

export default PageRouter
