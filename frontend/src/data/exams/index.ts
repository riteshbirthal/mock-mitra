import { ExamData } from './types';
import { mphwExamData } from './mphw';
import { sscExamData } from './ssc';
import { bankingExamData } from './banking';
import { railwayExamData } from './railway';
import { upscExamData } from './upsc';
import { statePscExamData } from './state-psc';
import { defenceExamData } from './defence';

export * from './types';

export const examDataMap: Record<string, ExamData> = {
  'hssc_mphw': mphwExamData,
  'mphw': mphwExamData,
  'ssc': sscExamData,
  'banking': bankingExamData,
  'railway': railwayExamData,
  'upsc': upscExamData,
  'state_psc': statePscExamData,
  'defence': defenceExamData,
};

export const getExamData = (examId: string): ExamData | undefined => {
  return examDataMap[examId];
};

export const getAllExams = (): ExamData[] => {
  return Object.values(examDataMap).filter((exam, index, arr) => 
    arr.findIndex(e => e.examInfo.id === exam.examInfo.id) === index
  );
};

export const getExamList = () => {
  return getAllExams().map(exam => ({
    id: exam.examInfo.id,
    name: exam.examInfo.name,
    fullName: exam.examInfo.fullName,
    icon: exam.examInfo.icon,
    description: exam.examInfo.description,
  }));
};

export {
  mphwExamData,
  sscExamData,
  bankingExamData,
  railwayExamData,
  upscExamData,
  statePscExamData,
  defenceExamData,
};
