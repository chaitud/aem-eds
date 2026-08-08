export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('hero-content');

  [...block.children].forEach((row, index) => {
    const div = row.firstElementChild;
    if (!div) return;

    if (index === 0) {
      const h1 = document.createElement('h1');
      h1.innerHTML = div.innerHTML;
      container.appendChild(h1);
    } else if (index === 1) {
      const subtitle = document.createElement('h2');
      subtitle.classList.add('hero-title');
      subtitle.innerHTML = div.innerHTML;
      container.appendChild(subtitle);
    } else {
      const p = document.createElement('p');
      p.classList.add('hero-meta');
      p.innerHTML = div.innerHTML;
      container.appendChild(p);
    }
  });

  block.textContent = '';
  block.appendChild(container);
}
