import MainRoot from "../pages";
import AddPage from "../pages/addPage";
import Basket from "../pages/basket";
import DetailPage from "../pages/detailPage";
import Home from "../pages/home";

export const ROUTES=[{
    path:'/',
    element:<MainRoot/>,
    children:[
        {
            index:true,
            element:<Home/>,
        },
        {
            path:'add-page',
            element:<AddPage/>,
        },
        {
            path:'basket',
            element:<Basket/>,
        },
        {
            path:'eats/:id',
            element:<DetailPage/>,
        }
    ]
}]