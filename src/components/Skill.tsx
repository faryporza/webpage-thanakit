import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs } from 'react-icons/bs';
import { FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';

interface SkillItemProps {
  name: string;
  icon: JSX.Element;
  proficiency: number;
}

const SkillItem = ({ name, icon }: SkillItemProps) => (
  <div className="group relative flex items-center justify-center p-6">
    <div className="text-5xl text-gray-600 transition-all duration-300 
                    group-hover:text-blue-600">
      {icon}
    </div>
    <div className="absolute -bottom-2 opacity-0 transition-all duration-300 
                    group-hover:opacity-100 group-hover:translate-y-0 
                    translate-y-2 text-sm font-medium text-gray-600">
      {name}
    </div>
  </div>
);

const Skill = () => {
  const skills: SkillItemProps[] = [
    { name: 'React', icon: <FaReact className="animate-spin-slow" />, proficiency: 90 },
    { name: 'Node.js', icon: <FaNodeJs className="animate-float" />, proficiency: 85 },
    { name: 'MySQL', icon: <SiMysql className="animate-pulse-slow" />, proficiency: 80 },
    { name: 'PHP', icon: <FaPhp className="animate-bounce-slow" />, proficiency: 75 },
    { name: 'CSS', icon: <BsFiletypeCss className="animate-wiggle" />, proficiency: 95 },
    { name: 'JavaScript', icon: <BsFiletypeJs className="animate-float-delayed" />, proficiency: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="animate-spin-reverse-slow" />, proficiency: 85 },
    { name: 'HTML', icon: <BsFiletypeHtml className="animate-pulse-slow" />, proficiency: 95 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="animate-bounce-slow" />, proficiency: 90 },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white p-6 rounded-xl shadow-lg">
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </div>
  );
};

export default Skill;
