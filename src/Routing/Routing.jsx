import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate, useNavigate } from 'react-router-dom';
import Axios from 'axios';
// pages 
import App from '../App/App.jsx'
import User from '../User/User.jsx'
import Product from '../Product/Product.jsx'
import Createaccount from '../Createaccount/Createaccount.jsx'
import Login from '../Login/Login.jsx'
import Addproduct from '../../components/Addproduct/Addproduct.jsx'
// import Getdata from '../getdata.jsx'



const Routing = () => {
  // ask server for get req .............................
  const [isapp, setisapp] = React.useState([0]);
  useEffect(() => {
    Axios.get('https://foodapp-api-nine.vercel.app/')
      .then((res) => {
        if (res) {
          setisapp(1)
        } else {
          setishome(0)
        }
      });
  }, []);
  const [ishome, setishome] = React.useState([0]);
  useEffect(() => {
    Axios.get('https://foodapp-api-nine.vercel.app/home')
      .then((res) => {
        if (res.data == "1") {
          setishome(1)
        }
        else {
          setishome(0)
        }
      });
  }, []);
  const [isproduct, setisproduct] = React.useState([0]);
  useEffect(() => {
    Axios.get('https://foodapp-api-nine.vercel.app/product')
      .then((res) => {
        if (res.data == "1") {
          setisproduct(1)
        } else {
          setishome(0)
        }
      });
  }, []);
  const [iscreateaccount, setiscreateaccount] = React.useState([0]);
  useEffect(() => {
    Axios.get('https://foodapp-api-nine.vercel.app/createaccount')
      .then((res) => {
        if (res.data == "1") {
          setiscreateaccount(1)
        } else {
          setishome(0)
        }
      });
  }, []);
  const [islogin, setislogin] = React.useState([0]);
  useEffect(() => {
    Axios.get('https://foodapp-api-nine.vercel.app/login')
      .then((res) => {
        if (res.data == "1") {
          setislogin(1)
        } else {
          setishome(0)
        }
      });
  }, []);

  // privetcomponent ..............................
  const Privetcomponent = () => {
    const [lod, setLod] = useState(0);
    useEffect(() => {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      };
      const fetchData = async () => {
        try {
          const res = await Axios.post('https://foodapp-api-nine.vercel.app/api/checkauth', headers);
          if (res.data === 1) {
            setLod("1");
          } else if (res.data === 0) {
            setLod("2");
          }
        } catch (error) {
          console.error('Error:', error);
          // Handle error state or redirection here if needed
        }
      };

      fetchData(); // Call the async function

    }, []); // Include checkdata as a dependency to avoid lint warnings

    if (lod === "1") {
      return <Outlet />;
    } else if (lod === "2") {
      return <Navigate to="/createaccount" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route element={<Privetcomponent />}>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/home" element={<User />} />
        </Route>

        <Route path="/" element={<App />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<Addproduct />} />

      </Routes>
    </Router>
  );
};

export default Routing;