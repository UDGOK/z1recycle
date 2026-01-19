import { motion } from 'framer-motion';

interface TimelineItem {
  week: string;
  task: string;
  status: 'completed' | 'active' | 'pending';
}

const timeline: TimelineItem[] = [
  { week: 'WEEK 1-2', task: 'ODEQ Pre-Application Meeting', status: 'completed' },
  { week: 'WEEK 2-4', task: 'EPA Generator ID Application', status: 'completed' },
  { week: 'WEEK 4-8', task: 'Bryan County Zoning Application', status: 'active' },
  { week: 'WEEK 8-12', task: 'Permit Approvals & Review', status: 'pending' },
  { week: 'WEEK 12-16', task: 'Construction Authorization', status: 'pending' },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber tracking-widest mb-2">
            // SECTION_05
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            PROJECT <span className="text-neon">TIMELINE</span>
          </h2>
          <p className="text-muted max-w-2xl">
            Regulatory approval pathway and construction milestones.
          </p>
        </motion.div>

        {/* Retro Gantt Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-neon/20 rounded-lg p-6 md:p-8 overflow-x-auto"
        >
          {/* Header */}
          <div className="font-mono text-xs text-neon mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-neon animate-pulse" />
            SYSTEM://PROJECT_TIMELINE.exe
          </div>

          {/* Week headers */}
          <div className="grid grid-cols-[200px_1fr] gap-4 mb-4 min-w-[600px]">
            <div className="font-mono text-xs text-muted">TASK_ID</div>
            <div className="grid grid-cols-16 gap-1">
              {Array.from({ length: 16 }, (_, i) => (
                <div key={i} className="font-mono text-[10px] text-muted text-center">
                  W{i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline rows */}
          <div className="space-y-3 min-w-[600px]">
            {timeline.map((item, index) => (
              <motion.div
                key={item.task}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-[200px_1fr] gap-4 items-center"
              >
                <div className="font-mono text-sm text-white truncate">{item.task}</div>
                <div className="grid grid-cols-16 gap-1 h-8">
                  {Array.from({ length: 16 }, (_, weekIndex) => {
                    const weekNum = weekIndex + 1;
                    const [start, end] = item.week.replace('WEEK ', '').split('-').map(Number);
                    const isActive = weekNum >= start && weekNum <= end;
                    
                    return (
                      <div
                        key={weekIndex}
                        className={`h-full transition-all ${
                          isActive
                            ? item.status === 'completed'
                              ? 'bg-neon'
                              : item.status === 'active'
                              ? 'bg-amber animate-pulse'
                              : 'bg-muted/30'
                            : 'bg-slate-800/50'
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
              <div className="w-4 h-4 bg-neon" />
              <span className="font-mono text-xs text-muted">COMPLETED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber animate-pulse" />
              <span className="font-mono text-xs text-muted">ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-muted/30" />
              <span className="font-mono text-xs text-muted">PENDING</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
