import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Gharchala Al-Ishan Foundation</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              The Gharchala Al-Ishan Foundation is a nonprofit, non-political organization dedicated to fostering Islamic values and community well-being. We aim to build a just society by promoting good deeds and discouraging wrongdoings.
            </p>
            <p className="text-lg mb-4">
              Our mission is to serve humanity and alleviate poverty through sustainable solutions and Islamic principles. We are committed to empowering individuals and communities for a better future.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Community empowerment" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;