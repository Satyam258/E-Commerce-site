import { BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import {Toaster} from "sonner";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./Register";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrderPage from "./pages/MyOrderPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";

function App() {


  return (
    <BrowserRouter>
    <Toaster position ="top-right"/>
      <Routes>
        <Route path="/" element={<UserLayout/>}> 
          <Route index element = {<Home/>}/>
          <Route path="login" element={<Login/>}/>
           <Route path="register" element={<Register/>}/>
           <Route path="profile" element={<Profile/>}/>
           <Route path="collections/:collection" element={<CollectionPage/>}/>
           <Route path="product/:id" element={<ProductDetails/>} />
           <Route path="checkout" element={<Checkout/>}/>
           <Route path="order-confirmation" element={<OrderConfirmationPage/>}/>
           <Route path="order/:id" element={<OrderDetailsPage/>}/>
           <Route path="my-orders" element={<MyOrderPage/>}/>
         </Route>
        
        <Route path="/admin" element={<AdminLayout/>}>  
          <Route index element={<AdminHomePage/>}/>
          <Route path="users" element={<UserManagement/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
