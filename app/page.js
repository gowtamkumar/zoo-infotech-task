"use client";
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import jsonData from "@/public/zoo-flight-search.json";

export default function Home() {
  const [fromValue, setFromvalue] = useState({});
  const HandleSearch = (v) => {
    // const newData = { ...fromValue };
    // console.log("working...", v.target);
    // newData[v.target.name] = v.target.value;
    // console.log("🚀 ~ newData:", newData);
    // setFromvalue(newData)
    // v.preventDefault();
  };

  console.log("data", jsonData.result);

  return (
    <main className="bg-gray-100 font-sans">
      <header className="bg-blue-900 text-white p-6 text-center">
        <h1 className="text-2xl">Flight Search</h1>
      </header>

      <div className="container mx-auto mt-6 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex mb-6 md:w-1/4  gap-1 ">
            <div className="flex-1 bg-gray-300 p-4 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              One Way
            </div>
            <div className="flex-1 bg-gray-300 p-4 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              Round Trip
            </div>
            <div className="flex-1 bg-gray-300 p-4 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              Multi-city
            </div>
          </div>
          <form className="space-y-4" action={HandleSearch}>
            <div className="grid md:grid-cols-5 gap-4">
              <div>
                <label htmlFor="from" className="block mb-2">
                  Flying from
                </label>
                <input
                  type="text"
                  name="flyingFrom"
                  id="from"
                  defaultValue="DAC"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="to" className="block mb-2">
                  Flying to
                </label>
                <input
                  type="text"
                  name="flyingTo"
                  id="to"
                  defaultValue="DXB"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="date" className="block mb-2">
                  Departing
                </label>
                <input
                  type="date"
                  name="departing"
                  id="date"
                  defaultValue="2024-05-19"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="travelers" className="block mb-2">
                  Travelers
                </label>
                <input
                  type="text"
                  id="travelers"
                  defaultValue="1 Passenger, Economy"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white  rounded-md mt-7"
              >
                Modify Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-blue-900 text-white text-center">
        <div className="bg-blue-950 p-3">19 May, 2024 | DAC ✈ DXB</div>
        <div className="container mx-auto md:mt-6 px-4">
          <div className="flex justify-between">
            <div className="flex md:p-4 text-center border-white md:gap-2   justify-center items-center">
              <FaCheckCircle />
              <span>SEARCH RESULTS</span>
            </div>

            <div className="flex md:p-4 text-center border-white md:gap-2  justify-center items-center">
              <FaRegCircleCheck />
              <span>PASSENGER DETAILS</span>
            </div>

            <div className="flex md:p-4 text-center border-white md:gap-2  justify-center items-center">
              <FaRegCircleCheck />
              <span>BOOKING CONFIRMATION</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-6 px-4">
        <div className="md:flex md:space-x-6">
          <div className="md:w-1/4 sm:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div className="mb-6">
                <h3 className="font-bold mb-2">Number of Stops</h3>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="nonstop"
                    className="mr-2"
                  />{" "}
                  Non Stop
                </div>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="onestop"
                    className="mr-2"
                  />{" "}
                  One Stop
                </div>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="multistop"
                    className="mr-2"
                  />{" "}
                  Multi Stop
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Cabin Type</h3>
                <div>
                  <input type="checkbox" value="economy" className="mr-2" />{" "}
                  Economy
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="premiumeconomy"
                    className="mr-2"
                  />{" "}
                  Premium Economy
                </div>
                <div>
                  <input type="checkbox" value="business" className="mr-2" />{" "}
                  Business
                </div>
                <div>
                  <input type="checkbox" value="first" className="mr-2" /> First
                  Class
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Air Carrier</h3>
                <div>
                  <input type="checkbox" value="bangla" className="mr-2" /> Air
                  Bangla
                </div>
                <div>
                  <input type="checkbox" value="flydubai" className="mr-2" />{" "}
                  FlyDubai
                </div>
                <div>
                  <input type="checkbox" value="emirates" className="mr-2" />{" "}
                  Emirates
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4 sm:w-1/2">
            {[1, 3, 4, 5, 6, 6, 78, 3].map((item, idx) => {
              return (
                <div key={idx}>
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <div className="flex justify-between mb-4">
                      <div>
                        <div>Sunday, May 19</div>
                        <div>21:55</div>
                        <div>DAC ✈ DXB</div>
                        <div>Flight Duration: 5h 30m</div>
                      </div>
                      <div>
                        <div>Cabin: Economy</div>
                        <div>Seats: Available</div>
                        <div>Stop: Non Stop</div>
                      </div>
                      <div>
                        <div>Price: BDT 40231</div>
                      </div>
                      <div>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="bg-blue-900 text-white p-6 text-center mt-6">
        <div>
          Corporate Office | Contact Us | About Company | Important Link
        </div>
        <div>Social Media Links</div>
      </footer>
    </main>
  );
}
