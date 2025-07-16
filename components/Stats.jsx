import CountUp from "react-countup";

function Stats() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-2 sm:gap-8 xl:gap-12">
      <div className="flex gap-4">
        <div className="flex text-5xl font-bold text-accent-hover">
          <CountUp end={2} duration={3} delay={1} className="block w-[32px]" />
          <div>+</div>
        </div>
        <span>
          Years <br /> experience
        </span>
      </div>

      <div className="flex gap-4">
        <div className="flex text-5xl font-bold text-accent-hover">
          <CountUp end={12} duration={5} delay={2} className="block w-[60px]" />
        </div>
        <span>
          Happy <br /> clients
        </span>
      </div>
    </div>
  );
}

export default Stats;
