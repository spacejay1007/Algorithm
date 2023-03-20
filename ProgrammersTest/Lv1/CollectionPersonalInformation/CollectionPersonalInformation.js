// 프로그래머스 > 2023 KAKAO BLIND RECRUITMENT > 개인정보 수집 유효기간

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

const CollectionPersonalInformation = (today, terms, privacies) => {
  const result = [];

  const resultFunction = (today, priDate, type) => {
    const [year, month, day] = today.split(".").map(Number);
    const [pYear, pMonth, pDay] = priDate.split(".").map(Number);

    const rYear = year - pYear;
    const rMonth = month - pMonth;
    const rDay = day - pDay;

    return (rYear * 12 + rMonth - type) * 28 + rDay >= 0;
  };

  const direc = {};
  terms.forEach((item) => {
    const [type, date] = item.split(" "); // type = 약관종류, date = 유효기간
    direc[type] = Number(date);
  });

  privacies.forEach((pri, idx) => {
    const [fullDate, priType] = pri.split(" "); // fullDate = 개인정보 수집 일자, priType = 약관 종류
    if (resultFunction(today, fullDate, direc[priType])) result.push(idx + 1);
  });

  console.log(result);
  return result;
};

CollectionPersonalInformation(today, terms, privacies);
