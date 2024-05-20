import React from "react";

export default function Sidebar() {
  return (
    <div className="md:w-1/4 sm:w-1/2">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="mb-6">
          <h3 className="font-bold mb-2">Number of Stops</h3>
          <div>
            <input type="radio" name="stops" value="nonstop" className="mr-2" />
            Non Stop
          </div>
          <div>
            <input type="radio" name="stops" value="onestop" className="mr-2" />
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
            <input type="checkbox" value="premiumeconomy" className="mr-2" />
            Premium Economy
          </div>
          <div>
            <input type="checkbox" value="business" className="mr-2" />
            Business
          </div>
          <div>
            <input type="checkbox" value="first" className="mr-2" /> First Class
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Air Carrier</h3>
          <div>
            <input type="checkbox" value="bangla" className="mr-2" /> Air Bangla
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
  );
}
