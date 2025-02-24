import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, User, ChevronDown, Wrench } from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MyProject from './components/MyProject';
import Skill from './components/Skill';
import Service from './components/Service';
import Home from './components/First-website';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Home />
      
      {/* Services Section */}
      <section className="py-20 px-4" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Wrench className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Services</h2>
          </div>
          <Service />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-100" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Code2 className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <Skill />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Briefcase className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
            <div className="grid md:grid-cols-2 gap-8">
            <MyProject 
              title="ระบบสั่งอาหารสำหรับร้านอาหาร"
              description="ระบบจัดการร้านอาหารแบบครบวงจรพร้อมการสั่งอาหารผ่าน QR code การติดตามคำสั่งซื้อแบบเรียลไทม์ และการจัดการสินค้าคงคลัง มีฟีเจอร์การจัดการโต๊ะ การปรับแต่งเมนู และการวิเคราะห์ยอดขาย"
              image="../img/image2.png"
              technologies={['React', 'Node.js', 'MySQL', 'Socket.io', 'TypeScript', 'Tailwind CSS']}
              liveLink="https://www.facebook.com/profile.php?id=100018481330637"
              githubLink="https://github.com/example/restaurant-system"
            />
            <MyProject 
              title="ระบบตรวจสอบการชำระเงินอัตโนมัติ"
              description="ระบบตรวจสอบสลิปการโอนเงินอัตโนมัติผ่าน SlipOK API พร้อมการยืนยันการชำระเงินแบบเรียลไทม์ รองรับการตรวจสอบความถูกต้องของสลิป และการจัดการธุรกรรมทางการเงิน"
              image="../img/image.png"
              technologies={['PHP', 'JavaScript', 'HTML', 'CSS', 'SlipOK API', 'MySQL']}
              liveLink="https://www.facebook.com/profile.php?id=100018481330637"
              githubLink="https://github.com/example/payment-verification"
            />
            </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
}

export default App;
