import { Heart, Users, Globe, BookOpen, Shield, TrendingDown } from 'lucide-react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Countries from './components/Countries';
import Impact from './components/Impact';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Countries />
      <Impact />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;
