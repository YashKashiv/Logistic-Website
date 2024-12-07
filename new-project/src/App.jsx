import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const TrackOrder = () => {
  const [activeTab, setActiveTab] = useState('Mobile');
  const tabs = ['Mobile', 'AWB', 'Order Id', 'LRN'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 text-center ${
              activeTab === tab
                ? 'border-b-2 border-blue-700 text-blue-700'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Track your order through</h2>
        <input
          type="text"
          placeholder={
            activeTab === 'Mobile'
              ? 'Enter your mobile number'
              : `Enter your ${activeTab.toLowerCase()}`
          }
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Get OTP
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm mb-2">
          Live tracking updates & extra support on our App
        </p>
        <div className="flex justify-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10"
          />
          <img
            src="https://www.delhivery.com/_nuxt/img/appstore-icon-white.b50ab14.svg"
            alt="App Store"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

const Home = () => (
  <section className="bg-gradient-to-br from-blue-300 to-purple-400 min-h-screen flex items-center justify-center px-6">
    <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl">
      {}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tri-City Logistics</h1>
        <p className="text-lg text-gray-700 mb-4">
          We are a fully integrated logistics services provider in Chandigarh, Panchkula, and Mohali.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Explore our services to experience seamless logistics solutions tailored to your needs.
        </p>
        <p className="text-lg text-gray-700">
        We provide customised solutions to serve your factory to retailer supply chain end-to-end using our integrated warehousing, technology capabilities and logistics network that improve reliability and reduce cost.
        </p>
      </div>

      {}
      <div className="md:w-1/2 flex justify-center">
        <TrackOrder />
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="bg-gradient-to-br from-blue-300 to-purple-400 min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-lg text-gray-600">
        We are committed to safeguarding the confidentiality, integrity, and availability of all physical and electronic information assets of the organization.
        We ensure that the regulatory, operational, and contractual requirements are fulfilled.
      </p>
    </div>
  </section>
);

const Services = () => (
  <section className="bg-gradient-to-br from-blue-300 to-purple-400 min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="text-lg text-gray-600">
        We provide an integrated logistics solution built on Express Parcel, Warehousing, Freight, and Software value-added services that help brands deliver faster and provide a superior experience.
      </p>
    </div>
  </section>
);

const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4 sticky top-0 z-10 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl flex italic font-bold">
        Tri-City Logistics
        <img className="h-8 w-15 mx-3" src="logo.png" alt="Logo" />
      </h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 mt-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {}
        <div>
          <h3 className="font-bold text-lg mb-4">SERVICES</h3>
          <ul>
            <li>Express Parcel</li>
            <li>Warehousing</li>
            <li>Part Truckload</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="font-bold text-lg mb-4">SOLUTIONS</h3>
          <ul>
            <li>D2C Brands</li>
            <li>Personal Courier</li>
            <li>B2B Enterprises</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="font-bold text-lg mb-4">PARTNERS</h3>
          <ul>
            <li>Franchise Opportunities</li>
            <li>Delivery Partner</li>
            <li>Fleet Owner</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="font-bold text-lg mb-4">COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Governance</li>
            <li>Investor Relations</li>
            <li>Careers</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="font-bold text-lg mb-4">GET IN TOUCH</h3>
          <ul>
            <li>Support</li>
            <li>Store Locator</li>
            <li>Rate Calculator</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="font-bold text-lg mb-4">POLICIES</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Information Security Policy: we are committed to safeguarding the confidentiality, integrity, and availability of all physical and electronic information assets of the organization.
        </p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer /> {}
    </Router>
  );
};

export default App;