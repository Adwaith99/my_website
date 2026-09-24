// EDIT HERE: Add new publications at the top of this array.
// `self: true` bolds your name. `equal: true` adds the equal-contribution mark.
// Optional links (buttons only appear when a value is present):
// `doi`: the DOI or journal article URL → “View article”
// `preprint`: a bioRxiv or other preprint URL → “View preprint”
// `pdf`: a direct manuscript/PDF URL → “Read PDF”
export const publications = [
  {
    year: '2026', journal: 'Journal of the American Chemical Society',
    title: 'Resolving hidden stoichiometries in bacterial proteasome activator (Bpa)-substrate complexes by cryo-EM and charge detection mass spectrometry',
    authors: [
      { name: 'Davis B.T.V.', equal: true }, { name: 'Uday A.B.', self: true, equal: true },
      { name: 'Haris A.', equal: true }, { name: 'Keszei A.F.A.', equal: true }, { name: 'et al.' },
    ],
    citation: 'J. Am. Chem. Soc. (2026)', doi: 'https://doi.org/10.1021/jacs.6c09027',
  },
  // {
  //   year: '2026', journal: 'Nature Communications', status: 'Accepted',
  //   title: 'Allosteric inhibition of human mitochondrial ClpP by hijacking the Dordaviprone (ONC201) binding site',
  //   authors: [
  //     { name: 'Goncalves M.M.', equal: true }, { name: 'Uday A.B.', self: true, equal: true },
  //     { name: 'Watson I.D.G.', equal: true }, { name: 'Chau A.M.' }, { name: 'Kalhor-Monfared S.' }, { name: 'et al.' },
  //   ],
  //   citation: 'Nature Communications (2026)',
  // },
  // {
  //   journal: 'Science Advances', status: 'Under review',
  //   title: 'A luminal pocket allosterically inhibits human mitochondrial ClpP through conformational strain',
  //   authors: [
  //     { name: 'Goncalves M.M.', equal: true }, { name: 'Uday A.B.', self: true, equal: true },
  //     { name: 'Watson I.D.G.', equal: true }, { name: 'Chau A.M.' }, { name: 'et al.' },
  //   ],
  //   citation: 'Science Advances',
  // },
  {
    year: '2026', journal: 'bioRxiv', status: 'Under review',
    title: 'Structural tuning of native type V fimbriae shapes mechanical specialization in Porphyromonas gingivalis',
    authors: [{ name: 'Wang Z.', equal: true }, { name: 'Uday A.B.', self: true, equal: true }, { name: 'et al.' }],
    preprint: 'https://www.biorxiv.org/content/10.64898/2026.07.16.738973v2',
  },
  // {
  //   journal: 'Nature Communications', status: 'Under revision',
  //   title: 'Structural basis of substrate recognition for proteasome degradation by prokaryotic ubiquitin-like protein ligase PafA',
  //   authors: [
  //     { name: 'Plourde A.', equal: true }, { name: 'Uday A.B.', self: true, equal: true },
  //     { name: 'Forrester T.J.B.' }, { name: 'Zeytuni N.' }, { name: 'Vahidi S.' },
  //   ],
  //   citation: 'Nature Communications',
  // },
  {
    year: '2025', journal: 'PNAS',
    title: 'Mechanism of allosteric activation in human mitochondrial ClpP protease',
    authors: [
      { name: 'Goncalves M.M.', equal: true }, { name: 'Uday A.B.', self: true, equal: true },
      { name: 'Forrester T.J.B.', equal: true }, { name: 'Currie S.Q.W.' }, { name: 'Kim A.S.' }, { name: 'Feng Y.' }, { name: 'et al.' },
    ],
    citation: 'Proc. Natl. Acad. Sci. U.S.A. 122(16), e2419881122 (2025)', doi: 'https://doi.org/10.1073/pnas.2419881122',
  },
  {
    year: '2025', journal: 'Nature Communications',
    title: 'Structural basis for allosteric modulation of M. tuberculosis proteasome core particle',
    authors: [
      { name: 'Turner M.', equal: true }, { name: 'Uday A.B.', self: true, equal: true },
      { name: 'Velyvis A.' }, { name: 'Rennella E.' }, { name: 'Zeytuni N.' }, { name: 'Vahidi S.' },
    ],
    citation: 'Nature Communications 16, 3138 (2025)', doi: 'https://doi.org/10.1038/s41467-025-58430-0',
  },
  {
    year: '2025', journal: 'Proteins',
    title: 'Initiation factor 3 bound to the 30S ribosomal subunit in an initial step of translation',
    authors: [{ name: 'Uday A.B.', self: true, equal: true }, { name: 'Mishra R.K.', equal: true }, { name: 'Hussain T.' }],
    citation: 'Proteins 93(1), 279–286 (2025)', doi: 'https://doi.org/10.1002/prot.26655',
  },
  {
    year: '2024', journal: 'Structure',
    title: 'Atomic structure of wheat ribosome reveals unique features of the plant ribosomes',
    authors: [
      { name: 'Mishra R.K.' }, { name: 'Sharma P.' }, { name: 'Khaja F.T.' },
      { name: 'Uday A.B.', self: true }, { name: 'Hussain T.' },
    ],
    citation: 'Structure 32(5), 562–574.e3 (2024)', doi: 'https://doi.org/10.1016/j.str.2024.02.006',
  },
  {
    year: '2020', journal: 'Communications Biology',
    title: 'Robust estimation of bacterial cell count from optical density',
    authors: [
      { name: 'Beal J.' }, { name: 'Farny N.G.' }, { name: 'Haddock-Angelli T.' },
      { name: 'iGEM Interlab Study Contributors' }, { name: 'et al.' },
    ],
    citation: 'Communications Biology 3, 512 (2020)',
    note: 'Adwaith B. Uday is a member of the iGEM Interlab Study Contributors.',
    doi: 'https://doi.org/10.1038/s42003-020-01127-5',
  },
]
