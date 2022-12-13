export const DELETE = 'DELETE'; // 1) type 문자열 변수화 하기

export const deleteItem = (num) => {
  // 2) 액션 또는 액션 생성자 만들기
  return {
    type: DELETE,
    payload: num,
  };
};
