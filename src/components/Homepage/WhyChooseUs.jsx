import { FiTruck, FiShield, FiHeadphones, FiRefreshCw } from "react-icons/fi";

export default function WhyChooseUs() {
  const features = [
    {
      icon: FiTruck,
      title: "Nationwide Delivery",
      description: "Bring your next car to your driveway",
    },
    {
      icon: FiShield,
      title: "Certified Quality",
      description: "Every vehicle passes a 150-point inspection",
    },
    {
      icon: FiHeadphones,
      title: "Concierge Support",
      description: "Real people, real answers, every step",
    },
    {
      icon: FiRefreshCw,
      title: "Trade-In Ready",
      description: "Get a fair offer in minutes",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Why Choose Kodembe?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="w-16 h-16 mx-auto text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
