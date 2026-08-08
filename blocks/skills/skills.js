export default function decorate(block) {
  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-grid';

  [...block.children].forEach((row) => {
    const text = row.firstElementChild.innerHTML;
    const [category, items] = text.split('|').map((str) => str.trim());

    const card = document.createElement('div');
    card.className = 'skill-card';

    const h3 = document.createElement('h3');
    h3.innerHTML = category;

    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'skill-tags';

    if (items) {
      items.split(',').forEach((skill) => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill.trim();
        tagsDiv.appendChild(tag);
      });
    }

    card.appendChild(h3);
    card.appendChild(tagsDiv);
    skillsContainer.appendChild(card);
  });

  block.textContent = '';
  block.appendChild(skillsContainer);
}
