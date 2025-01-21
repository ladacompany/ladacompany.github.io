// 네비게이션의 a 태그를 모두 선택
const navLinks = document.querySelectorAll('#navi ul li a');

// 각 a 태그에 클릭 이벤트 리스너 추가
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // 기본 링크 이동 방지
        requestAnimationFrame(() => handleLinkClick(this));
    });
});

// 클릭된 a 태그 처리 함수
function handleLinkClick(clickedLink) {
    // 모든 a 태그에서 active 클래스 제거
    navLinks.forEach(link => link.classList.remove('active'));

    // 클릭된 a 태그에 active 클래스 추가
    clickedLink.classList.add('active');

    // Console에 클릭된 a 태그 정보 출력
    console.log(`클릭한 링크: ${clickedLink.textContent.trim()}`);
}





document.addEventListener('DOMContentLoaded', function () {
    // 네비게이션의 a 태그 선택
    const navLinks = document.querySelectorAll('.nav-link');

    // 각 a 태그에 클릭 이벤트 추가
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 기본 링크 이동 방지

            // 클릭한 a 태그의 id 확인
            const targetId = this.id;

            // id에 따라 이동할 섹션 선택
            let targetSection;

            if (targetId === 'company') {
                targetSection = document.querySelector('#Business');
            } else if (targetId === 'performance') {
                targetSection = document.querySelector('#Devolop');
            } else if (targetId === 'contact') {
                targetSection = document.querySelector('#Contact');
            }

            // 해당 섹션이 존재하면 스크롤 이동
            if (targetSection) {
                // 섹션의 위치 계산
                const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
                const offset = 100; // 추가적인 여유 공간 (픽셀 단위)

                // 부드럽게 스크롤 이동
                window.scrollTo({
                    top: sectionTop - offset, // 위치에서 offset 만큼 뺌
                    behavior: 'smooth'
                });
            }
        });
    });
});
