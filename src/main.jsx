import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Dashbord from './Component/Dashbord/Dashbord';
import AddContest from './Component/AdminComponent/Pages/AddContest/AddContest';
import ManageUser from './Component/AdminComponent/Pages/ManageUser/ManageUser';

import Login from './Component/Login/Login';
import Registation from './Component/Registation/Registation';
import Error from './Component/Error/Error';
import AugthProvider from './Component/AugthProvider/AugthProvider';

import { HelmetProvider } from 'react-helmet-async';


import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'


import { ToastContainer } from 'react-toastify';
import AllCorsess from './Component/pages/AllCorsess/AllCorsess';

import Slidersimg from './Component/AdminComponent/Pages/Slidersimg/Slidersimg';
import UpdateSlidersimg from './Component/AdminComponent/Pages/UpdateSlidersimg/UpdateSlidersimg';
import Managecurse from './Component/AdminComponent/Pages/Managecurse/Managecurse';
import Sakhasomoho from './Component/pages/Sakhasomoho/Sakhasomoho';
import ImagesGallery from './Component/ShareComponent/Gallary/ImagesGallery/ImagesGallery';
import AdmissionForm from './Component/ShareComponent/AdmissionForm/AdmissionForm';

import AddBook from './Component/AdminComponent/Pages/AddBook/AddBook';
import ManageBook from './Component/AdminComponent/Pages/ManageBook/ManageBook';
import Bookcontenar from './Component/ShareComponent/Bookss/Bookcontenar/Bookcontenar';
import AddSuccessfulstudents from './Component/AdminComponent/Pages/AddSuccessfulstudents/AddSuccessfulstudents';
import ManageSuccessfulstudents from './Component/AdminComponent/Pages/ManageSuccessfulstudents/ManageSuccessfulstudents';
import Slidersimgsmoll from './Component/AdminComponent/Pages/Slidersimgsmoll/Slidersimgsmoll';
import AddImage from './Component/AdminComponent/Pages/AddImage/AddImage';
import VideoGallery from './Component/pages/video gallery/VideoGallery/VideoGallery';
import AddYoutubevdio from './Component/AdminComponent/Pages/AddYoutubevdio/AddYoutubevdio';
import ManageImage from './Component/AdminComponent/Pages/ManageImage/ManageImage';
import ManageVedio from './Component/AdminComponent/Pages/ManageVedio/ManageVedio';
import AddHeadline from './Component/AdminComponent/Pages/AddHeadline/AddHeadline';
import ManageHeadline from './Component/AdminComponent/Pages/ManageHeadline/ManageHeadline';
import AdmissionRequest from './Component/AdminComponent/Pages/AdmissionRequest/AdmissionRequest';
import Details from './Component/pages/Details/Details';
import Admitioncomplete from './Component/AdminComponent/Pages/Admitioncomplete/Admitioncomplete';
import Bookboking from './Component/ShareComponent/Bookboking/Bookboking';
import BookBuyRequest from './Component/AdminComponent/Pages/BookBuyRequest/BookBuyRequest';
import BookingDetails from './Component/pages/BookingDetails/BookingDetails';
import BookBuyComplate from './Component/AdminComponent/Pages/BookBuyComplate/Admitioncomplete';
import AddSuccessStory from './Component/AdminComponent/Pages/AddSuccessStory/AddSuccessStory';
import ManageSuccessStory from './Component/AdminComponent/Pages/ManageSuccessStory/ManageSuccessStory';
import AboutUs from './Component/pages/AboutUs/AboutUs';
import AddBranch from './Component/AdminComponent/Pages/AddBranch/AddBranch';
import ManageBranch from './Component/AdminComponent/Pages/ManageBranch/ManageBranch';
import CorseDetails from './Component/pages/CorseDetails/CorseDetails';
import UpdateContest from './Component/AdminComponent/Pages/UpdateContest/UpdateContest';


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/Rejistition",
        element:<Registation></Registation>,
      },
      
      {
        path: "/AllCorsess",
        element:<div className=""><AllCorsess></AllCorsess></div>,
      },
      {
        path: "/Allbranch",
        element:<Sakhasomoho></Sakhasomoho>,
      },
      {
        path: "/AllBooks",
        element:<Bookcontenar></Bookcontenar>,
      },
      {
        path: "/photogalary",
        element:<div className="max-w-screen-xl mx-auto"><ImagesGallery></ImagesGallery></div>,
      },
      {
        path: "/vediogalary",
        element: <div className="max-w-screen-xl mx-auto"><VideoGallery></VideoGallery></div>,
      },
      {
        path: "/AboutUs",
        element: <div className="max-w-screen-xl mx-auto"><AboutUs></AboutUs></div>,
      },
      {
        path: "/admition",
        element:<AdmissionForm></AdmissionForm>,
      },
      {
        path: "/view/:id",  // Dynamic route to match user ID
        element:<Details></Details>,  // Component to display user details
      },
      {
        path: "/view/book/:id",  // Dynamic route to match user ID
        element:<BookingDetails></BookingDetails>,  // Component to display user details
      },
      {
        path: "/book/view/:id",  // Dynamic route to match user ID
        element:<Bookboking></Bookboking>,  // Component to display user details
      },
      {
        path: "/corse/view/:id",  // Dynamic route to match user ID
        element:<CorseDetails></CorseDetails>,  // Component to display user details
      },
      {
        path: "/UpdateContest/:id",  // Dynamic route to match user ID
        element:<UpdateContest></UpdateContest>,  // Component to display user details
      }, 
    ],
    errorElement: <Error></Error>,
  },
  {
    path: "/dashboard",
    element:<Dashbord></Dashbord>,
    children: [
      // {
      //   index: true,
      //   element: <AdminHome></AdminHome>,
      // },
   
      {
        path: "AddContest",
        element: <AddContest></AddContest>,
      },
      
      {
        path: "Slidersimg",
        element: <Slidersimg></Slidersimg>,
      },
      {
        path: "Managecurse",
        element: <Managecurse></Managecurse>,
      },
      {
        path: "Slidersimg/slidersimg/singledata/update/:id",
        element:<UpdateSlidersimg></UpdateSlidersimg>,

      },
      {
        path: "ManageBook",
        element: <ManageBook></ManageBook>
      },
      {
        path: "Addbook",
        element: <AddBook></AddBook>
      },
      {
        path: "AddSuccessfulstudents",
        element: <AddSuccessfulstudents></AddSuccessfulstudents>
      },
      {
        path: "ManageSuccessfulstudents",
        element: <ManageSuccessfulstudents></ManageSuccessfulstudents>
      },
      {
        path: "Slidersimgsmoll",
        element: <Slidersimgsmoll></Slidersimgsmoll>
      },
      {
        path: "AddImage",
        element: <AddImage></AddImage>
      },
      {
        path: "ManageImage",
        element: <ManageImage></ManageImage>
      },
      {
        path: "AddVedio",
        element: <AddYoutubevdio></AddYoutubevdio>
      },
      {
        path: "ManageVedio",
        element: <ManageVedio></ManageVedio>
      },
      {
        path: "AddHeadline",
        element: <AddHeadline></AddHeadline>
      },
      {
        path: "ManageHeadline",
        element: <ManageHeadline></ManageHeadline>
      },
      {
        path: "AdmitionRequest",
        element: <AdmissionRequest></AdmissionRequest>
      },
      {
        path: "Admitioncomplete",
        element: <Admitioncomplete></Admitioncomplete>
      },
      {
        path: "BookbuyRequest",
        element: <BookBuyRequest></BookBuyRequest>
      },
      {
        path: "BookbuyComplate",
        element: <BookBuyComplate></BookBuyComplate>
      },
      {
        path: "AddSuccessStory",
        element: <AddSuccessStory></AddSuccessStory>
      },
      {
        path: "ManageSuccessStory",
        element: <ManageSuccessStory></ManageSuccessStory>
      },
      {
        path: "AddBranch",
        element: <AddBranch></AddBranch>
      },
      {
        path: "ManageBranch",
        element: <ManageBranch></ManageBranch>
      },
    ////-----------Admin---------
     {
        path: "ManageUser",
        element:<ManageUser></ManageUser>,
      },
    ///----------user ---------
    ],
    errorElement: <Error></Error>,
  },


 





]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <AugthProvider>
    <ToastContainer /> 
     <RouterProvider router={router} />
     
    </AugthProvider>
    </QueryClientProvider>
    </HelmetProvider>
   
    
  </React.StrictMode>,
)
