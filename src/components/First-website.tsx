import { Github, Facebook, Mail, ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white" id="home">
        
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Thanakit C.</h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-8">Web Developer</p>
        <div className="flex justify-center space-x-6">
            <a href="https://github.com/faryporza" className="text-white hover:text-blue-300 transition-colors">
            <Github size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100018481330637" className="text-white hover:text-blue-300 transition-colors">
            <Facebook size={24} />
            </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
    </section>
  );
};

export default Home;
