import { Heart, Brain, Shield, TrendingDown } from 'lucide-react';

export default function Impact() {
  const impacts = [
    {
      icon: Brain,
      title: "Educational Opportunities Lost",
      description: "When children work instead of attending school, they miss the chance to develop skills and knowledge that could help them build better futures. Education is a powerful tool for breaking cycles of poverty."
    },
    {
      icon: Shield,
      title: "Health and Safety Concerns",
      description: "Many working children face dangerous conditions, exposure to harmful substances, and physical strain beyond their years. Their growing bodies and minds need protection and care during these crucial developmental stages."
    },
    {
      icon: Heart,
      title: "Childhood Experiences",
      description: "Every child deserves time to play, explore, and simply be a child. Work often takes away these precious years, affecting emotional well-being and the development of social skills and creativity."
    },
    {
      icon: TrendingDown,
      title: "Perpetuating Poverty",
      description: "Without education and proper development, children who work are more likely to face poverty as adults, continuing a difficult cycle for future generations. Breaking this cycle requires compassion and sustained support."
    }
  ];

  return (
    <div className="bg-amber-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            The Impact on Young Lives
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Understanding the effects of child labour helps us recognize why protecting childhood is so important.
            These challenges affect not just individual children, but entire communities and future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <impact.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">{impact.title}</h3>
                  <p className="text-amber-800 leading-relaxed">{impact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Children in school"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Why This Matters</h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              Behind every statistic is a child with dreams, potential, and the right to a safe and nurturing childhood.
              When we work to eliminate child labour, we're not just addressing an economic issue – we're investing in
              human dignity, potential, and the future of our global community.
            </p>
            <p className="text-amber-800 leading-relaxed">
              The good news is that change is possible. With education, economic support for families, and strong policies,
              communities around the world are making real progress. Every effort, no matter how small, contributes to
              creating a world where children can thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
