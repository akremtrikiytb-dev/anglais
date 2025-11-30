import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-amber-200" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Every Child Deserves<br />
            <span className="text-amber-200">A Childhood</span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Around the world, millions of children are working instead of learning, playing, and growing.
            Together, we can help create a future where every child has the opportunity to thrive.
          </p>

          <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3 border border-amber-200 border-opacity-30">
            <p className="text-amber-100 text-lg">
              <span className="font-bold text-2xl text-white">160 million</span> children worldwide are engaged in child labour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
