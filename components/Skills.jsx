import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { icon: <RiReactjsFill />, name: "React.js" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <RiJavascriptFill />, name: "JavaScript" },
  { icon: <RiHtml5Fill />, name: "HTML5" },
  { icon: <RiCss3Fill />, name: "CSS3" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
];

function Skills() {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 max-w-sm xl:max-w-none">
        {skills.map((skill, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/90 group">
                  <div className="text-3xl group-hover:text-primary group-hover:scale-125 transition-all duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
