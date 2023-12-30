import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useStateProvider } from "../../context/StateContext";
import axios from "axios";
import { GET_SERVICE_DATA } from "../../utils/constants";
import Details from "../../components/services/Details";
import Pricing from "../../components/services/Pricing";
import { reducerCases } from "../../context/constants";

const ServicesPage = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const { serviceId } = router.query;

  const [{ userInfo }, dispatch] = useStateProvider();

  useEffect(() => {
    const fetchServiceDdata = async () => {
      try {
        const {
          data: { service },
        } = await axios.get(`${GET_SERVICE_DATA}/${serviceId}`);
        dispatch({ type: reducerCases.SET_SERVICE_DATA, serviceData: service });
      } catch (err) {
        console.log(err);
      }
    };
    if (serviceId) fetchServiceDdata();
  }, [serviceId, dispatch]);

  return (
    <>
      <Head>
        <title>Services | Undiscovered</title>
      </Head>
      <div className="nav overflow-hidden z-[5] h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="min-h-[80vh] relative top-[10rem] grid grid-cols-3 mx-32 gap-20">
          <Details />
          <Pricing />
        </div>
        <footer className="flex justify-center my-7 mt-[25rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default ServicesPage;
