import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import Loader from "../../utils/Loader";
import AdminLayout from "../../components/admin/AdminLayout";
// import { GrUpdate } from "react-icons/gr";
import { useTheme } from "../../utils/ThemeContext";
import { TbLoader2 } from "react-icons/tb";

export default function LayoutSetting() {
  const [loading, setLoading] = useState(false);
  const [faqData, setFaqData] = useState([]);
  // const [imageUrl, setImageUrl] = useState(null);
  // const [logo, setLogo] = useState(null);
  const { theme } = useTheme();
  const [isloading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState("faq");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [telephone, setTelephone] = useState("");

  // Get FAQ
  const getFAQ = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/layout/get/layout/FAQ`
      );
      console.log(data);
      setFaqData(data?.layoutData?.faq);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getFAQ();
  }, []);

  // Get Footer Info
  const getFooter = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/layout/get/layout/Footer`
      );
      setName(data?.layoutData?.footer?.name);
      setEmail(data?.layoutData?.footer?.email);
      setAddress(data?.layoutData?.footer?.address);
      setPhone(data?.layoutData?.footer?.phone);
      setTelephone(data?.layoutData?.footer?.telephone);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getFooter();
  }, []);

  // Update FAQ
  const updateFAQ = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/layout/update/layout`,
        {
          type: "FAQ",
          faq: faqData,
        }
      );
      if (data?.success) {
        setIsLoading(false);
        getFAQ();
        toast.success("FAQ Updated successfully.");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // Toggle Questions
  const toggleQuestion = (id) => {
    setFaqData((prevFaqs) =>
      prevFaqs?.map((q) => (q._id === id ? { ...q, active: !q.active } : q))
    );
  };

  const handleQuestionChange = (id, value) => {
    setFaqData((prevFaqs) =>
      prevFaqs?.map((q) => (q._id === id ? { ...q, question: value } : q))
    );
  };
  const handleAnswerChange = (id, value) => {
    setFaqData((prevFaqs) =>
      prevFaqs?.map((q) => (q._id === id ? { ...q, answer: value } : q))
    );
  };

  const newFAQHandler = () => {
    setFaqData([...faqData, { question: "", answer: "" }]);
  };

  // Logo Handle

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageUrl(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // Get Logo
  // const getLogo = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/api/v1/layout/get-layouts/Logo`
  //     );
  //     setLogo(data?.layoutData?.logo);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getLogo();
  // }, []);

  // Update Footer
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/layout/update/layout`,
        {
          type: "Footer",
          footer: { name, email, address, phone, telephone },
        }
      );
      if (data.success) {
        getFooter();
        toast.success("Information updated!");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
      setIsLoading(false);
    }
  };

  // Update Logo
  // const updateLogo = async () => {
  //   try {
  //     const { data } = await axios.put(
  //       `${process.env.REACT_APP_API_URL}/api/v1/layout/update-layouts`,
  //       {
  //         type: "Logo",
  //         logoImage: imageUrl,
  //       }
  //     );
  //     if (data?.success) {
  //       getLogo();
  //       toast.success("Logo Updated successfully.");
  //       setImageUrl(null);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <AdminLayout>
      <div className="w-full h-[89%]  py-7 px-3 sm:px-5 overflow-y-auto message pb-[4rem]">
        <h1
          className="text-2xl sm:text-3xl font-semibold "
          style={{
            textShadow: "-.1px 1px 0px #ccc",
          }}
        >
          Layout Settings
        </h1>
        <hr className="my-3 h-[1px] bg-gray-300" />
        <div className="flex flex-col gap-4 mt-[2rem]">
          <div className="flex items-center justify-center w-[14rem] h-[2.8rem] overflow-hidden border rounded-md shadow-md cursor-pointer ">
            <button
              className={`w-full h-full border-r-[1px] border-gray-400  ${
                isActive === "faq"
                  ? "bg-yellow-700 text-white"
                  : "bg-yellow-600/20 "
              } `}
              onClick={() => setIsActive("faq")}
            >
              FAQ
            </button>
            <button
              className={`w-full h-full border-l-[1px] border-gray-400  ${
                isActive === "footer"
                  ? "bg-yellow-700 text-white"
                  : "bg-yellow-600/20 "
              }   `}
              onClick={() => setIsActive("footer")}
            >
              Footer
            </button>
          </div>
          {/* Logo Setting */}
          {/* <div className="">
            <h3 className="text-xl font-[600] text-black ">Modify Logo</h3>
            <hr className="my-3 h-[1px] bg-gray-300" />
            <label className="flex items-center gap-4">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="logoInput"
              />
              <div className="relative w-[3.5rem] h-[3.5rem] bg-white rounded-full border">
                <img
                  src={imageUrl ? imageUrl : logo?.logoImage}
                  alt="Logo"
                  className=" shadow-md cursor-pointer w-[3.5rem] h-[3.5rem]  rounded-full "
                  id="logoImage"
                />
                <GrUpdate className="h-5 w-5 text-fuchsia-500 absolute bottom-[.5rem] right-[-.5rem] z-40" />
              </div>
              {imageUrl && (
                <button
                  className="text-[15px] w-[4.3rem] h-[2.1rem] text-white bg-green-500 cursor-pointer flex items-center justify-center rounded-md hover:shadow-xl shadow-gray-300  "
                  onClick={updateLogo}
                >
                  Save
                </button>
              )}
            </label>
          </div> */}
          {/* FAQ Edit */}
          {loading ? (
            <Loader />
          ) : (
            <div className="">
              {isActive === "faq" ? (
                <div className="">
                  <h3 className="text-xl font-[600] ">FAQ Edit</h3>
                  <hr className="my-3 h-[1px] bg-gray-300" />

                  <dl className="space-y-8">
                    {faqData?.map((faq, i) => (
                      <div
                        className={`${
                          faq._id !== faqData[0]?._id && "border-t"
                        } border-gray-300 bg-gray-100 px-2 py-2 rounded-md shadow-md hover:shadow-lg stroke-gray-200   `}
                        key={faq?._id}
                      >
                        <dt className="text-lg ">
                          <button
                            className="flex items-center  text-black justify-between w-full text-left focus:outline-none"
                            onClick={() => toggleQuestion(faq._id)}
                          >
                            <input
                              type="text"
                              className={`w-full border-2 rounded-sm bg-transparent border-none border-gray-300  outline-none py-2 px-2 cursor-pointer `}
                              value={faq?.question}
                              onChange={(e) =>
                                handleQuestionChange(faq?._id, e.target.value)
                              }
                              placeholder="Add your questions..."
                            />
                            <span className="ml-6 flex-shrink-0">
                              {faq?.active ? (
                                <HiMinus className="w-6 h-6 cursor-pointer" />
                              ) : (
                                <HiPlus className="w-6 h-6 cursor-pointer" />
                              )}
                            </span>
                          </button>
                        </dt>
                        {faq.active && (
                          <dd className="mt-2 mr-[1.5rem] border-t border-gray-300">
                            <textarea
                              className="w-full text-gray-800 h-[7rem] bg-transparent sm:h-[4rem] border-2 border-none resize-none border-gray-300   rounded-sm outline-none py-2 px-2 cursor-pointer "
                              value={faq?.answer}
                              onChange={(e) =>
                                handleAnswerChange(faq?._id, e.target.value)
                              }
                              placeholder="Add your answer..."
                            />
                            <span className="ml-10 flex-shrink-0">
                              <AiOutlineDelete
                                className="text-black text-[18px] hover:text-red-500 cursor-pointer"
                                onClick={() => {
                                  setFaqData((prevFaq) =>
                                    prevFaq.filter(
                                      (item) => item?._id !== faq?._id
                                    )
                                  );
                                }}
                              />
                            </span>
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                  <br />
                  <br />
                  <IoMdAddCircleOutline
                    className=" text-[25px] cursor-pointer"
                    onClick={newFAQHandler}
                  />
                  <div className="w-[98%] sm:w-[96%] flex items-center justify-end ">
                    <div
                      className="flex bg-yellow-700 items-center justify-center w-[7rem] h-[2.6rem] cursor-pointer rounded-3xl text-[16px] text-white hover:scale-[1.01] hover:shadow-2xl"
                      onClick={updateFAQ}
                    >
                      {isloading ? (
                        <TbLoader2 className="h-5 w-5 animate-spin text-white" />
                      ) : (
                        "Update"
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="">
                  <h3 className="text-xl font-[600] ">Footer Edit</h3>
                  <hr className="my-3 h-[1px] bg-gray-300" />
                  <div className="mt-2 flex items-center justify-center px-3">
                    <form
                      onSubmit={handleSubmit}
                      className={`py-4 px-3 sm:px-4 rounded-md shadow-md flex flex-col gap-4 w-[30rem] min-w-[20rem] ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      } `}
                    >
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`border-2 w-full h-[2.8rem] px-3 cursor-pointer rounded-md shadow-md ${
                          theme === "dark"
                            ? "border-gray-300 bg-gray-700 text-white"
                            : "border-gray-800 bg-gray-100 text-black"
                        }`}
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`border-2 w-full h-[2.8rem] px-3 cursor-pointer rounded-md shadow-md ${
                          theme === "dark"
                            ? "border-gray-300 bg-gray-700 text-white"
                            : "border-gray-800 bg-gray-100 text-black"
                        }`}
                      />
                      <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={`border-2 w-full h-[2.8rem] px-3 cursor-pointer rounded-md shadow-md ${
                          theme === "dark"
                            ? "border-gray-300 bg-gray-700 text-white"
                            : "border-gray-800 bg-gray-100 text-black"
                        }`}
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        minLength={11}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`border-2 w-full h-[2.8rem] px-3 cursor-pointer rounded-md shadow-md ${
                          theme === "dark"
                            ? "border-gray-300 bg-gray-700 text-white"
                            : "border-gray-800 bg-gray-100 text-black"
                        }`}
                      />
                      <input
                        type="tel"
                        placeholder="Telephone Number"
                        minLength={10}
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className={`border-2 w-full h-[2.8rem] px-3 cursor-pointer rounded-md shadow-md ${
                          theme === "dark"
                            ? "border-gray-300 bg-gray-700 text-white"
                            : "border-gray-800 bg-gray-100 text-black"
                        }`}
                      />
                      <div className="flex items-center justify-end">
                        <button className="btn">
                          {isloading ? (
                            <TbLoader2 className="h-5 w-5 animate-spin" />
                          ) : (
                            "Update"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
          {/*  */}
        </div>
      </div>
    </AdminLayout>
  );
}
