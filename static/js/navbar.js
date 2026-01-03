// Navbar scroll behavior
(function() {
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  let lastScroll = 0;

  // Handle navbar background on scroll
  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 24) {
      navbar.classList.add('bg-white', 'dark:bg-gray-900', 'shadow-md', 'backdrop-blur-sm', 'bg-opacity-95', 'dark:bg-opacity-95');
    } else {
      navbar.classList.remove('bg-white', 'dark:bg-gray-900', 'shadow-md', 'backdrop-blur-sm', 'bg-opacity-95', 'dark:bg-opacity-95');
    }

    lastScroll = currentScroll;
  }

  // Mobile menu toggle
  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking links
  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMobileMenu();
    }
  });
})();
