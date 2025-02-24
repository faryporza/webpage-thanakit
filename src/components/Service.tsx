import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Layout, 
  Settings 
} from 'lucide-react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceItem = ({ title, description, icon }: ServiceItemProps) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Service = () => {
const services: ServiceItemProps[] = [
    {
        title: "พัฒนาเว็บไซต์",
        description: "สร้างเว็บแอปพลิเคชันที่ตอบสนองและไดนามิกด้วยเฟรมเวิร์กและเทคโนโลยีสมัยใหม่",
        icon: <Code2 size={28} />
    },
    {
        title: "แก้ไขบัค",
        description: "ตรวจสอบและแก้ไขข้อผิดพลาดในโค้ด เพื่อให้แอปพลิเคชันทำงานได้อย่างถูกต้องและมีประสิทธิภาพ",
        icon: <Smartphone size={28} />
    },
    {
        title: "ทำเว็บไซต์หน้าเดียว",
        description: "พัฒนาเว็บไซต์แบบหน้าเดียวที่มีการโหลดข้อมูลแบบไดนามิก สำหรับบริษัท, ร้านค้า, ร้านอาหาร, และอื่นๆ",
        icon: <Globe size={28} />
    },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceItem 
          key={service.title} 
          {...service} 
        />
      ))}
    </div>
  );
};

export default Service;
