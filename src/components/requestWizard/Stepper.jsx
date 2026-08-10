import {
  FiCheck,
  FiLayers,
  FiBox,
  FiUpload,
  FiUser,
  FiClipboard,
} from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Options",
    icon: <FiLayers />,
  },
  {
    id: 2,
    title: "Upload",
    icon: <FiUpload />,
  },
  {
    id: 3,
    title: "Details",
    icon: <FiUser />,
  },
  {
    id: 4,
    title: "Review",
    icon: <FiClipboard />,
  },
  {
    id: 5,
    title: "Success",
    icon: <FiCheck />,
  },
];

const Stepper = ({ currentStep }) => {
  return (
    <section className="py-8">

      <div className="relative">

        {/* Line */}

        <div className="absolute left-0 right-0 top-7 hidden md:block h-[2px] bg-white/10" />

        <div
          className="absolute left-0 top-7 hidden md:block h-[2px] bg-sky-400 transition-all duration-700"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Steps */}

        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-5">

          {steps.map((step) => {
            const completed = step.id < currentStep;
            const active = step.id === currentStep;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-sky-400 bg-sky-500 text-white"
                        : active
                        ? "border-sky-400 bg-sky-500/20 text-sky-300"
                        : "border-white/10 bg-[#0b1627] text-slate-500"
                    }
                  `}
                >
                  {completed ? <FiCheck /> : step.icon}
                </div>

                <p
                  className={`mt-4 text-sm font-medium ${
                    active
                      ? "text-white"
                      : completed
                      ? "text-sky-300"
                      : "text-slate-500"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Stepper;