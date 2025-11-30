import { MapPin } from 'lucide-react';

export default function Countries() {
  const regions = [
    {
      name: "Sub-Saharan Africa",
      percentage: "21.6%",
      children: "86.6 million",
      description: "The region faces unique challenges including poverty, limited access to education, and conflict. Many children work in agriculture, mining, and domestic service. Communities are working together to create better opportunities.",
      image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      name: "Central and Southern Asia",
      percentage: "5.5%",
      children: "26.3 million",
      description: "Despite economic growth in some areas, many children still work in factories, fields, and as domestic workers. Organizations and governments are implementing programs to support families and improve access to quality education.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      name: "Eastern and South-Eastern Asia",
      percentage: "4.5%",
      children: "24.3 million",
      description: "Rapid industrialization has created both opportunities and challenges. Many children work in manufacturing, agriculture, and service industries. Local initiatives are helping families break the cycle of child labour.",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      name: "Latin America and Caribbean",
      percentage: "7.9%",
      children: "10.5 million",
      description: "Children often work in agriculture, mining, and street vending. Many countries have made significant progress through social programs and education initiatives that support vulnerable families.",
      image: "https://images.pexels.com/photos/8612991/pexels-photo-8612991.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Where Children Need Our Support
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Child labour affects communities across the globe, with certain regions facing greater challenges.
            Understanding where support is needed most helps us work towards meaningful solutions.
          </p>
        </div>

        <div className="space-y-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={region.image}
                    alt={`Children in ${region.name}`}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-amber-700 mr-2" />
                    <h3 className="text-2xl font-bold text-amber-900">{region.name}</h3>
                  </div>

                  <div className="flex gap-6 mb-4">
                    <div className="bg-white rounded-lg px-4 py-2 border-l-4 border-amber-600">
                      <p className="text-sm text-amber-700 font-medium">Rate</p>
                      <p className="text-2xl font-bold text-amber-900">{region.percentage}</p>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-2 border-l-4 border-amber-600">
                      <p className="text-sm text-amber-700 font-medium">Children Affected</p>
                      <p className="text-2xl font-bold text-amber-900">{region.children}</p>
                    </div>
                  </div>

                  <p className="text-amber-800 leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-100 rounded-lg p-8 border-l-4 border-amber-600">
          <h3 className="text-xl font-bold text-amber-900 mb-3">A Note of Hope</h3>
          <p className="text-amber-800 leading-relaxed">
            While these statistics represent serious challenges, they also show us where focused efforts can make the greatest difference.
            Communities, governments, and organizations worldwide are working together to create positive change. Every child removed from
            exploitative work and given the chance to learn and grow represents progress toward a better future for all.
          </p>
        </div>
      </div>
    </div>
  );
}
