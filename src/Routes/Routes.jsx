import { createBrowserRouter } from "react-router";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const router = createBrowserRouter([
    {
        path:"/home",
        element: <Banner></Banner>,
        children:[
            {
                path:"/home",
                element: <Footer></Footer>
            }
        ]
    }
])

export default router;