import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Users, Target, TrendingUp } from "lucide-react";

// Team data
const teamMembers = [
  {
    name: "Walter White",
    role: "Chief Executive Officer",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    description: "Aut maiores voluptates amet et quis praesentium qui senda para",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "William Anderson",
    role: "CTO",
    description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Amanda Jepson",
    role: "Accountant",
    description: "Dolorum tempora officiis odit laborum officiis et et accusamus",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
];

// Company features data
const companyFeatures = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Expert Team",
    description:
      "Our diverse team of experts brings a wealth of experience and innovation to every project."
  },
  {
    icon: <Target className="h-8 w-8 text-blue-500" />,
    title: "Client-Focused",
    description:
      "We prioritize our clients needs, ensuring tailored solutions and exceptional service."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Continuous Growth",
    description:
      "We are committed to ongoing learning and improvement to stay at the forefront of our industry."
  }
];

const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#2B4C7E] mb-4 inline-block relative">
              ABOUT US
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400"></span>
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Discover our story, mission, and the values that drive us to deliver
              exceptional solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-semibold text-[#2B4C7E] mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, our company has been at the forefront of innovation in our industry.
                We started with a simple idea: to make complex processes simple and accessible to everyone. 
                Over the years, we've grown from a small startup to a global leader, always staying true to our core values of integrity, innovation, and customer-centricity.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries and set new standards in our field. Our team of dedicated professionals works tirelessly to bring cutting-edge solutions to our clients, helping them overcome challenges and achieve their goals.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-semibold text-[#2B4C7E] mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Our mission is to empower businesses and individuals with innovative solutions that drive growth and success. We are committed to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Delivering exceptional value to our clients</li>
                <li>Fostering a culture of continuous learning and improvement</li>
                <li>Promoting sustainability and social responsibility in all our operations</li>
                <li>Building long-lasting relationships based on trust and mutual respect</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 md:px-6 bg-white pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B4C7E] mb-4 inline-block relative">
              TEAM
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400"></span>
            </h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md transition-transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-[120px] h-[120px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-[#2B4C7E] mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-3">{member.role}</p>
                    <p className="text-gray-500 mb-4">{member.description}</p>
                    <div className="flex justify-center sm:justify-start gap-4">
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="text-gray-400 hover:text-[#2B4C7E] transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          className="text-gray-400 hover:text-[#2B4C7E] transition-colors"
                          aria-label={`${member.name}'s Facebook`}
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          className="text-gray-400 hover:text-[#2B4C7E] transition-colors"
                          aria-label={`${member.name}'s Instagram`}
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-gray-400 hover:text-[#2B4C7E] transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
