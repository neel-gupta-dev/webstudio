import Link from "next/link";
import GridBackground from "../components/GridBackground";
import MobileBackground from "../components/MobileBackground";
import ContactSection from "../components/ContactSection";
import About from "../components/About";
import TechStack from "../components/TechStack";

const services = [
  {
    title: "Basic Website",
    price: "₹10,000",
    description: "Perfect for personal portfolios and small businesses.",
    features: ["Responsive Design", "5 Pages", "Contact Form", "SEO Basic"],
  },
  {
    title: "Dynamic Website",
    price: "₹25,000",
    description: "Ideal for blogs and content-heavy websites.",
    features: ["CMS Integration", "Admin Panel", "User Authentication", "SEO Advanced"],
  },
  {
    title: "E-commerce Store",
    price: "₹50,000",
    description: "Start selling your products online with ease.",
    features: ["Product Management", "Payment Gateway", "Order Tracking", "Analytics"],
  },
  {
    title: "Custom Web App",
    price: "₹80,000+",
    description: "Tailored solutions for complex business needs.",
    features: ["Custom Functionality", "API Integration", "Scalable Architecture", "Premium Support"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div id="home" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="hidden md:block w-full h-full">
            <GridBackground />
          </div>
          <div className="block md:hidden w-full h-full">
            <MobileBackground />
          </div>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blue-600">WebStudio</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A modern, dynamic, and responsive web application built with Next.js and Tailwind CSS.
            Experience smooth transitions and a beautiful user interface.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/#about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/#services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Services Section */}
      <div id="services" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional web design solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 hover:transform hover:scale-105 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
