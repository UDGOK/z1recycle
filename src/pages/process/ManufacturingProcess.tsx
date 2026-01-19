import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';

const processSteps = [
  {
    step: 1,
    name: 'Slurry Preparation',
    description: 'Active materials, binders, and conductive additives are mixed under vacuum to create electrode slurry.',
    details: 'Planetary mixer removes air bubbles. Viscosity is carefully controlled for optimal coating. Mixing time: 2-4 hours.',
  },
  {
    step: 2,
    name: 'Electrode Coating',
    description: 'Slurry is applied to aluminum foil using slot-die coating for precise, uniform layers.',
    details: 'Coating thickness tolerance: +/- 2 microns. Line speed up to 20 m/min. Both sides coated sequentially.',
  },
  {
    step: 3,
    name: 'Drying',
    description: 'Coated electrodes pass through multi-zone ovens with closed-loop solvent recovery.',
    details: '95% solvent recovery rate reduces VOC emissions and operating costs. Temperature gradient 80C-120C. Residual moisture <50 ppm.',
  },
  {
    step: 4,
    name: 'Calendering',
    description: 'Roll press compacts electrodes to target density and thickness.',
    details: 'Pressure up to 2000 kg/cm. Gap control to micron precision. Improves energy density and adhesion.',
  },
  {
    step: 5,
    name: 'Slitting',
    description: 'Wide electrode rolls are cut to cell-specific widths.',
    details: 'Laser-guided blade positioning. Burr-free edges critical for cell safety. Width tolerance: +/- 0.1mm.',
  },
  {
    step: 6,
    name: 'Cell Assembly',
    description: 'Electrodes and separator are wound or stacked to form cell core.',
    details: 'Tension control prevents wrinkles. Tab welding attaches current collectors. Ultrasonic or laser welding.',
  },
  {
    step: 7,
    name: 'Electrolyte Filling',
    description: 'Precise volume of electrolyte is injected under vacuum.',
    details: 'Fill amount measured to 0.1g accuracy. Vacuum ensures complete wetting. Multiple fill/vacuum cycles.',
  },
  {
    step: 8,
    name: 'Sealing',
    description: 'Cell is heat-sealed or laser-welded to create hermetic package.',
    details: 'Leak testing with helium detection. Seal strength testing on samples. Critical for cell longevity.',
  },
  {
    step: 9,
    name: 'Formation',
    description: 'Initial charge/discharge cycles activate the cell and form SEI layer.',
    details: 'Temperature controlled chambers. Multiple cycles at low rate. Gas release and re-seal may be required.',
  },
  {
    step: 10,
    name: 'Testing & Grading',
    description: 'Cells are characterized and sorted by capacity and impedance.',
    details: 'Capacity variation binning. Impedance matching for packs. Failed cells recycled back to Zone A.',
  },
];

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        section="PROCESS // MANUFACTURING"
        title="MANUFACTURING"
        highlight="PROCESS"
        description="Sodium-ion cell production with dedicated material streams ensuring zero cross-contamination between Li-ion recovery and Na-ion manufacturing."
        image="/dry-room.png"
      />

      {/* Environment Requirements */}
      <section className="py-16 bg-cyan-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Dew Point', value: '-40C', icon: 'T' },
              { label: 'Humidity', value: '<1% RH', icon: 'H' },
              { label: 'ISO Class', value: '7', icon: 'C' },
              { label: 'Solvent Recovery', value: '95%', icon: 'S' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-cyan-500/30 p-6 text-center"
              >
                <div className="font-mono text-3xl text-cyan-400 mb-2">{item.value}</div>
                <div className="font-mono text-xs text-muted">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              PRODUCTION <span className="text-cyan-400">STEPS</span>
            </h2>
          </motion.div>

          {/* Visual Timeline */}
          <div className="relative mb-12">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-cyan-500/20 hidden md:block" />
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveStep(activeStep === step.step ? null : step.step)}
                  className={`relative flex flex-col items-center group ${
                    activeStep === step.step ? 'z-10' : ''
                  }`}
                  data-hover
                >
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm transition-all ${
                    activeStep === step.step
                      ? 'bg-cyan-400 text-slate-950 border-cyan-400'
                      : 'bg-slate-950 text-cyan-400 border-cyan-400/50 group-hover:border-cyan-400'
                  }`}>
                    {step.step}
                  </div>
                  <div className="font-mono text-[10px] text-muted mt-1 text-center hidden md:block">
                    {step.name.split(' ')[0]}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step Details */}
          {activeStep && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/50 border border-cyan-500/30 p-8 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-mono text-xl font-bold">
                  {activeStep}
                </div>
                <div>
                  <div className="font-mono text-xs text-muted">STEP {activeStep}</div>
                  <div className="font-mono text-xl text-white">
                    {processSteps[activeStep - 1].name}
                  </div>
                </div>
              </div>
              <p className="text-white mb-4">{processSteps[activeStep - 1].description}</p>
              <p className="text-muted text-sm">{processSteps[activeStep - 1].details}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
              QUALITY <span className="text-cyan-400">CONTROL</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stage: 'Slurry', test: 'Viscosity, solids content' },
              { stage: 'Coating', test: 'Thickness, uniformity' },
              { stage: 'Electrodes', test: 'Density, adhesion' },
              { stage: 'Cells', test: 'Capacity, impedance' },
            ].map((item, index) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-cyan-500/30 p-6"
              >
                <div className="font-mono text-cyan-400 mb-2">{item.stage}</div>
                <div className="text-muted text-sm">{item.test}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
