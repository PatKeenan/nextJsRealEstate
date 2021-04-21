import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-wrap blue-bg h-auto mt-5 justify-center p-6 md:space-x-10 align-middle">
      <div className="flex flex-row w-full justify-evenly align-middle ">
        <div className="logo">
          <a
            href="https://www.heritagehousesothebysrealty.com/eng"
            target="_blank"
          >
            <img src="/smallHHSIRlogo.jpg" alt="" height="200px" width="auto" />
          </a>
        </div>
        <div>
          <h4 className="text-gray-400 underline">Pages</h4>
          <ul
            className="flex flex-col text-gray-600"
            style={{ fontSize: "12px" }}
          >
            <li>Home</li>
            <li>Contact</li>
            <li>Listings</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div
        className="w-full max-w-4xl text-gray-600 text-center"
        style={{ fontSize: "9px" }}
      >
        Heritage House Sotheby’s International Realty offers exemplary service
        to real estate buyers and sellers in Central Monmouth County, New
        Jersey. We specialize in single family residential, multi-family,
        commercial, new construction, rental, retirement, waterfront, and
        vacation properties, as well as land & acreage. Our real estate brokers
        and agents are local residents with in-depth knowledge of the local real
        estate markets; including the towns of Aberdeen, Allenhurst, Asbury
        Park, Atlantic Highlands, Belford, Colts Neck, Deal, Eatontown,
        Englishtown, Fair Haven, Farmingdale, Freehold Borough, Freehold
        Township, Hazlet, Highlands, Holmdel, Howell, Interlaken, Jackson,
        Keansburg, Keyport, Leonardo, Lincroft, Little Silver, Locust, Long
        Branch, Manalapan, Marlboro, Matawan, Middletown, Millstone, Monmouth
        Beach, Monroe, Morganville, Navesink, Oakhurst, Ocean, Oceanport, Port
        Monmouth, Red Bank, Rumson, Sea Bright, Shrewsbury, Tinton Falls, Union
        Beach, Wall, and West Long Branch. Positioned along the Atlantic Ocean
        and the Shrewsbury and Navesink Rivers, central New Jersey is within an
        hour proximity to New York City and Philadelphia. Monmouth, Middlesex &
        Ocean counties offer beautiful beaches, boating, fishing, rivers, parks,
        golf courses, and farmlands; as well as rich in the arts and culture,
        and abundant with great shopping and fine dining. Sotheby’s
        International Realty ® and the Sotheby’s International Realty Logo are
        service marks licensed to Sotheby’s International Realty Affiliates LLC
        and used with permission. Mary Burke Realty fully supports the
        principles of the Fair Housing Act and the Equal Opportunity Act. Each
        franchise is independently owned and operated. Any services or products
        provided by independently owned and operated franchisees are not
        provided by, affiliated with or related to Sotheby’s International
        Realty Affiliates LLC nor any of its affiliated companies.
      </div>
    </div>
  );
};

export default Footer;
