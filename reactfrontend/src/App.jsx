// import Card from "./components/card"
// import Product from "./components/product"
// import { useState,useEffect } from "react"
// import Item from "./components/Item"
// import Table from "./components/Table"
// import Counter from "./components/Counter"
// import Model from "./components/Model"
// import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Aboutpage from "./Pages/Aboutpage"
import Contactpage from "./Pages/contactpage"
import Loginpage from "./Pages/Loginpage"
import Servicepage from "./Pages/servicepage"
import Signpage from "./Pages/signpage"
import PageNotFound from "./Pages/PageNotFound"
import Navbar from "./components/Navbar"














const App = () => {


  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const routerpath = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Homepage/>,
          },
          {
            path: "/home",
            element: <Homepage/>,
          },

          {
            path: "/about",
            element: <Aboutpage/>,
          },

          {
            path: "/contact",
            element: <Contactpage/>,
          },

          {
            path: "/",
            element: <Servicepage/>,
          },




        ]
      },
      {
        path: "/login",
        element: <Loginpage/>,
      },
      {
        path: "/signpage",
        element: <Signpage/>,
      },

      {
        path: "*",
        element: <PageNotFound/>,
      },
   




      ]
    )














  //  const [count, setCount] = useState(0)

  // const handleclick = () => {

  // }
  // console.log(count);

  // const[count, setcount] = useState(false)


  // const handleclick = () => {
  //   setcount(!count);
  //   count ? document.body.style.backgroundColor ="black":document.body.style.backgroundColor = "white"

  //   console.log(count);

  // }

  // const [type, setType] = useState()

  // const handleChange = (event) => {
  //   setType(event.target.value);
  //   console.log(type);

  // }


  // const[type, setType] = useState('');
  // console.log(type, "type");

  // useEffect(() => {
  //   printlog();
  // },[data, setData])
  // const printlog = () => {
  //   console.log("hello world,23");
  // }


  return (

    <>
    <RouterProvider router={routerpath}/>


      {/* <Navbar/>

    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Home" element={<Homepage/>} />
      <Route path="/about" element={<Aboutpage/>} />
      <Route path="/contact" element={<Contactpage/>} />
      <Route path="/services" element={<Servicepage/>} />
      <Route path="/Signpage" element={<Signpage/>} />
      <Route path="/Loginpage" element={<Loginpage/>} />
      <Route path="*"element={<PageNotFound />} />
    </Routes> */}



      {/* <Counter/> */}
      {/* <Model/> */}



      {/* <Item/> */}

      {/* <Product/> */}

      {/* <div className="w-full-flex items-center-gap-4 justify-center">
        <span>Count{count}</span>
        <button onClick={handleclick} className="p-2 px-4 bg-blue-500 rounded-md">+1</button>
      </div> */}


      {/* <div className="w-full h-[100vh] flex items-center gap-4 justify-center">
        
        <button onClick={handleclick} className="p-2 px-4 bg-blue-800 rounded-md">{count ? "ON":"OFF"}</button>
      </div> */}

      {/* <div className=" h-[100vh]w-full flex items-center gap-4 justify-center flex-col"></div>
      <input type="text" onChange={handleChange}  className="border-2 border-black rounded-md" />
      <input type="text" className="border-2 border-black rounded-md" value = {type}/> */}






    </>
  )
}





export default App
