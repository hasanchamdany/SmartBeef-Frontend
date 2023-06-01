import Image from "next/image";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import React from "react";
import Scan from "../components/Scan";
import bannerScan from "../../public/images/SmartBeef banner scan.png";
import UpFileContainer from "@/components/Container/UpFileContainer";

const scan = () => {
  // const navigate = useNavigate();
  return (
    <>
      <DefaultLayout>
        <div className="flex w-full h-screen scanPage-bg ">
          <div>
            <div className="w-screen justify-center mt-32 md:mx-8 mx-2">
              <h1 className="flex justify-center text-center font-semibold text-scan font-serif-inter text-6xl">
                Scan with Smart Beef
              </h1>
            </div>

            <div className="md:flex md:flex-row block xl:justify-between justify-center mt-16 lg:mx-32 mx-12 lg:gap-20 items-center">
              {/* <Scan/>*/}
              <div className="w-3/4 h-fit bg-white rounded-xl ">
                <UpFileContainer />
              </div>
              <div className="hidden xl:block">
                <Image src={bannerScan} className="h-1/2 w-1/2 " />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default scan;
