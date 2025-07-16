const journey = [
  {
    years: "2025 - present",
    role: "Fullstack Developer",
    institution: "AnyApp",
  },
  {
    years: "2022 - 2025",
    role: "Student",
    institution: "Handesaim TLV",
  },
  {
    years: "2019 - 2025",
    role: "Webmaster & Back-Office",
    institution: "Ecosupp Health LTD.",
  },
  {
    years: "2017 - 2019",
    role: "Store Manager",
    institution: "Kesem HaTeva",
  },
];

function Journey() {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { years, role, institution } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            <div className="flex flex-col w-max items-center justify-center">
              <div className="w-3 h-3 bg-accent-hover/90 rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <h4 className="h4 mb-2 text-shadow-2xs text-shadow-accent-hover/70">
                {role}
              </h4>
              <p className="text-lg text-white/80">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Journey;
