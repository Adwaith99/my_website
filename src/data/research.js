import {
  Activity,
  Code2,
  Cog,
  FlaskConical,
  Microscope,
  Network,
  ScanSearch,
  TestTubes,
  Waves,
} from 'lucide-react'

// EDIT HERE: Update descriptions and add project links as your research develops.
export const researchThemes = [
  {
    number: '01',
    title: 'M. tuberculosis proteasome',
    eyebrow: 'Pathogen proteostasis',
    description:
      'I study how the proteasome core particle and its regulators control substrate processing in M. tuberculosis, with an emphasis on allostery, gate dynamics and assembly state.',
    icon: Cog,
  },
  {
    number: '02',
    title: 'Mitochondrial ClpP',
    eyebrow: 'Organelle proteostasis',
    description:
      'I investigate how ligands and conformational changes activate or inhibit human mitochondrial ClpP, linking structural states to proteolytic function.',
    icon: Activity,
  },
  {
    number: '03',
    title: 'Structure–dynamics relationships',
    eyebrow: 'Integrative mechanism',
    description:
      'I combine cryo-EM, protein biochemistry and molecular simulations to move beyond static structures and define the conformational landscapes that govern molecular function.',
    icon: Network,
  },
]

export const skills = [
  { name: 'Cryo-EM', detail: 'Specimen preparation · data collection', icon: Microscope },
  { name: 'Single-particle analysis', detail: 'cryoSPARC · RELION · heterogeneity', icon: ScanSearch },
  { name: 'Protein production', detail: 'Expression · purification · reconstitution', icon: FlaskConical },
  { name: 'Protein biochemistry', detail: 'Activity assays · functional validation', icon: TestTubes },
  { name: 'Molecular dynamics', detail: 'Simulation setup · trajectory analysis', icon: Waves },
  { name: 'Scientific computing', detail: 'Python · data analysis · visualization', icon: Code2 },
]
