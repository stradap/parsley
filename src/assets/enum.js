const terms = `Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.`;

const survey = [
  {
    questionType: 'Info',
    questionText: 'Medical questions. Tap next to start',
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you smoke any tobacco products?. How much and how often?',
    questionId: 'SmokeTobacco',
    options: [
      {
        optionText: 'No',
        value: 'no',
      },
      {
        optionText: '1 time',
        value: '1',
      },
      {
        optionText: '2 times',
        value: '2',
      },
      {
        optionText: '3 times',
        value: '3',
      },
      {
        optionText: 'More than 4 times',
        value: '4',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you drink alcohol?. How much and how often?',
    questionId: 'DrinkAlcohol',
    options: [
      {
        optionText: 'No',
        value: 'no',
      },
      {
        optionText: '1 time',
        value: '1',
      },
      {
        optionText: '2 times',
        value: '2',
      },
      {
        optionText: '3 times',
        value: '3',
      },
      {
        optionText: 'More than 4 times',
        value: '4',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText:
      'Have you regularly used illicit drugs?. How much and how often?',
    questionId: 'IllicitDrugs',
    options: [
      {
        optionText: 'No',
        value: 'no',
      },
      {
        optionText: '1 time',
        value: '1',
      },
      {
        optionText: '2 times',
        value: '2',
      },
      {
        optionText: '3 times',
        value: '3',
      },
      {
        optionText: 'More than 4 times',
        value: '4',
      },
    ],
  },
  {
    questionType: 'TextInput',
    questionText: 'Current medications.',
    questionId: 'CurrentMedications',
    placeholderText:
      'Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.',
  },
  {
    questionType: 'TextInput',
    questionText: 'Medication allergies or reactions.',
    questionId: 'CurrentMedicationAllergies',
    placeholderText: 'Please list any medication allergies or reactions.',
  },
  {
    questionType: 'TextInput',
    questionText:
      'List any surgeries or hospital stays you have had and their approximate date / year',
    questionId: 'CurrentSurgeries',
    placeholderText: 'Type of surgery or reason for hospitalization',
  },
  {
    questionType: 'Info',
    questionText:
      'That all, thanks for the answers.Tap finish to see your results!',
  },
];

export {terms, survey};
