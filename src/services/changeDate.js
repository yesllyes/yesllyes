// 서버로 부터 받아온 날짜 데이터 가공

const changeDate = (createdAt) => {
  const date = new Date(createdAt);
  const newDate = `
  ${date.getFullYear()}년 
  ${date.getMonth() + 1}월 
  ${date.getDate()}일
  `;

  return newDate;
};

export default changeDate;
