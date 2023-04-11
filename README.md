# redux-middleware-routing
Created with CodeSandbox

This is a syntax writing practice of 
1. redux
2. redux toolkit
3. configuring store using {configureStore}
4. creating slices using {createSlice}
5. creating reducer
6. using the states using {useSelector}
7. dispatching actions into the reducer using {useDispatch}
8. creating router
9. providing paths to all the the pages using {createBrowserRouter}
10. providing links to all the pages using {Link} 
11. providing outlet for the children pages using {Outlet}
12. making routes available to all the pages by using {RouterProvider}
13. making store available to all the webpages by wrapping the index.js using {Provider}
14. creating thunks manually so that they enter middleware instead of reducer.

Note :
This uses the react-router-dom v6.10 
so the concepts of {BrowserRouter, Routes, Route, Redirect} does not work in this version.
there is also no concept of {Switch} which you see in many tutorials. It is very old concept in v6.

Feature :
If you still want to do by the method of <Routes><Route/></Routes> you should use the createRoutesFromElements
