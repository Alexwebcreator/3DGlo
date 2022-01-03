const menu = () => {
  const menu = document.querySelector('menu');
  const body = document.querySelector('body');
  
  body.addEventListener('click', (e) => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let menu_is_active = menu.classList.contains('active-menu');
    if (e.target.closest('.menu') || e.target.classList.contains('close-btn') || its_menu) {
      menu.classList.toggle('active-menu');
    } else if (!its_menu && menu_is_active) {
      menu.classList.toggle('active-menu');
    }
    
  });

};

export default menu;