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
import Scorecard from './assets/Track1/ScoreCard/Scorecard'
import Issued from './assets/Track1/Issued/Issued'
import Unlock from './assets/Track1/Unlock/Unlock'
import Welcome from './assets/Track1/Welcome/Welcome'
import Recive from './assets/fail/Haven\'t/Recive'
import DaysAgo from './assets/fail/20DayAgo/DaysAgo'
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
            },
            {
              path: '/Satchel1/track_onway',
              element: <Onway/>
              },
                {
                  path: '/Satchel1/Scorecard',
                  element: <Scorecard />
                },
                {
                  path: '/Satchel1/Scorecard_result',
                  element: <Welcome/>
                },
                {
                  path: '/Satchel1/gift',
                  element: <Issued/>
                },
              {
                path: '/Satchel1/unlock',
              element: <Unlock/>
              },
            {
              path: '/Satchel1/receving_fail',
              element: <Recive/>
            },
            {
              path: '/Satchel1/trading',
              element: <DaysAgo/>
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
      {/* <TrackProgress /> */}
      {/* <Satchel1/> */}
      {/* <Onway />
      <Scorecard />
      <Issued />
      <Unlock />
      <Recive />
      <Welcome />

      <DaysAgo />  */}

      <RouterProvider router={router}/>


    </>
  )
}

export default App
