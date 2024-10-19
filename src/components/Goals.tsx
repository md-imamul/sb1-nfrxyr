import React from 'react';
import { Target, Home, Book, Heart } from 'lucide-react';

const Goals: React.FC = () => {
  return (
    <section id="goals" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Goals</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <GoalCard
            icon={<Target className="h-12 w-12 text-blue-600 mb-4" />}
            title="Human Basic Needs"
            description="To establish basic human rights such as food, clothing, shelter, healthcare, and education for all."
          />
          <GoalCard
            icon={<Home className="h-12 w-12 text-blue-600 mb-4" />}
            title="Harmonious Village"
            description="To create an interest-free and harmonious village community."
          />
          <GoalCard
            icon={<Book className="h-12 w-12 text-blue-600 mb-4" />}
            title="Islamic Values"
            description="To instill Islamic values in the youth, encouraging them to become future leaders."
          />
          <GoalCard
            icon={<Heart className="h-12 w-12 text-blue-600 mb-4" />}
            title="Community Well-being"
            description="To foster a just society by promoting good deeds and discouraging wrongdoings."
          />
        </div>
      </div>
    </section>
  );
};

const GoalCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Goals;