export default function Financing() {
  const steps = [
    {
      title: "Apply Online",
      description: "Short, secure pre-approval with no impact to your credit.",
    },
    {
      title: "Choose Your Vehicle",
      description: "Browse our inventory and lock in transparent pricing.",
    },
    {
      title: "Drive Home",
      description: "Pick up in-store or schedule delivery at your convenience.",
    },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white" id="financing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-3">
              Financing Made Simple
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Financing For Every Driver
            </h2>
            <p className="text-white/80 mb-6">
              Get competitive rates, clear terms, and personalized options with our
              local finance team. We work with top lenders to make your next ride
              affordable and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition duration-150">
                Get Pre-Approved
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition duration-150">
                Trade-In Estimate
              </button>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">How It Works</h3>
            <div className="grid grid-cols-1 gap-5">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-white text-gray-900 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
