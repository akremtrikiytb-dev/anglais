import { Users, TrendingDown, AlertCircle, Globe } from 'lucide-react';

export default function Stats() {
  const statistics = [
    {
      icon: Users,
      number: "160M",
      label: "Children in child labour",
      description: "Nearly 1 in 10 children worldwide"
    },
    {
      icon: AlertCircle,
      number: "79M",
      label: "In hazardous work",
      description: "Putting their health and safety at risk"
    },
    {
      icon: Globe,
      number: "70%",
      label: "Work in agriculture",
      description: "Often in dangerous conditions"
    },
    {
      icon: TrendingDown,
      number: "8.4M",
      label: "Decrease since 2016",
      description: "Progress is possible with effort"
    }
  ];

  return (
    <div className="bg-amber-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Understanding the Scale
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            These numbers represent real children with dreams and potential, deserving of protection and opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-600 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 rounded-full p-3">
                  <stat.icon className="w-8 h-8 text-amber-700" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-900 mb-2">{stat.number}</p>
                <p className="text-lg font-semibold text-amber-800 mb-2">{stat.label}</p>
                <p className="text-sm text-amber-700">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
