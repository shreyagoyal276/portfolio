function swapWithHeader(button) {
  const header = document.getElementById("mainTitle");
  const contentBlocks = document.querySelectorAll('.section-block');
  const newText = button.innerText;
  const oldText = header.innerText;

  // Calculate center difference for animation
  const buttonRect = button.getBoundingClientRect();
  const headerRect = header.getBoundingClientRect();

  const dx = (buttonRect.left + buttonRect.right) / 2 - (headerRect.left + headerRect.right) / 2;
  const dy = (buttonRect.top + buttonRect.bottom) / 2 - (headerRect.top + headerRect.bottom) / 2;

  // Animate transform
  header.style.transition = "transform 0.5s ease";
  button.style.transition = "transform 0.5s ease";
  header.style.transform = `translate(${dx}px, ${dy}px)`;
  button.style.transform = `translate(${-dx}px, ${-dy}px)`;

  // After animation swap content
  setTimeout(() => {
    // Reset transform and transition
    header.style.transition = "none";
    button.style.transition = "none";
    header.style.transform = "none";
    button.style.transform = "none";

    // Swap text
    header.innerText = newText;
    button.innerText = oldText;

    // Update active content block
    contentBlocks.forEach(div => div.classList.remove('active'));
    const newBlock = document.getElementById(newText);
    if (newBlock) newBlock.classList.add('active');

    // Scroll info screen into view (optional)
    document.querySelector('.info-screen').scrollIntoView({ behavior: 'smooth' });
  }, 500);
}
