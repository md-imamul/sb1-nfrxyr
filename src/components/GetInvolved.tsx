import React from 'react';
import { DollarSign, Users, Share2 } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <section id="get-involved" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <InvolvementCard
            icon={<DollarSign className="h-12 w-12 text-green-600 mb-4" />}
            title="Donate"
            description="Support our programs and help us make a difference in the lives of those in need."
            action="Donate Now"
            link="#donate"
          />
          <InvolvementCard
            icon={<Users className="h-12 w-12 text-blue-600 mb-4" />}
            title="Volunteer"
            description="Join our team of dedicated volunteers and contribute your time and skills to our cause."
            action="Join Us"
            link="#volunteer"
          />
          <InvolvementCard
            icon={<Share2 className="h-12 w-12 text-purple-600 mb-4" />}
            title="Spread Awareness"
            description="Help us reach more people by sharing our mission and impact with your network."
            action="Share"
            link="#share"
          />
        </div>
      </div>
    </section>
  );
};

const InvolvementCard: React.FC<{ icon: React.ReactNode; title: string; description: string; action: string; link: string }> = ({ icon, title, description, action, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">{action}</a>
    </div>
  );
};

export default GetInvolved;