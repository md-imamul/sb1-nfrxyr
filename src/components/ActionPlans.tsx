import React from 'react';
import { DollarSign, Users, BookOpen, GraduationCap } from 'lucide-react';

const ActionPlans: React.FC = () => {
  return (
    <section id="action-plans" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Action Plans</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ActionPlanCard
            icon={<DollarSign className="h-12 w-12 text-green-600 mb-4" />}
            title="Al-Ihsan Fund"
            description="Collect funds and provide financial assistance for various social development projects and implement self-sufficiency programs for local people."
          />
          <ActionPlanCard
            icon={<Users className="h-12 w-12 text-blue-600 mb-4" />}
            title="Zakat Coordination Project"
            description="Coordinate and distribute Zakat funds effectively within the community, helping at least 10 families become self-sufficient each year."
          />
          <ActionPlanCard
            icon={<BookOpen className="h-12 w-12 text-red-600 mb-4" />}
            title="Al-Ihsan Islamic Center"
            description="Serve as the central hub for all activities and provide Islamic education to the community."
          />
          <ActionPlanCard
            icon={<GraduationCap className="h-12 w-12 text-purple-600 mb-4" />}
            title="Educational Support"
            description="Provide educational assistance to underprivileged children, organize Iftar events for the poor during Ramadan, and distribute Eid gifts to children."
          />
        </div>
      </div>
    </section>
  );
};

const ActionPlanCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ActionPlans;