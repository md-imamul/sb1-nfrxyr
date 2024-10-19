import React from 'react';
import { Utensils, Stethoscope, UserX, Calendar } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <section id="objectives" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ObjectiveCard
            icon={<Utensils className="h-12 w-12 text-green-600 mb-4" />}
            title="Eradicate Hunger by 2035"
            description="Ensuring that no one goes to bed hungry in the target area by 2035."
          />
          <ObjectiveCard
            icon={<Stethoscope className="h-12 w-12 text-red-600 mb-4" />}
            title="Healthcare for All by 2025"
            description="Guarantee that no one remains without medical treatment by 2025."
          />
          <ObjectiveCard
            icon={<UserX className="h-12 w-12 text-purple-600 mb-4" />}
            title="Drug-Free Youth"
            description="Creating a drug-free youth community."
          />
          <ObjectiveCard
            icon={<Calendar className="h-12 w-12 text-blue-600 mb-4" />}
            title="Annual Self-Sufficiency"
            description="Help at least 10 families become self-sufficient each year."
          />
        </div>
      </div>
    </section>
  );
};

const ObjectiveCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Objectives;