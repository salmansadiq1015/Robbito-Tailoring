import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { GoArrowRight } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdShop2 } from "react-icons/md";
import { AiOutlineRead } from "react-icons/ai";
import { useTheme } from "../../utils/ThemeContext";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState(0);
  const [channels, setChannels] = useState([]);
  const { theme } = useTheme();
  // Get Users
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/user/all-users`
      );
      if (data?.success) {
        setUsers(data?.users);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  // Get Order

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/orders/all-orders`
      );
      if (data) {
        const sum = data.orders.reduce(
          (acc, order) => acc + parseFloat(order.price),
          0
        );
        setPrice(sum);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  function formatPrice(price) {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    } else {
      return `$${price}`;
    }
  }

  // Get All Channels Data
  const getChannels = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/channel/get-channels`
      );
      setChannels(data?.channels || []);
    } catch (error) {
      console.error("Error fetching channels:", error);
    }
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <AdminLayout>
      <div className="w-full message overflow-y-auto px-2 md:px-[2rem] pt-6 pb-[5rem]">
        <div className="h-[70vh] pb-[6rem] transition-all duration-200 ">
          <div className="flex flex-col sm:flex-row flex-1 flex-wrap gap-4">
            <div
              className={` md:flex-[.3] py-4 px-3  ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }  rounded-md shadow shadow-gray-300 cursor-pointer hover:scale-[1.01] active:scale-[1] `}
            >
              <div className="flex flex-col gap-1" data-aos="fade-right">
                <h3 className="text-2xl font-semibold ">Congratulations! 🥳</h3>
                <span className="text-[14px] font-[400]  ">
                  Best seller of the month
                </span>
              </div>
              <div className="flex items-center gap-4 justify-between sm:justify-normal  mt-4">
                <div className="flex flex-col gap-4" data-aos="fade-left">
                  <h1 className="text-3xl font-[500] text-fuchsia-600">
                    {formatPrice(price)}
                  </h1>

                  <button className=" flex items-center gap-2 justify-center bg-fuchsia-500 py-2 px-[1.1rem] font-medium rounded-md shadow shadow-gray-300 text-white  cursor-pointer hover:scale-[1.01] active:scale-[1]">
                    View <GoArrowRight className="h-5 w-5 " />
                  </button>
                </div>
                <div className=" ml-[1rem] xl:ml-[4rem]" data-aos="fade-left">
                  <img
                    src="/dash.png"
                    alt="AdminLogo"
                    width={90}
                    height={120}
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex-[.6] md:flex-[.7] py-4 px-3  rounded-md shadow shadow-gray-300  cursor-pointer ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              } `}
              // data-aos="fade-up-left"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold  ">Statistics Card</h3>
                <p className="text-[14px] font-[400]  ">
                  Total number of growth 😎 this month
                </p>
              </div>
              {/* 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-[2rem] md:mt-[3.5rem] md:pt-[.5rem] sm:pt-[2rem]">
                <Link
                  to="/admin/users"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="flex items-center justify-center w-[3.4rem] h-[3.4rem] bg-green-600 font-medium rounded-md shadow shadow-gray-300 text-white  cursor-pointer hover:scale-[1.01] active:scale-[1] ">
                    <FaUsers className="h-10 w-10 text-white" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-[18px] font-medium 
                    "
                    >
                      Orders
                    </h3>
                    <span className="text-[16px] font-medium text-green-600 ">
                      {users ? users?.length : "128K"}
                      {users?.length > 1000 && "k"}
                    </span>
                  </div>
                </Link>

                {/* 2 */}
                <Link
                  to="/admin/assistants"
                  className="flex items-center gap-2"
                >
                  <span className="flex items-center justify-center w-[3.4rem] h-[3.4rem] bg-pink-600 font-medium rounded-md shadow shadow-gray-300 text-white  cursor-pointer hover:scale-[1.01] active:scale-[1] ">
                    <MdShop2 className="h-10 w-10 text-white" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-[18px] font-medium 
                    "
                    >
                      Services
                    </h3>
                    <span className="text-[16px] font-medium text-pink-600 ">
                      {channels?.length}
                    </span>
                  </div>
                </Link>

                {/* 3 */}
                <Link to="/admin/files" className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-[3.4rem] h-[3.4rem] bg-sky-600 font-medium rounded-md shadow shadow-gray-300 text-white  cursor-pointer hover:scale-[1.01] active:scale-[1] ">
                    <TiShoppingCart className="h-10 w-10 text-white" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-[18px] font-medium 
                    "
                    >
                      Gallery
                    </h3>
                    <span
                      className="text-[16px] font-medium text-sky-600 
                    "
                    >
                      197k
                    </span>
                  </div>
                </Link>
                {/* 4 */}
                <Link to="/admin/leads" className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-[3.4rem] h-[3.4rem] bg-fuchsia-600 font-medium rounded-md shadow shadow-gray-300 text-white  cursor-pointer hover:scale-[1.01] active:scale-[1] ">
                    <AiOutlineRead className="h-10 w-10 text-white" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-[18px] font-medium 
                    "
                    >
                      Blogs
                    </h3>
                    <span
                      className="text-[16px] font-medium text-fuchsia-600 
                    "
                    >
                      75.5k
                    </span>
                  </div>
                </Link>

                {/* End */}
              </div>
            </div>
          </div>
          {/* Analytics */}
          <div className="pb-[6rem] sm:pb-[1rem]">
            <div className="flex flex-col sm:flex-row flex-1 flex-wrap gap-4 mt-[2rem]">
              <div
                className={`flex-[1] md:flex-[.7] min-h-[22rem] py-4 px-3 ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }   rounded-md shadow shadow-gray-300  cursor-pointer hover:scale-[1.01] active:scale-[1] `}
              >
                <h3
                  className="text-xl sm:text-2xl flex items-center gap-2 font-semibold  
                "
                >
                  <GrAnalytics className=" text-3xl sm:text-4xl text-green-500 " />
                  Orders Analytics
                </h3>
                {/* <SubscriptionAnalytics /> */}
              </div>
              <div
                className={`md:flex-[.3] py-4 px-3 h-[17rem] flex-col gap-4 ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }   rounded-md shadow shadow-gray-300 dark:shadow-gray-700 cursor-pointer hover:scale-[1.01] active:scale-[1]`}
              >
                <h2
                  className="text-xl sm:text-2xl flex items-center gap-2 font-semibold 
                "
                >
                  <RiMoneyDollarCircleLine
                    className="text-3xl sm:text-4xl "
                    style={{ color: "orangered" }}
                  />
                  Total Earning{" "}
                </h2>
                <p className="mt-1">Last Month Subscription Revenue ⚡</p>
                <div className="flex flex-row ">
                  <h3 className="text-2xl ml-2 sm:text-3xl mt-[1rem] ">
                    {formatPrice(price)}
                  </h3>
                  <img
                    src="/money.png"
                    alt="Analytics"
                    height={300}
                    width={230}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
