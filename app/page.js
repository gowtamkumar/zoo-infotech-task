import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 font-sans">
      <header class="bg-blue-900 text-white p-6 text-center">
        <h1 class="text-2xl">Flight Search</h1>
      </header>

      <div class="container mx-auto mt-6 px-4">
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div class="flex mb-6 md:w-1/4  gap-1 ">
            <div class="flex-1 bg-gray-300 p-4 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              One Way
            </div>
            <div class="flex-1 bg-gray-300 p-4 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              Round Trip
            </div>
            <div class="flex-1 bg-gray-300 p-4 text-center text-white rounded-tr-lg  rounded-tl-lg cursor-pointer">
              Multi-city
            </div>
          </div>
          <form class="space-y-4">
            <div class="grid md:grid-cols-5 gap-4">
              <div>
                <label for="from" class="block mb-2">
                  Flying from
                </label>
                <input
                  type="text"
                  id="from"
                  value="DAC"
                  class="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label for="to" class="block mb-2">
                  Flying to
                </label>
                <input
                  type="text"
                  id="to"
                  value="DXB"
                  class="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label for="date" class="block mb-2">
                  Departing
                </label>
                <input
                  type="date"
                  id="date"
                  value="2024-05-19"
                  class="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label for="travelers" class="block mb-2">
                  Travelers
                </label>
                <input
                  type="text"
                  id="travelers"
                  value="1 Passenger, Economy"
                  class="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                class="bg-orange-500 text-white  rounded-md mt-7"
              >
                Modify Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div class="container mx-auto mt-6 px-4"> */}
        <div class="bg-blue-900 text-white text-center"></div>

        <div class="bg-blue-900 text-white text-center">
          <div className="bg-blue-950">19 May, 2024 | DAC ✈ DXB</div>
          <div class="flex justify-center mt-2">
            <div class="flex-1 p-4 text-center border-white">
              SEARCH RESULTS
            </div>
            <div class="flex-1 p-4 text-center border-white">
              PASSENGER DETAILS
            </div>
            <div class="flex-1 p-4 text-center">BOOKING CONFIRMATION</div>
          </div>
        </div>
        {/* </div> */}
      
      <div class="container mx-auto mt-6 px-4">
        {/* <div class="bg-blue-900 text-white text-center"></div>

        <div class="bg-blue-900 text-white text-center">
          <div className="bg-blue-950">19 May, 2024 | DAC ✈ DXB</div>
          <div class="flex justify-center mt-2">
            <div class="flex-1 p-4 text-center border-white">
              SEARCH RESULTS
            </div>
            <div class="flex-1 p-4 text-center border-white">
              PASSENGER DETAILS
            </div>
            <div class="flex-1 p-4 text-center">BOOKING CONFIRMATION</div>
          </div>
        </div> */}

        <div class="flex space-x-6">
          <div class="w-1/4">
            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div class="mb-6">
                <h3 class="font-bold mb-2">Number of Stops</h3>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="nonstop"
                    class="mr-2"
                  />{" "}
                  Non Stop
                </div>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="onestop"
                    class="mr-2"
                  />{" "}
                  One Stop
                </div>
                <div>
                  <input
                    type="radio"
                    name="stops"
                    value="multistop"
                    class="mr-2"
                  />{" "}
                  Multi Stop
                </div>
              </div>
              <div class="mb-6">
                <h3 class="font-bold mb-2">Cabin Type</h3>
                <div>
                  <input type="checkbox" value="economy" class="mr-2" /> Economy
                </div>
                <div>
                  <input type="checkbox" value="premiumeconomy" class="mr-2" />{" "}
                  Premium Economy
                </div>
                <div>
                  <input type="checkbox" value="business" class="mr-2" />{" "}
                  Business
                </div>
                <div>
                  <input type="checkbox" value="first" class="mr-2" /> First
                  Class
                </div>
              </div>
              <div>
                <h3 class="font-bold mb-2">Air Carrier</h3>
                <div>
                  <input type="checkbox" value="bangla" class="mr-2" /> Air
                  Bangla
                </div>
                <div>
                  <input type="checkbox" value="flydubai" class="mr-2" />{" "}
                  FlyDubai
                </div>
                <div>
                  <input type="checkbox" value="emirates" class="mr-2" />{" "}
                  Emirates
                </div>
              </div>
            </div>
          </div>
          <div class="w-3/4">
            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div class="flex justify-between mb-4">
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
                  <button class="bg-orange-500 text-white px-4 py-2 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
              {/* <!-- Add more flight cards as needed --> */}
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-blue-900 text-white p-6 text-center mt-6">
        <div>
          Corporate Office | Contact Us | About Company | Important Link
        </div>
        <div>Social Media Links</div>
      </footer>
    </main>
  );
}
