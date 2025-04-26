import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutAuth from './auth/LayoutAuth'
import LayoutOtherPages from './otherPages/LayoutOtherPages'
import LayoutPage from './pages/layout'

import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import ScrollPage from './components/scrollTop/ScrollPage'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { lazy, Suspense } from 'react'
import LoadingPage from './components/LoadingList/LoadingPage'

const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))
const Tours = lazy(() => import('./pages/tour'))
const TourDetail = lazy(() => import('./pages/tour/tourDetail'))
const Hotel = lazy(() => import('./pages/hotel'))
const HotelDetail = lazy(() => import('./pages/hotel/hotelDetail'))
const PrivatePolicy = lazy(() => import('./pages/privatePolicy'))

const Login = lazy(() => import('./auth/login/Login'))
const Register = lazy(() => import('./auth/register/Register'))
const NewPassword = lazy(() => import('./auth/newPassword/NewPassword'))
const ChangePassword = lazy(() => import('./auth/changePassword/ChangePassword'))
const ForgotPassword = lazy(() => import('./auth/forgotPassword/ForgotPassword'))

const ThankYou = lazy(() => import('./otherPages/thanks'))
const TourCheckOut = lazy(() => import('./otherPages/tourCheckout'))
const HotelCheckOut = lazy(() => import('./otherPages/hotelCheckout'))
const NotFoundPage = lazy(() => import('./otherPages/notFoundPage'))

function App() {
  const a = 1

  console.log('aaz')

  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="tours"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Tours />
                </Suspense>
              }
            />
            <Route
              path="tour-detail/:id"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <TourDetail />
                </Suspense>
              }
            />
            <Route
              path="hotels"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Hotel />
                </Suspense>
              }
            />
            <Route
              path="hotel-detail/:id"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <HotelDetail />
                </Suspense>
              }
            />
            <Route
              path="privacy-policy"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <PrivatePolicy />
                </Suspense>
              }
            />
          </Route>

          <Route path="/auth" element={<LayoutAuth />}>
            <Route
              path="login"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="new-password"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <NewPassword />
                </Suspense>
              }
            />
            <Route
              path="change-password"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ChangePassword />
                </Suspense>
              }
            />
            <Route
              path="forgot-password"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ForgotPassword />
                </Suspense>
              }
            />
          </Route>

          <Route path="/" element={<LayoutOtherPages />}>
            <Route
              path="tour-checkout"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <TourCheckOut />
                </Suspense>
              }
            />
            <Route
              path="hotel-checkout"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <HotelCheckOut />
                </Suspense>
              }
            />
            <Route path="thanks" element={<ThankYou />} />
          </Route>

          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingPage />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
        <ScrollPage />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryParamProvider>
    </BrowserRouter>
  )
}

export default App
