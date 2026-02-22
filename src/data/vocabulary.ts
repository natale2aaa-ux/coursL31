
export interface Word {
  id: string;
  english: string;
  french: string;
  definition: string;
  category: 'climate' | 'labor';
  type?: 'noun' | 'verb';
}

export const vocabulary: Word[] = [
  // Climate Change
  {
    id: 'c1',
    english: 'Climate Change',
    french: 'Changement climatique',
    definition: 'Long-term shifts in temperature and weather patterns.',
    category: 'climate'
  },
  {
    id: 'c2',
    english: 'Greenhouse Effect',
    french: 'Effet de serre',
    definition: 'Warming caused by gases trapping heat in the atmosphere.',
    category: 'climate'
  },
  {
    id: 'c3',
    english: 'Externality',
    french: 'Externalité',
    definition: 'A cost or benefit imposed on third parties not reflected in market prices.',
    category: 'climate'
  },
  {
    id: 'c4',
    english: 'Negative Externality',
    french: 'Externalité négative',
    definition: 'A harmful side effect of economic activity, such as pollution.',
    category: 'climate'
  },
  {
    id: 'c5',
    english: 'Carbon Pricing',
    french: 'Tarification du carbone',
    definition: 'Policy that assigns a cost to carbon emissions.',
    category: 'climate'
  },
  {
    id: 'c6',
    english: 'Carbon Tax',
    french: 'Taxe carbone',
    definition: 'A tax levied on the carbon content of fossil fuels.',
    category: 'climate'
  },
  {
    id: 'c7',
    english: 'Trade-off',
    french: 'Compromis / Arbitrage',
    definition: 'An opportunity cost.',
    category: 'climate'
  },
  {
    id: 'c8',
    english: 'Cap-and-Trade System',
    french: 'Système de plafonnement et d\'échange',
    definition: 'Market-based policy limiting total emissions through tradable permits.',
    category: 'climate'
  },
  {
    id: 'c9',
    english: 'Mitigation',
    french: 'Atténuation',
    definition: 'Efforts to reduce the magnitude of climate change.',
    category: 'climate'
  },
  {
    id: 'c10',
    english: 'Adaptation',
    french: 'Adaptation',
    definition: 'Adjustments to reduce vulnerability to climate impacts.',
    category: 'climate'
  },
  {
    id: 'c11',
    english: 'Free-Rider Problem',
    french: 'Problème du passager clandestin',
    definition: 'Incentive to benefit from others’ efforts without contributing.',
    category: 'climate'
  },
  {
    id: 'c12',
    english: 'Cost–Benefit Analysis',
    french: 'Analyse coûts-avantages',
    definition: 'Comparison of costs and benefits of a policy.',
    category: 'climate'
  },
  {
    id: 'c13',
    english: 'Discount Rate',
    french: 'Taux d\'actualisation',
    definition: 'Rate used to compare present and future costs and benefits.',
    category: 'climate'
  },
  {
    id: 'c14',
    english: 'Social Cost of Carbon',
    french: 'Coût social du carbone',
    definition: 'Estimated economic damage caused by one additional ton of CO₂ emissions.',
    category: 'climate'
  },
  {
    id: 'c15',
    english: 'Renewable Energy',
    french: 'Énergie renouvelable',
    definition: 'Energy from sources that are naturally replenished.',
    category: 'climate'
  },
  {
    id: 'c16',
    english: 'Sustainable Development',
    french: 'Développement durable',
    definition: 'Economic growth that meets present needs without harming future generations.',
    category: 'climate'
  },
  {
    id: 'c17',
    english: 'International Climate Agreement',
    french: 'Accord international sur le climat',
    definition: 'Cooperative treaties aimed at reducing global emissions.',
    category: 'climate'
  },
  {
    id: 'c18',
    english: 'Emit',
    french: 'Émettre',
    definition: 'To release greenhouse gases into the atmosphere.',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c19',
    english: 'Internalize',
    french: 'Internaliser',
    definition: 'To incorporate external costs into economic decision-making.',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c20',
    english: 'Mitigate',
    french: 'Atténuer',
    definition: 'To reduce the magnitude or rate of climate change.',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c21',
    english: 'Adapt',
    french: 'S\'adapter',
    definition: 'To adjust behavior or systems to climate impacts.',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c22',
    english: 'Decarbonize',
    french: 'Décarboner',
    definition: 'To reduce carbon dependence in production or consumption.',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c23',
    english: 'Abate',
    french: 'Réduire / Diminuer (les émissions)',
    definition: 'To reduce emissions or environmental damage.',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c24',
    english: 'Discount',
    french: 'Actualiser',
    definition: 'To value future costs and benefits in present terms.',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c25',
    english: 'Accumulate',
    french: 'Accumuler',
    definition: 'To build up over time (e.g., emissions or carbon stock).',
    category: 'climate',
    type: 'verb'
  },
  {
    id: 'c26',
    english: 'Stabilize',
    french: 'Stabiliser',
    definition: 'To prevent further increases in temperature or emissions.',
    category: 'climate',
    type: 'verb'
  },

  // Labor Relations
  {
    id: 'l1',
    english: 'Labor Contract',
    french: 'Contrat de travail',
    definition: 'Formal agreement specifying employment terms.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l2',
    english: 'Implicit Contract',
    french: 'Contrat implicite',
    definition: 'Unwritten expectations between employer and employee.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l3',
    english: 'Human Capital',
    french: 'Capital humain',
    definition: 'Skills and knowledge embodied in workers.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l4',
    english: 'Monitoring',
    french: 'Surveillance / Contrôle',
    definition: 'Observation or measurement of employee performance.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l5',
    english: 'Oversight',
    french: 'Supervision',
    definition: 'Supervision or review to ensure compliance and performance.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l6',
    english: 'Incentive Scheme',
    french: 'Système d\'incitation',
    definition: 'Structured rewards and penalties guiding behavior.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l7',
    english: 'Job Match Quality',
    french: 'Qualité de l\'appariement',
    definition: 'Degree of fit between worker skills and job requirements.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l8',
    english: 'Wage Premium',
    french: 'Prime salariale',
    definition: 'Pay above the market-clearing level.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l9',
    english: 'Turnover',
    french: 'Rotation du personnel',
    definition: 'Rate at which employees leave the firm.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l10',
    english: 'Bargaining Power',
    french: 'Pouvoir de négociation',
    definition: 'Ability to influence wage or contract outcomes.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l11',
    english: 'Trade Union / Labor Union',
    french: 'Syndicat',
    definition: 'Organization of workers to represent and protect employees.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l12',
    english: 'Field',
    french: 'Domaine / Secteur',
    definition: 'An industry or occupational domain.',
    category: 'labor',
    type: 'noun'
  },
  {
    id: 'l13',
    english: 'Hire',
    french: 'Embaucher',
    definition: 'To employ a worker in exchange for compensation.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l14',
    english: 'Dismiss / Lay off / Sack / Fire',
    french: 'Licencier / Renvoyer',
    definition: 'To terminate an employment relationship.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l15',
    english: 'Negotiate',
    french: 'Négocier',
    definition: 'To discuss and agree on employment terms.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l16',
    english: 'Shirk',
    french: 'Tirer au flanc / Se dérober',
    definition: 'To supply less effort than agreed or expected.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l17',
    english: 'Monitor',
    french: 'Surveiller',
    definition: 'To observe employee effort or performance.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l18',
    english: 'Incentivize',
    french: 'Inciter / Motiver',
    definition: 'To motivate behavior through rewards or penalties.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l19',
    english: 'Oversee',
    french: 'Superviser',
    definition: 'To supervise activities to ensure compliance and performance.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l20',
    english: 'Retain',
    french: 'Retenir / Fidéliser',
    definition: 'To keep workers within the firm over time.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l21',
    english: 'Invest (in)',
    french: 'Investir (dans)',
    definition: 'To devote resources to developing human capital.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l22',
    english: 'Comply',
    french: 'Se conformer / Respecter',
    definition: 'To act in accordance with contracts or workplace rules.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l23',
    english: 'Bargain',
    french: 'Négocier / Marchander',
    definition: 'To engage in wage or contract negotiations.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l24',
    english: 'Screen',
    french: 'Sélectionner / Filtrer',
    definition: 'To evaluate worker characteristics before hiring.',
    category: 'labor',
    type: 'verb'
  },
  {
    id: 'l25',
    english: 'Downsize',
    french: 'Réduire les effectifs',
    definition: 'To reduce the size of a company’s workforce.',
    category: 'labor',
    type: 'verb'
  }
];
