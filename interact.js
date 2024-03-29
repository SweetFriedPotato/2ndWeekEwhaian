function showSubMenu(subMenuId) {
    // 모든 서브메뉴 숨기기
    const subMenus = document.querySelectorAll('.submenu');
    subMenus.forEach(menu => {
        menu.style.display = 'none';
    });

    // 선택한 서브메뉴 보이기
    const selectedSubMenu = document.getElementById(subMenuId);
    selectedSubMenu.style.display = 'block';
}

// 페이지가 로드되면 첫 번째 서브메뉴를 표시하도록 설정
window.onload = function() {
    document.getElementById('subMenu1').style.display = 'block';
    const firstButton = document.querySelector('.main-button');
    firstButton.classList.add('active');
};

// 버튼 클릭 시 active 클래스 추가
document.querySelectorAll('.main-button').forEach(button => {
    button.addEventListener('click', function() {
        // 모든 main-button에 있는 active 클래스 제거
        document.querySelectorAll('.main-button').forEach(btn => {
            btn.classList.remove('active');
        });
        // 현재 클릭된 버튼에 active 클래스 추가
        this.classList.add('active');
    });
});
