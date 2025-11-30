import { BookOpen, Users, Home, Sparkles } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: BookOpen,
      title: "Quality Education Access",
      description: "Making education free, accessible, and relevant helps ensure children can attend school instead of working. Quality education provides children with opportunities to build better futures."
    },
    {
      icon: Home,
      title: "Family Support Programs",
      description: "Many families rely on their children's income out of necessity. Social programs, financial assistance, and economic opportunities for adults help families meet their needs without child labour."
    },
    {
      icon: Users,
      title: "Community Awareness",
      description: "Educating communities about children's rights and the importance of childhood creates cultural shifts. When communities value education and child protection, lasting change becomes possible."
    },
    {
      icon: Sparkles,
      title: "Policy and Enforcement",
      description: "Strong laws protecting children, combined with fair enforcement and support for families, create environments where children can grow safely and pursue their education."
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Creating Positive Change
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Ending child labour requires compassionate, comprehensive approaches that address root causes
            while supporting both children and their families. Together, we can build a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-lg p-8 border-t-4 border-amber-600 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 mr-4 flex-shrink-0 shadow-md">
                  <solution.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">{solution.title}</h3>
                  <p className="text-amber-800 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-xl shadow-xl overflow-hidden text-white">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/8364028/pexels-photo-8364028.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Happy children learning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Hope for the Future</h3>
              <p className="text-amber-100 leading-relaxed mb-4">
                Progress is happening. Since 2000, the number of children in child labour has decreased by 94 million.
                This shows that when communities, governments, and organizations work together with dedication and compassion,
                real change is possible.
              </p>
              <p className="text-amber-100 leading-relaxed mb-6">
                Every child deserves the chance to learn, play, and dream. By continuing to support education, strengthen
                families, and build awareness, we move closer to a world where every child can experience the joy and
                security of childhood.
              </p>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-amber-200 border-opacity-30">
                <p className="text-amber-100 italic">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-amber-200 text-sm mt-2">– Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
