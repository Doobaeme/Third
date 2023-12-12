const targetDate = new Date("2023-12-25");

function updateCountdown() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById('countdown');
  countdownElement.style.color = '#FF9EA9'
  countdownElement.innerHTML = `
      <span>D-${days} ${hours}시간${minutes}분${seconds}초</span>`;
}
updateCountdown();

setInterval(updateCountdown, 1000);

const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

    const openDate = new Date(2023, 11, index + 1);

    if (now.getTime() > openDate.getTime()) {

      const imageUrl = `image/card/doyoon${index + 1}.jpeg`;

      const doorDiv = document.querySelector(`.day-${index + 1}`)
      const backDiv = doorDiv.querySelector(`.back`);

      const style = window.getComputedStyle(backDiv);
      const pTag = backDiv.querySelector('p')
      const text = modalMessageList[index]['message']

      showModal(imageUrl, text);

    } else {
      door.parentElement.children[0].setAttribute('disabled', 'true');

      const daysRemaining = Math.ceil((openDate - now) / (1000 * 60 * 60 * 24));
      console.log(openDate, now, daysRemaining)
      alert(`이 카드는 ${daysRemaining}일 후에 열 수 있어요!`);
    }
  });
});
