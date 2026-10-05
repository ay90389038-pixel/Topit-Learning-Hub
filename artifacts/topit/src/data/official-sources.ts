export type OfficialSource = {
  title: string;
  detail: string;
  url: string;
  kind: 'previous papers' | 'marking schemes' | 'question bank' | 'additional practice' | 'sample papers';
};

const CBSE_PAPERS = 'https://www.cbse.gov.in/cbsenew/question-paper.html';
const CBSE_MARKING_SCHEMES = 'https://www.cbse.gov.in/cbsenew/marking-scheme.html';
const CBSE_QUESTION_BANK_HUB = 'https://www.cbse.gov.in/cbsenew/question_bank.html';
const CBSE_CLASS_X_BANK = 'https://cbseacademic.nic.in/qbclass10.html';
const CBSE_CLASS_XII_BANK = 'https://cbseacademic.nic.in/qbclass12.html';
const CBSE_ADDITIONAL_PRACTICE = 'https://cbseacademic.nic.in/additionalPQ.html';
const CBSE_SAMPLE_PAPERS = 'https://cbseacademic.nic.in/sqp_archive.html';

const subjectQuestionBanks: { className: string; subject: string; url: string }[] = [
  { className: 'Class 10', subject: 'English', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassX/EnglishX.pdf' },
  { className: 'Class 10', subject: 'Mathematics', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassX/MathsX.pdf' },
  { className: 'Class 10', subject: 'Science', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassX/ScienceX.pdf' },
  { className: 'Class 12', subject: 'Business Studies', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/BusinessStudiesXII.pdf' },
  { className: 'Class 12', subject: 'Physical Education', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/PhysicalEducationXII.pdf' },
  { className: 'Class 12', subject: 'Political Science', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/PoliticalScienceXII.pdf' },
  { className: 'Class 12', subject: 'History', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/HistoryXII.pdf' },
  { className: 'Class 12', subject: 'Sociology', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/SociologyXII.pdf' },
  { className: 'Class 12', subject: 'English Core', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/EnglishCoreXII.pdf' },
  { className: 'Class 12', subject: 'Mathematics', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/MathematicsXII.pdf' },
  { className: 'Class 12', subject: 'Accountancy', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/AccountancyXII.pdf' },
  { className: 'Class 12', subject: 'Economics', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/EconomicsXII.pdf' },
  { className: 'Class 12', subject: 'Chemistry', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/ChemistryXII.pdf' },
  { className: 'Class 12', subject: 'Computer Science', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/ComputerScienceXII.pdf' },
  { className: 'Class 12', subject: 'Informatics Practices', url: 'https://cbseacademic.nic.in/web_material/QuestionBank/ClassXII/InformaticsPracticesXII.pdf' },
];

export function officialCbseSources(className: string, subject: string): OfficialSource[] {
  const subjectBank = subjectQuestionBanks.find((item) => item.className === className && item.subject === subject);
  const sources: OfficialSource[] = [
    {
      title: 'Previous-year question papers',
      detail: 'CBSE-hosted board exam papers. The public archive lists Class X and Class XII papers.',
      url: CBSE_PAPERS,
      kind: 'previous papers',
    },
    {
      title: 'Official marking schemes',
      detail: 'CBSE-hosted marking schemes for checking answers against the original board papers.',
      url: CBSE_MARKING_SCHEMES,
      kind: 'marking schemes',
    },
  ];

  if (subjectBank) {
    sources.push({
      title: `${className} ${subject} question bank`,
      detail: 'Official CBSE Academic question bank for this subject.',
      url: subjectBank.url,
      kind: 'question bank',
    });
  } else if (className === 'Class 10' || className === 'Class 12') {
    sources.push({
      title: `${className} question bank index`,
      detail: 'Browse the official subject list; a direct question-bank PDF is not listed here for this subject.',
      url: className === 'Class 10' ? CBSE_CLASS_X_BANK : CBSE_CLASS_XII_BANK,
      kind: 'question bank',
    });
  } else {
    sources.push({
      title: 'CBSE question bank index',
      detail: 'CBSE currently lists public subject question banks for Classes X and XII on this page.',
      url: CBSE_QUESTION_BANK_HUB,
      kind: 'question bank',
    });
  }

  if (className === 'Class 10' || className === 'Class 12') {
    sources.push(
      {
        title: 'Additional practice questions',
        detail: 'Official CBSE Academic practice questions for Classes X and XII.',
        url: CBSE_ADDITIONAL_PRACTICE,
        kind: 'additional practice',
      },
      {
        title: 'Sample question paper archive',
        detail: 'Official sample papers and marking schemes for Classes X and XII across available sessions.',
        url: CBSE_SAMPLE_PAPERS,
        kind: 'sample papers',
      },
    );
  }

  return sources;
}
