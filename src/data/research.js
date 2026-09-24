import {
  BrainCircuit,
  Code2,
  Cog,
  FlaskConical,
  Microscope,
  Network,
  ScanSearch,
  Waves,
} from 'lucide-react'

// EDIT HERE: Update descriptions and add project links as your research develops.
export const researchThemes = [
  {
    number: '01',
    title: 'Cryo-EM',
    eyebrow: 'Seeing molecular detail',
    description:
      'Using single-particle cryo-electron microscopy to resolve the architectures and functional states of self-compartmentalized proteases in M. tuberculosis and human mitochondria.',
    icon: Microscope,
  },
  {
    number: '02',
    title: 'Molecular machines',
    eyebrow: 'Connecting motion to function',
    description:
      'Studying large macromolecular assemblies to understand how conformational dynamics, symmetry and allostery coordinate complex biological work.',
    icon: Cog,
  },
  {
    number: '03',
    title: 'Integrative structural biology',
    eyebrow: 'Exploring molecular landscapes',
    description:
      'Combining cryo-EM, molecular dynamics simulations, biochemical assays and other complementary techniques to answer biological questions that cannot be addressed by a single method alone.',
    icon: Network,
  },
]

export const skills = [
  { name: 'Cryo-EM', detail: 'Sample preparation and data processing', icon: Microscope },
  { name: 'Single particle analysis', detail: 'RELION · cryoSPARC', icon: ScanSearch },
  { name: 'Protein purification', detail: 'Expression & purification', icon: FlaskConical },
  // { name: 'Biochemistry', detail: 'Functional assays' },
  { name: 'Molecular dynamics', detail: 'Simulation & analysis', icon: Waves },
  { name: 'Python', detail: 'Scientific computing', icon: Code2 },
  { name: 'Machine learning', detail: 'Structural biology applications · learning', icon: BrainCircuit },
]
