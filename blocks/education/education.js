export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('education-content');

  [...block.children].forEach((row, index) => {
    const div = row.firstElementChild;
    if (!div) return;

    if (index === 0) {
      const heading = document.createElement('h2');
      heading.classList.add('education-heading');
      heading.innerHTML = div.innerHTML;
      container.appendChild(heading);
    } else if (index === 1) {
      const text = document.createElement('p');
      text.classList.add('education-text');
      text.innerHTML = div.innerHTML;
      container.appendChild(text);
    } else {
      const link = div.querySelector('a');
      if (link) {
        link.classList.add('button');
        if (!link.classList.contains('primary')
          && !link.classList.contains('secondary')
          && !link.classList.contains('accent')) {
          link.classList.add('primary');
        }
        const ctaWrapper = document.createElement('p');
        ctaWrapper.classList.add('education-cta');
        ctaWrapper.appendChild(link);
        container.appendChild(ctaWrapper);
      }
    }
  });

  block.textContent = '';
  block.appendChild(container);
}
