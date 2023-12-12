function showModal(imageUrl, text) {
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
      existingModal.remove();
    }
  
    const modal = document.createElement('div');
    modal.className = 'modal hidden';
  
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';
  
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';
  
    const textElement = document.createElement('p');
    textElement.textContent = text;
  
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);
  
    modal.appendChild(modalContent);
  
    modal.addEventListener('click', () => {
      modal.remove();
    });
  
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.remove('hidden'), 0);
  }
  
  const modalMessageList = [
    { "number": 1, "message": "클스마스 첫번째 선물은 김도윤 탄생!" },
    { "number": 2, "message": "도윤 윙크빔!" },
    { "number": 3, "message": "도유니 발도장!" },
    { "number": 4, "message": "살인미소!" },
    { "number": 5, "message": "토끼도윤!" },
    { "number": 6, "message": "튼튼한 소시지 다리!" },
    { "number": 7, "message": "꿀잠자는 도윤!" },
    { "number": 8, "message": "50일 촬영 5종세트!" },
    { "number": 9, "message": "50일 촬영 5종세트-인생n년차 도윤!" },
    { "number": 10, "message": "50일 촬영 5종세트-쇼미더도윤!" },
    { "number": 11, "message": "50일 촬영 5종세트-개운한 토끼 도윤!" },
    { "number": 12, "message": "50일 촬영 5종세트-최연소 맥날 크루 도윤!" },
    { "number": 13, "message": "관리하는 남자 도윤!" },
    { "number": 14, "message": "잘먹 도윤!" },
    { "number": 15, "message": "엽사부자 도윤!" },
    { "number": 16, "message": "자다깬 도윤!" },
    { "number": 17, "message": "보드게임 마스터 도윤!" },
    { "number": 18, "message": "모빌이 재밌는 도윤!" },
    { "number": 19, "message": "성냥팔이 소년 도윤!" },
    { "number": 20, "message": "인생 3개월차 도윤!" },
    { "number": 21, "message": "영재 도윤!" },
    { "number": 22, "message": "잠자는 숲속의 왕자 도윤!" },
    { "number": 23, "message": "볼빵빵 귀요운 도윤!" },
    { "number": 24, "message": "마지막 선물은 인생 100일차 도윤!" }
  ];
  