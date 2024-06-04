import './App.css'
import Startup from './assets/Main/Startup'
import Carousel from './assets/Main/Carousel'
import Work from './assets/Main/Work'
import Introducing from './assets/Main/Introducing'
import Grow from './assets/Main/Grow'
import Footer from './assets/Main/Footer'
import TrackProgress from './assets/Track1/TrackProgress'
import Satchel1 from './assets/Track2/Satchel1'
import Onway from './assets/Track1/Onway/Onway'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import TrackProgress from './assets/Track1/TrackProgress'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Startup />
        <Carousel />
        <Work />
        <Introducing />
        <Grow />
        <Footer />
      </>
    },
    {
      path: '/trackprogress',
      element: <TrackProgress />
    },
    {
      path: '/Satchel1',
      element: <Satchel1 />
    }
  ])
  return (
    <>
      {/* <Startup/>
    <Carousel/>
    <Work/>
    <Introducing/>
    <Grow/>
  <Footer/> */}
      {/* <TrackProgress/> */}
      {/* <Satchel1/> */}
      {/* <Onway /> */}
      <RouterProvider router={router}/>


    </>
  )
}

export default App
