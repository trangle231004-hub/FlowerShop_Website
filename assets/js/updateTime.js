function updateTimer() {
            const timerDisplay = document.querySelector('.timer-display');
            if (!timerDisplay) return;
            const now = new Date();
            const timeString = now.toLocaleTimeString(); // Lấy giờ:phút:giây (ví dụ: 04:38:15 PM)
            timerDisplay.textContent = timeString;
        }
        // Cập nhật thời gian mỗi giây
        setInterval(updateTimer, 1000);
        // Gọi ngay lập tức để hiển thị thời gian khi tải trang
        updateTimer();

        document.addEventListener('DOMContentLoaded', function () {
            const userMenu = document.querySelector('.user-menu');
            const userToggle = document.querySelector('.user-toggle');

            if (userMenu && userToggle) {
                userToggle.addEventListener('click', function (event) {
                    event.preventDefault();
                    userMenu.classList.toggle('active');

                    const isExpanded = userMenu.classList.contains('active');
                    userToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
                });

                document.addEventListener('click', function (event) {
                    if (!userMenu.contains(event.target)) {
                        userMenu.classList.remove('active');
                        userToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            }

            const loginModal = document.getElementById('loginModal');
            const openLoginModal = document.getElementById('openLoginModal');
            const closeLoginModal = document.getElementById('closeLoginModal');
            const loginModalOverlay = document.getElementById('loginModalOverlay');
            const registerModal = document.getElementById('registerModal');
            const openRegisterModal = document.getElementById('openRegisterModal');
            const closeRegisterModal = document.getElementById('closeRegisterModal');
            const registerModalOverlay = document.getElementById('registerModalOverlay');
            const searchModal = document.getElementById('searchModal');
            const openSearchModal = document.getElementById('openSearchModal');
            const closeSearchModal = document.getElementById('closeSearchModal');
            const searchModalOverlay = document.getElementById('searchModalOverlay');

            function closeLogin() {
                if (!loginModal) return;
                loginModal.classList.remove('show');
                loginModal.setAttribute('aria-hidden', 'true');
            }

            function openLogin() {
                if (!loginModal) return;
                loginModal.classList.add('show');
                loginModal.setAttribute('aria-hidden', 'false');
            }

            function closeRegister() {
                if (!registerModal) return;
                registerModal.classList.remove('show');
                registerModal.setAttribute('aria-hidden', 'true');
            }

            function openRegister() {
                if (!registerModal) return;
                registerModal.classList.add('show');
                registerModal.setAttribute('aria-hidden', 'false');
            }

            function closeSearch() {
                if (!searchModal) return;
                searchModal.classList.remove('show');
                searchModal.setAttribute('aria-hidden', 'true');
            }

            function openSearch() {
                if (!searchModal) return;
                searchModal.classList.add('show');
                searchModal.setAttribute('aria-hidden', 'false');
            }

            function lockBodyIfAnyModalOpen() {
                const isAnyModalOpen = (loginModal && loginModal.classList.contains('show')) ||
                    (registerModal && registerModal.classList.contains('show')) ||
                    (searchModal && searchModal.classList.contains('show'));
                document.body.style.overflow = isAnyModalOpen ? 'hidden' : '';
            }

            function closeAllModals() {
                closeLogin();
                closeRegister();
                closeSearch();
                lockBodyIfAnyModalOpen();
            }

            function closeMenus() {
                if (userMenu && userToggle) {
                    userMenu.classList.remove('active');
                    userToggle.setAttribute('aria-expanded', 'false');
                }
            }

            if (openLoginModal) {
                openLoginModal.addEventListener('click', function (event) {
                    event.preventDefault();
                    closeRegister();
                    closeSearch();
                    openLogin();
                    lockBodyIfAnyModalOpen();
                    closeMenus();
                });
            }

            if (openRegisterModal) {
                openRegisterModal.addEventListener('click', function (event) {
                    event.preventDefault();
                    closeLogin();
                    closeSearch();
                    openRegister();
                    lockBodyIfAnyModalOpen();
                    closeMenus();
                });
            }

            if (openSearchModal) {
                openSearchModal.addEventListener('click', function (event) {
                    event.preventDefault();
                    closeLogin();
                    closeRegister();
                    openSearch();
                    lockBodyIfAnyModalOpen();
                    closeMenus();
                });
            }

            if (closeLoginModal) {
                closeLoginModal.addEventListener('click', function () {
                    closeLogin();
                    lockBodyIfAnyModalOpen();
                });
            }

            if (loginModalOverlay) {
                loginModalOverlay.addEventListener('click', function () {
                    closeLogin();
                    lockBodyIfAnyModalOpen();
                });
            }

            if (closeRegisterModal) {
                closeRegisterModal.addEventListener('click', function () {
                    closeRegister();
                    lockBodyIfAnyModalOpen();
                });
            }

            if (registerModalOverlay) {
                registerModalOverlay.addEventListener('click', function () {
                    closeRegister();
                    lockBodyIfAnyModalOpen();
                });
            }

            if (closeSearchModal) {
                closeSearchModal.addEventListener('click', function () {
                    closeSearch();
                    lockBodyIfAnyModalOpen();
                });
            }

            if (searchModalOverlay) {
                searchModalOverlay.addEventListener('click', function () {
                    closeSearch();
                    lockBodyIfAnyModalOpen();
                });
            }

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeMenus();
                    closeAllModals();
                }
            });
        });