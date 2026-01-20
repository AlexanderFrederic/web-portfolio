document.querySelectorAll('.tab-group').forEach(group => {
  const tabs = group.querySelectorAll('.tab');
  const contents = group.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      // Deactivate all tabs and contents in this group
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Activate the clicked tab and its content
      tab.classList.add('active');
      const targetContent = group.querySelector(`#${targetId}`);
      if (targetContent) targetContent.classList.add('active');
    });
  });
});