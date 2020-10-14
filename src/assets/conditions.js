const conditions = [
  // this is the parent or 'item'
  {
    name: 'Cardiovascular',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'High blood pressure',
        id: 'High blood pressure',
      },
      {
        name: 'Cardiac Arrest',
        id: 'Cardiac Arrest',
      },
      {
        name: 'Arrhythmia',
        id: 'Arrhythmia',
      },
      {
        name: 'Coronary heart disease',
        id: 'Coronary heart disease',
      },
    ],
  },
  {
    name: 'Gastrointestinal',
    id: 1,
    children: [
      {
        name: 'IBS',
        id: 'IBS',
      },
      {
        name: "Crohn's Disease",
        id: "Crohn's_Disease",
      },
      {
        name: 'Gallstones',
        id: 'Gallstones',
      },
    ],
  },
  {
    name: 'Psychological',
    id: 2,
    children: [
      {
        name: 'Depression',
        id: 'Depression',
      },
      {
        name: 'Anxiety',
        id: 'Anxiety',
      },
      {
        name: 'Stress',
        id: 'Stress',
      },
      {
        name: 'Insomnia',
        id: 'Insomnia',
      },
    ],
  },
  {
    name: 'Other',
    id: 3,
    children: [
      {
        name: 'Cancer',
        id: 'Cancer',
      },
      {
        name: 'Diabetes',
        id: 'Diabetes',
      },
    ],
  },
];
export default conditions;
