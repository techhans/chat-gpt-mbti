document.addEventListener('DOMContentLoaded', function () {
  const resultElement = document.getElementById('result');
  const restartButton = document.getElementById('restart-button');

  // 로컬 스토리지에서 mbti_result 값 가져오기
  const mbtiResult = localStorage.getItem('mbti_result');

  if (mbtiResult) {
    // 결과가 있는 경우 결과 텍스트 추가
    resultElement.textContent = `당신의 MBTI는 ${mbtiResult}입니다!`;
    restartButton.textContent = '테스트 하러 가기';
    restartButton.addEventListener('click', function () {
      // 테스트 페이지로 이동
      window.location.href = './index.html';
    });
  } else {
    // 결과가 없는 경우 기본 텍스트 추가
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기';
    restartButton.addEventListener('click', function () {
      // 테스트 페이지로 이동
      window.location.href = './index.html';
    });
  }
});
