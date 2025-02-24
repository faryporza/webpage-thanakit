import { Github, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ติดต่อ</h3>
            <div className="space-y-2">
              <p>ธนกฤต ชูเชิด</p>
              <a href="mailto:tanakit200663@gmail.com" 
                className="block hover:text-blue-300 transition-colors">
                tanakit200663@gmail.com
              </a>
              <p>เชียงใหม่, ประเทศไทย</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">เมนูลัด</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-300 transition-colors">บริการ</a></li>
              <li><a href="#skills" className="hover:text-blue-300 transition-colors">ทักษะ</a></li>
              <li><a href="#projects" className="hover:text-blue-300 transition-colors">ผลงาน</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">โซเชียล</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/faryporza" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100018481330637" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} ธนกฤต ชูเชิด. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
