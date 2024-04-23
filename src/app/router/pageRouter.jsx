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
import LogOut from '../layouts/logOut'
import Cart from '../layouts/cart'
import Compare from '../layouts/compare'
import Favorites from '../layouts/favorites'
import SearchPage from '../pages/searchPage/searchPage'
import SearchProvider from '../hooks/useSearch'
import CheckoutPage from '../pages/checkoutPage/checkoutPage'
// import CheckoutDone from '../components/ui/checkout/checkoutDone'

const PageRouter = () => {
    const ComponentWithPopup = withPopup(Login)
    // const ComponentWithPopupCheckout = withPopup(CheckoutDone)
    // const { searchQuery } = useSearch()
    return (
        <>
            <PopupProvider>
                {/* <ComponentWithPopupCheckout /> */}
                <ComponentWithPopup />
                <SearchProvider>
                    <Header />
                    <main className="page">
                        <div className="page__container">
                            <Switch>
                                <Route
                                    path="/catalog/:categoryId?/:productId?"
                                    component={RootCatalog}
                                />
                                <Route path="/search" component={SearchPage} />
                                <Route
                                    path="/profile"
                                    component={UserProfile}
                                />
                                <Route
                                    path="/favorites"
                                    component={Favorites}
                                />
                                <Route
                                    path="/checkout"
                                    component={CheckoutPage}
                                />
                                <Route path="/compare" component={Compare} />
                                <Route path="/cart" component={Cart} />
                                <Route path="/login" component={Login} />
                                <Route path={'/logout'} component={LogOut} />
                                <Route path="/" exact component={MainPage} />
                                <Redirect to="/" />
                            </Switch>
                        </div>
                    </main>
                    <Footer />
                </SearchProvider>
            </PopupProvider>
            <ToastContainer />
        </>
    )
}

export default PageRouter
