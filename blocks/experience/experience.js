export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'experience-timeline';

  [...block.children].forEach((row) => {
    const rawText = row.firstElementChild.innerHTML;
    const parts = rawText.split('|').map((s) => s.trim());

    const item = document.createElement('div');
    item.className = 'timeline-item';

    const role = document.createElement('h3');
    role.innerHTML = parts[0] || '';

    const client = document.createElement('h4');
    client.innerHTML = parts[1] || '';

    const details = document.createElement('p');
    details.innerHTML = parts[2] || '';

    // Interactive toggle action
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });

    item.appendChild(role);
    item.appendChild(client);
    item.appendChild(details);
    container.appendChild(item);
  });

  block.textContent = '';
  block.appendChild(container);
}
