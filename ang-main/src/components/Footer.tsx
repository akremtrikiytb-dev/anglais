import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-amber-200" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Every Child Matters</h3>
          <p className="text-amber-200 max-w-2xl mx-auto mb-6 leading-relaxed">
            This website serves as an educational resource to raise awareness about child labour worldwide.
            The information presented is based on data from organizations including the International Labour Organization (ILO)
            and UNICEF.
          </p>
          <p className="text-amber-300 text-sm">
            Together, we can create a world where every child has the opportunity to learn, grow, and thrive.
          </p>
        </div>
      </div>
    </footer>
  );
}
