import Image from "next/image";


import TeamImg03 from "@/public/images/team-03.jpg";
import TeamImg08 from "@/public/images/team-08.jpg";
import TeamImg13 from "@/public/images/team-13.jpg";
import TeamImg14 from "@/public/images/team-14.jpg";
import TeamImg15 from "@/public/images/team-15.jpg";
import TeamImg16 from "@/public/images/team-16.jpg";
import TeamImg17 from "@/public/images/team-17.jpg";

const teamMembers = [
  {
    image: TeamImg13,
    name: "Vinoth S.",
    role: "CEO and Founder",
  },
  {
    image: TeamImg14,
    name: "Kosta C.",
    role: "Lead Developer",
  },
  {
    image: TeamImg15,
    name: "Hirantha S.",
    role: "UI/UX Designer",
  },
  {
    image: TeamImg03,
    name: "Alyssa K.",
    role: "Project Manager",
  },
  {
    image: TeamImg16,
    name: "Venush D.",
    role: "Video Editor",
  },
  {
    image: TeamImg17,
    name: "Imesh N.",
    role: "Graphic Designer",
  },
  {
    image: TeamImg08,
    name: "Adarsh S.",
    role: "Social Media Manager",
  },

];

export default function Team() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-white font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              The team behind the magic
            </h2>
          </div>
          {/* Members */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-40 text-center md:w-52">
                <div className="relative mb-4 inline-flex before:absolute before:inset-0 before:rounded-full">
                  <Image
                    className="rounded-full"
                    src={member.image}
                    width={80}
                    height={80}
                    alt={`Team member ${member.name}`}
                  />
                </div>
                <div className="mb-1 font-nacelle text-lg text-gray-200">
                  {member.name}
                </div>
                <p className="text-sm text-orange-200/65">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
