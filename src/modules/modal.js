import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      if (screen.width > 768) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
          },
        });
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      if (screen.width > 768) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return 1 - timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
          },
        });
        setTimeout(() => {
          modal.style.display = "none";
          modal.style.opacity = "";
        }, 1100);
      } else {
        modal.style.display = "none";
        modal.style.opacity = "";
      }
    }
  });

};

export default modal;