import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  qualifications: string;
  email: string;
  linkedin?: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Syed Hussain',
    title: 'Chief Executive Officer',
    bio: "Visionary leader driving Z1's mission to secure America's battery supply chain. Extensive experience in industrial development and clean energy infrastructure.",
    qualifications: 'MBA, Strategic Management | 15+ years industrial leadership',
    email: 'ceo@z1recycling.com',
    linkedin: 'https://www.linkedin.com/in/syed-hussain-033661230',
    initials: 'SH',
  },
  {
    id: 2,
    name: 'TBD',
    title: 'Chief Operating Officer',
    bio: 'Oversees daily operations and ensures operational excellence across all facility zones.',
    qualifications: 'Operations Management | Manufacturing Excellence',
    email: 'coo@z1recycling.com',
    initials: 'COO',
  },
  {
    id: 3,
    name: 'TBD',
    title: 'Chief Technology Officer',
    bio: 'Leads R&D initiatives for sodium-ion battery development and recycling technology innovation.',
    qualifications: 'Ph.D. Materials Science | Battery Technology Expert',
    email: 'cto@z1recycling.com',
    initials: 'CTO',
  },
  {
    id: 4,
    name: 'TBD',
    title: 'Chief Financial Officer',
    bio: 'Manages financial strategy, capital investments, and stakeholder relations.',
    qualifications: 'CPA, CFA | Corporate Finance',
    email: 'cfo@z1recycling.com',
    initials: 'CFO',
  },
  {
    id: 5,
    name: 'TBD',
    title: 'VP of Engineering',
    bio: 'Directs facility engineering, equipment integration, and process optimization.',
    qualifications: 'P.E. Mechanical Engineering | Industrial Systems',
    email: 'engineering@z1recycling.com',
    initials: 'VPE',
  },
  {
    id: 6,
    name: 'TBD',
    title: 'VP of Operations - Recycling',
    bio: 'Manages Zone A recycling operations, safety protocols, and material recovery processes.',
    qualifications: 'Chemical Engineering | Hazardous Materials Certified',
    email: 'recycling@z1recycling.com',
    initials: 'VPR',
  },
  {
    id: 7,
    name: 'TBD',
    title: 'VP of Manufacturing - R&D',
    bio: 'Leads sodium-ion cell manufacturing and pilot production in the advanced dry room facility.',
    qualifications: 'Battery Manufacturing | Cleanroom Operations',
    email: 'manufacturing@z1recycling.com',
    initials: 'VPM',
  },
  {
    id: 8,
    name: 'TBD',
    title: 'Director of Environmental Health & Safety',
    bio: 'Ensures regulatory compliance, environmental stewardship, and workforce safety.',
    qualifications: 'CSP, CIH | OSHA Authorized | EPA Compliance',
    email: 'safety@z1recycling.com',
    initials: 'EHS',
  },
  {
    id: 9,
    name: 'TBD',
    title: 'Director of Workforce Development',
    bio: 'Builds partnerships with educational institutions and develops training programs for high-skilled roles.',
    qualifications: 'Workforce Planning | Technical Education',
    email: 'careers@z1recycling.com',
    initials: 'WFD',
  },
  {
    id: 10,
    name: 'TBD',
    title: 'Director of Supply Chain & Partnerships',
    bio: 'Manages material sourcing, offtake agreements, and strategic industry partnerships.',
    qualifications: 'Supply Chain Management | Strategic Sourcing',
    email: 'partnerships@z1recycling.com',
    initials: 'SCP',
  },
  {
    id: 11,
    name: 'TBD',
    title: 'Director of Government & Community Relations',
    bio: 'Coordinates with federal, state, and local stakeholders to advance facility development.',
    qualifications: 'Public Policy | Economic Development',
    email: 'government@z1recycling.com',
    initials: 'GCR',
  },
];

function TeamCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer bg-slate-800/50 border border-slate-700 hover:border-neon/50 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
    >
      {/* Profile Circle */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon/80 to-cyan-500/80 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all">
        <span className="font-mono text-xl text-white font-bold">{member.initials}</span>
      </div>

      {/* Name & Title */}
      <div className="text-center">
        <h3 className="font-mono text-lg text-white mb-1 group-hover:text-neon transition-colors">
          {member.name}
        </h3>
        <p className="text-slate-400 text-sm">{member.title}</p>
      </div>

      {/* LinkedIn Icon */}
      {member.linkedin && (
        <div className="flex justify-center mt-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
}

function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative bg-slate-900 border border-neon/30 max-w-md w-full p-8 shadow-[0_0_50px_rgba(0,255,136,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-neon transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Profile Circle */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)]">
          <span className="font-mono text-3xl text-white font-bold">{member.initials}</span>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-6">
          <h2 className="font-mono text-2xl text-white mb-2">{member.name}</h2>
          <p className="text-neon font-mono text-sm">{member.title}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent mb-6" />

        {/* About */}
        <div className="mb-6">
          <h3 className="font-mono text-xs text-cyan-400 mb-2 tracking-wider">ABOUT</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
        </div>

        {/* Qualifications */}
        <div className="mb-6">
          <h3 className="font-mono text-xs text-cyan-400 mb-2 tracking-wider">QUALIFICATIONS</h3>
          <div className="flex flex-wrap gap-2">
            {member.qualifications.split(' | ').map((qual) => (
              <span key={qual} className="px-2 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                {qual}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-mono text-xs text-cyan-400 mb-3 tracking-wider">CONTACT</h3>
          <div className="space-y-2">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-neon transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {member.email}
            </a>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm font-mono"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                View LinkedIn
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <PageHeader
        section="ABOUT // TEAM"
        title="LEADERSHIP"
        highlight="TEAM"
        description="Building America's battery recycling infrastructure with world-class expertise."
      />

      {/* Team Grid */}
      <section className="py-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 grid-overlay opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest mb-2">// EXECUTIVE LEADERSHIP</div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold">
              THE PEOPLE BEHIND <span className="text-neon">Z1</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <TeamCard member={member} onClick={() => setSelectedMember(member)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border-y border-neon/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-mono text-xl text-white mb-4">JOIN OUR TEAM</h3>
          <p className="text-slate-400 mb-6">
            We're building a world-class team to lead America's battery recycling revolution. 
            Explore career opportunities at Z1 Recycling Center.
          </p>
          <a
            href="/about/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neon text-neon font-mono font-bold hover:bg-neon hover:text-slate-950 transition-all"
          >
            VIEW OPEN POSITIONS
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
