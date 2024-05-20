"use client";
import Image from "next/image";
import { useState, useActionState, useFormStatus } from "react";
import { FaCheckCircle, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import jsonData from "@/public/zoo-flight-search.json";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
  const [fromValue, setFromvalue] = useState({
    departing: "2024-06-01",
    flyingFrom: "DAC",
    flyingTo: "DXB",
    travelers: "1 Passenger, Economy",
  });
  const [show, setshow] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const HandleSearch = () => {
    const filterData = jsonData.result.filter(
      (item) =>
        item.legs[0].segment.departureLocation.toLowerCase() ===
          fromValue.flyingFrom.toLowerCase() &&
        item.legs[0].segment.arrivalLocation.toLowerCase() ===
          fromValue.flyingTo.toLowerCase() &&
        item.legs[0].segment.departureDate === fromValue.departing
    );
    setLoading(true);
    setTimeout(() => {
      setData(filterData);
      setLoading(false);
    }, 500);
  };

  console.log("working...", jsonData);

  return (
    <main className="bg-gray-100 font-sans">
      <header className="bg-blue-900 text-white p-6 text-center">
        <h1 className="text-2xl">Flight Search</h1>
      </header>

      <div className="container mx-auto mt-6 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex mb-6 md:w-1/4  gap-1 ">
            <div className="flex-1 bg-gray-300 p-2 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              One Way
            </div>
            <div className="flex-1 bg-gray-300 p-2 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              Round Trip
            </div>
            <div className="flex-1 bg-gray-300 p-2 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              Multi-city
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div>
              <label htmlFor="from" className="block mb-2">
                Flying from
              </label>
              <input
                type="text"
                name="flyingFrom"
                onChange={(v) =>
                  setFromvalue({ ...fromValue, flyingFrom: v.target.value })
                }
                id="from"
                defaultValue={fromValue.flyingFrom}
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
                onChange={(v) =>
                  setFromvalue({ ...fromValue, flyingTo: v.target.value })
                }
                id="to"
                defaultValue={fromValue.flyingTo}
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
                onChange={(v) =>
                  setFromvalue({ ...fromValue, departing: v.target.value })
                }
                id="date"
                defaultValue={fromValue.departing}
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
                name="travelers"
                onChange={(v) =>
                  setFromvalue({ ...fromValue, travelers: v.target.value })
                }
                defaultValue={fromValue.travelers}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              onClick={HandleSearch}
              className="bg-orange-500 text-white  rounded-md mt-7"
            >
              Modify Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white text-center">
        <div className="bg-blue-950 p-3">
          {fromValue.departing} | {fromValue.flyingFrom} ✈ {fromValue.flyingTo}
        </div>
        <div className="container mx-auto p-2">
          <div className="flex justify-between items-center">
            <div className="flex text-center border-white md:gap-2   justify-center items-center">
              <FaCheckCircle className="text-orange-500" />
              <span>SEARCH RESULTS</span>
            </div>

            <div className="flex text-center border-white md:gap-2  justify-center items-center">
              <FaRegCircleCheck className="text-orange-500" />
              <span>PASSENGER DETAILS</span>
            </div>

            <div className="flex text-center border-white md:gap-2  justify-center items-center">
              <FaRegCircleCheck className="text-orange-500" />
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
                  />
                  Non Stop
                </div>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="onestop"
                    className="mr-2"
                  />
                  One Stop
                </div>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="multistop"
                    className="mr-2"
                  />
                  Multi Stop
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Cabin Type</h3>
                <div>
                  <input type="checkbox" value="economy" className="mr-2" />
                  Economy
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="premiumeconomy"
                    className="mr-2"
                  />
                  Premium Economy
                </div>
                <div>
                  <input type="checkbox" value="business" className="mr-2" />
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
                  <input type="checkbox" value="flydubai" className="mr-2" />
                  FlyDubai
                </div>
                <div>
                  <input type="checkbox" value="emirates" className="mr-2" />
                  Emirates
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4 sm:w-1/2">
            {loading && "Loading...."}

            {data.map((item, idx) => {
              const lastElementSegmentDetails =
                item.legs[0].segmentDetails[
                  item.legs[0].segmentDetails.length - 1
                ];

              function getTime(value) {
                // const dateString = item.legs[0].segmentDetails[0].origin.dateTime;
                const date = new Date(value);

                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();

                // Format the time as a string
                const timeString = `${hours
                  .toString()
                  .padStart(2, "0")}:${minutes
                  .toString()
                  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
                return timeString;
              }

              return (
                <div
                  className="bg-white rounded-lg shadow-md border-b-8"
                  key={idx}
                >
                  <div className="md:flex justify-between text-xs p-1">
                    <div className="md:w-5/6 border-r px-2">
                      <div className="flex items-center mb-4">
                        <div className="w-1/2">{fromValue.departing}</div>
                        <div className="w-1/2">
                          <span>{item.legs[0].segment.departureLocation}</span>
                          <span className="mx-2">✈</span>
                          <span>{item.legs[0].segment.arrivalLocation}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <Image
                            src="/BS.gif"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                          />

                          <p className="text-gray-600">BS (341)</p>
                          <p className="text-gray-600">US Bangla</p>
                        </div>
                        <div>
                          <p className="text-xl font-semibold">
                            {getTime(
                              item.legs[0].segmentDetails[0].origin.dateTime
                            )}
                          </p>
                          <p className="text-gray-600">
                            {item.legs[0].segmentDetails[0].origin.city}
                          </p>
                        </div>
                        <div className="text-center grid grid-cols-2 gap-1">
                          <div className="border-2 px-2 py-1 rounded-md text-xs ml-2">
                            Non Stop
                          </div>
                          <div className="border-2 px-2 py-1 rounded-md text-xs ml-2">
                            Economy
                          </div>
                          <div className="border-2 px-2 py-1 rounded-md text-xs ml-2">
                            Refundable
                          </div>
                          <div className="border-2 px-2 py-1 rounded-md text-xs ml-2">
                            Refundable
                          </div>
                        </div>
                        <div>
                          <p className="text-xl font-semibold">
                            {getTime(
                              lastElementSegmentDetails.destination.dateTime
                            )}
                          </p>
                          <p className="text-gray-600">
                            {lastElementSegmentDetails.destination.city}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/4 md:flex justify-center items-center">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          {item.priceBreakDownWithMarkup.commission_percentage}%
                          Discount
                        </p>

                        <p className="text-xl font-bold text-red-600">
                          BDT
                          {
                            item.priceBreakDownWithMarkup.totalFare
                              .netTotalFareAmount
                          }
                        </p>
                        <p className="text-gray-600">
                          BDT
                          <span className="line-through">
                            {item.totalPrice.totalPrice}
                          </span>
                        </p>

                        <div className="mt-4">
                          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f5f5f5] mt-2 md:flex justify-between p-2 text-xs">
                    <div
                      id="accordion-collapse"
                      className="flex-1"
                      data-accordion="collapse"
                    >
                      <h2>
                        <button
                          type="button"
                          className=" w-full p-1 font-medium rtl:text-right text-gray-500"
                          onClick={() => setshow({ idx, open: !show.open })}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                              Send Query :<FaWhatsapp />
                              <MdOutlineMail />
                            </div>
                            <div className="flex items-center justify-center gap-1">
                              Flight Details
                              <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5 5 1 1 5"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        className={`${
                          show.idx === idx && show.open ? "block" : "hidden"
                        }`}
                      >
                        <div className=" border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                          <div className="border-b">
                            <div className="w-1/4 bg-[#0A3D62] text-white text-center p-1">
                              <span className="text-xs">
                                {item.legs[0].segmentDetails[0].origin.city}
                              </span>
                              <span className="mx-2">✈</span>
                              <span className="text-xs">
                                {lastElementSegmentDetails.destination.city}
                              </span>
                            </div>
                          </div>
                          {item.legs[0].segmentDetails?.map((item1, idx1) => {
                            return (
                              <div
                                className="flex justify-between items-center border-b-2"
                                key={idx1}
                              >
                                <div>
                                  <Image
                                    src="/BS.gif"
                                    width={40}
                                    height={40}
                                    alt="Picture of the author"
                                  />
                                </div>
                                <div>
                                  <p>{item1.fleet?.operating}</p>
                                  <p>
                                    Aircraft:
                                    {item1.fleet?.operatingFlightNumber}
                                  </p>
                                </div>
                                <div>
                                  <p>{item1.origin.dateTime}</p>
                                  <p>{item1.origin.city}</p>
                                </div>
                                <div>
                                  <div className="border-2 px-2 py-1 rounded-md text-xs ml-2">
                                    Economy
                                  </div>
                                </div>
                                <div>
                                  <p>{item1.destination.dateTime}</p>
                                  <p>{item1.destination.city}</p>
                                  <div>
                                    <p>Available Seat : 1</p>
                                    <p>Cabin: Y ( rbd: H)</p>
                                  </div>
                                </div>
                                <div>
                                  <p>{item1.fleet?.operating}</p>
                                  <p>{item1.fleet?.operatingFlightNumber}</p>
                                  <div>
                                    <p>Baggage</p>
                                    <p>
                                      {
                                        item.baggageInfo[0]?.details[0]
                                          ?.pieceCount
                                      }
                                      Pcs
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
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
