import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';

interface TimelinePhase {
  phase: string;
  name: string;
  weeks: string;
  tasks: string[];
  status: 'completed' | 'active' | 'pending';
}

const phases: TimelinePhase[] = [
  {
    phase: 'PHASE 1',
    name: 'Pre-Application',
    weeks: 'Week 1-2',
    tasks: ['ODEQ pre-application meeting', 'EPA Generator ID application', 'Initial site assessment'],
    status: 'completed',
  },
  {
    phase: 'PHASE 2',
    name: 'Permitting',
    weeks: 'Week 2-8',
    tasks: ['Bryan County zoning application', 'Air quality permit', 'Building permit preparation', 'Environmental review'],
    status: 'active',
  },
  {
    phase: 'PHASE 3',
    name: 'Approvals',
    weeks: 'Week 8-12',
    tasks: ['Zoning approval', 'Permit reviews', 'Final inspections', 'Utility agreements'],
    status: 'pending',
  },
  {
    phase: 'PHASE 4',
    name: 'Construction',
    weeks: 'Week 12-24',
    tasks: ['Site preparation', 'Foundation work', 'Steel erection', 'MEP installation'],
    status: 'pending',
  },
  {
    phase: 'PHASE 5',
    name: 'Equipment',
    weeks: 'Week 24-36',
    tasks: ['Equipment delivery', 'Installation', 'Testing & commissioning', 'Staff training'],
    status: 'pending',
  },
  {
    phase: 'PHASE 6',
    name: 'Operations',
    weeks: 'Week 36+',
    tasks: ['Soft launch', 'Full production', 'Continuous improvement'],
    status: 'pending',
  },
];

const milestones = [
  { date: 'Q1 2026', event: 'Project Initiation', complete: false },
  { date: 'Q2 2026', event: 'Permits Approved', complete: false },
  { date: 'Q3 2026', event: 'Construction Start', complete: false },
  { date: 'Q1 2027', event: 'Equipment Installation', complete: false },
  { date: 'Q2 2027', event: 'Facility Operational', complete: false },
];

export default function Timeline() {
  return (
    <>
      <PageHeader
        section="ABOUT // TIMELINE"
        title="PROJECT"
        highlight="TIMELINE"
        description="From concept to operation - our development roadmap."
      />

      {/* Milestones */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {milestones.map((m, index) => (
              <motion.div
                key={m.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-2 ${
                  m.complete ? 'bg-neon border-neon text-slate-950' : 'border-muted text-muted'
                }`}>
                  {m.complete ? (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="font-mono text-xs">{index + 1}</span>
                  )}
                </div>
                <div className="font-mono text-sm text-white">{m.date}</div>
                <div className="text-xs text-muted">{m.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gantt Chart */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              DETAILED <span className="text-neon">SCHEDULE</span>
            </h2>
          </motion.div>

          <div className="bg-slate-900/50 border border-neon/20 rounded-lg p-6 overflow-x-auto">
            {/* Header */}
            <div className="font-mono text-xs text-neon mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-neon animate-pulse" />
              SYSTEM://PROJECT_GANTT.exe
            </div>

            {/* Week Headers */}
            <div className="grid grid-cols-[200px_1fr] gap-4 mb-4 min-w-[800px]">
              <div className="font-mono text-xs text-muted">PHASE</div>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="font-mono text-[10px] text-muted text-center">
                    M{i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-4 min-w-[800px]">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-[200px_1fr] gap-4 items-center"
                >
                  <div>
                    <div className="font-mono text-sm text-white">{phase.phase}</div>
                    <div className="text-xs text-muted">{phase.name}</div>
                  </div>
                  <div className="grid grid-cols-12 gap-1 h-10">
                    {Array.from({ length: 12 }, (_, monthIndex) => {
                      // Simplified active logic based on phase index
                      const startMonth = index * 2;
                      const endMonth = startMonth + 2;
                      const isActive = monthIndex >= startMonth && monthIndex < endMonth;

                      return (
                        <div
                          key={monthIndex}
                          className={`h-full rounded-sm transition-all ${
                            isActive
                              ? phase.status === 'completed'
                                ? 'bg-neon'
                                : phase.status === 'active'
                                ? 'bg-amber animate-pulse'
                                : 'bg-muted/30'
                              : 'bg-slate-800/30'
                          }`}
                        />
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex gap-6 mt-8 pt-4 border-t border-muted/20">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-neon rounded-sm" />
                <span className="font-mono text-xs text-muted">COMPLETED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-amber rounded-sm animate-pulse" />
                <span className="font-mono text-xs text-muted">ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted/30 rounded-sm" />
                <span className="font-mono text-xs text-muted">PENDING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Details */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              PHASE <span className="text-neon">DETAILS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border p-6 ${
                  phase.status === 'completed'
                    ? 'border-neon/50 bg-neon/5'
                    : phase.status === 'active'
                    ? 'border-amber/50 bg-amber/5'
                    : 'border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-mono text-xs px-2 py-0.5 ${
                    phase.status === 'completed'
                      ? 'bg-neon/20 text-neon'
                      : phase.status === 'active'
                      ? 'bg-amber/20 text-amber'
                      : 'bg-gray-700 text-muted'
                  }`}>
                    {phase.status.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-muted">{phase.weeks}</span>
                </div>
                <div className="font-mono text-lg text-white mb-1">{phase.phase}</div>
                <div className="text-muted mb-4">{phase.name}</div>
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        phase.status === 'completed' ? 'bg-neon' : 'bg-gray-600'
                      }`} />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
