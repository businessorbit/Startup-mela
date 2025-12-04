import { motion } from "framer-motion";

const agendaData = [
  {
    day: "Day 1",
    schedule: [
      {
        time: "Morning",
        activities: [
          "Opening Keynote: The Future of Innovation",
          "Speaker Session 1: Mastering Early-Stage Funding",
          "Pitching Round (Part 1): Seed Stage Showdown"
        ]
      },
      {
        time: "Afternoon",
        activities: [
          "Ideathon (Kickoff): Problem-Solving Sprint",
          "Speaker Session 2: Building a Global Brand from Day One",
          "Product Launch (Part 1): Disruptor Showcase"
        ]
      },
      {
        time: "Evening",
        activities: [
          "Influencer Show: The Digital Trailblazers",
          "Welcome Mixer: Connect & Collaborate",
          "Comedy Show: Startup Hilarity Night"
        ]
      }
    ]
  },
  {
    day: "Day 2",
    schedule: [
      {
        time: "Morning",
        activities: [
          "Speaker Session 3: Tech Trends Shaping 2026",
          "Product Launch (Part 2): Innovation Reveal",
          "Pitching Round (Part 2): Growth Stage Giants"
        ]
      },
      {
        time: "Afternoon",
        activities: [
          "Ideathon (Finale): Judges' Choice",
          "Speaker Session 4: Scaling Culture in a Remote World",
          "Gaming Tournament: Tech vs. Skill Challenge"
        ]
      },
      {
        time: "Evening",
        activities: [
          "Fashion Show: Future of Techwear",
          "Award Show: Startup Mela 2026 Recognitions",
          "Fireside Chat: What's Next for the Startup Ecosystem"
        ]
      }
    ]
  }
];

const AgendaSection = () => {
  return (
    <section 
      id="agenda"
      data-theme="dark" 
      data-tail="white"
      className="relative w-full bg-black py-24 md:py-32"
      style={{ fontFamily: '"TT Chocolates", sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- Header --- */}
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest text-neutral-500 mb-4 flex items-center gap-2"
          >
            <span className="text-[#a78bfa] font-black tracking-tighter">~~</span> AGENDA
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-10"
          >
            Agenda
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full h-px bg-neutral-800 origin-left"
          />
        </div>

        {/* --- Agenda Layout (Side-by-Side Day & Content) --- */}
        <div className="flex flex-col gap-32">
          {agendaData.map((dayBlock, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-24 relative">
              
              {/* --- Left Column: Sticky Day Label --- */}
              <div className="hidden lg:block relative">
                <div className="sticky top-32">
                  <motion.h3 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-7xl font-bold text-white tracking-tighter leading-none"
                  >
                    {dayBlock.day}
                  </motion.h3>
                </div>
              </div>

              {/* --- Right Column: Schedule Content --- */}
              <div>
                {/* Mobile Day Header */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:hidden text-5xl font-bold text-white mb-10 tracking-tighter"
                >
                  {dayBlock.day}
                </motion.h3>

                {/* Table Headers */}
                <div className="hidden md:grid grid-cols-[180px_1fr] gap-8 mb-8 text-neutral-500 text-sm font-bold uppercase tracking-wider border-b border-neutral-800 pb-4">
                  <span>Time Slot</span>
                  <span>Activity Details</span>
                </div>

                {/* Rows */}
                <div className="flex flex-col gap-12 md:gap-0">
                  {dayBlock.schedule.map((slot, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col md:grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-0 md:py-10 border-b border-neutral-900 last:border-0"
                    >
                      {/* Time Slot */}
                      <div className="md:pt-1">
                        <span className="text-xl font-bold text-white block md:hidden mb-2 text-neutral-500 text-xs uppercase tracking-wide">Time Slot</span>
                        <span className="text-3xl md:text-4xl font-bold text-neutral-500">{slot.time}</span>
                      </div>

                      {/* Activity Details */}
                      <div>
                        <span className="text-xl font-bold text-white block md:hidden mb-3 text-neutral-500 text-xs uppercase tracking-wide">Activity Details</span>
                        <ul className="space-y-6">
                          {slot.activities.map((activity, actIdx) => (
                            <li key={actIdx} className="flex items-start text-lg md:text-xl text-neutral-300 leading-relaxed group">
                              <span className="text-[#a78bfa] font-medium mr-4 mt-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                ~
                              </span>
                              <span className="group-hover:text-white transition-colors duration-300 font-medium">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgendaSection;