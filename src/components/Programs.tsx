import React from 'react';
import { DollarSign, BookOpen, Heart, Briefcase } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProgramCard
            icon={<DollarSign className="h-12 w-12 text-blue-600 mb-4" />}
            title="Al-Ihsan Fund"
            description="Collect funds and provide financial assistance for social development projects and self-sufficiency programs."
          />
          <ProgramCard
            icon={<BookOpen className="h-12 w-12 text-green-600 mb-4" />}
            title="Zakat Coordination Project"
            description="Coordinate and distribute Zakat funds effectively, helping families become self-sufficient."
          />
          <ProgramCard
            icon={<Heart className="h-12 w-12 text-red-600 mb-4" />}
            title="Al-Ihsan Islamic Center"
            description="Serve as the central hub for activities and provide Islamic education to the community."
          />
          <ProgramCard
            icon={<Briefcase className="h-12 w-12 text-purple-600 mb-4" />}
            title="Educational Support"
            description="Provide educational assistance to underprivileged children and organize Iftar events during Ramadan."
          />
        </div>
      </div>
    </section>
  );
};

const ProgramCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Programs;