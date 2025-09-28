// ==========================
// Scroll fade-in
// ==========================
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, options);
faders.forEach(fader => { appearOnScroll.observe(fader); });

// ==========================
// Modal voor feature-kaarten
// ==========================
const cards = document.querySelectorAll('.clickable');
const modalBg = document.getElementById('modal-bg');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const type = card.dataset.content;
    modalBg.style.display = 'flex';
    modal.classList.add('show');

    if(type === 'tips'){
      modalTitle.textContent = 'Tips & Tricks';
      modalContent.innerHTML = `
        <ul style="text-align:left; padding-left:20px;">
          <li>Gebruik efficiënte bouwtechnieken in Minecraft.</li>
          <li>Plan je video's op YouTube met een script.</li>
          <li>Let op goede belichting bij het opnemen.</li>
          <li>Interactie met je community is super belangrijk!</li>
          <li>Experimenteer met spannende uitdagingen en mini-games.</li>
        </ul>`;
    } else if(type === 'challenges'){
      modalTitle.textContent = 'Challenges';
      modalContent.textContent = 'Doe mee met creatieve uitdagingen, zoals speedruns, survival uitdagingen en coole multiplayer games!';
    } else if(type === 'community'){
      modalTitle.textContent = 'Community';
      modalContent.textContent = 'Word lid van onze community! Chat, deel ideeën en speel samen met andere fans.';
    }
  });
});

// Modal sluiten
modalClose.addEventListener('click', () => {
  modalBg.style.display = 'none';
  modal.classList.remove('show');
});
modalBg.addEventListener('click', (e) => {
  if(e.target === modalBg){
    modalBg.style.display = 'none';
    modal.classList.remove('show');
  }
});

// MODPACK DOWNLOAD KNOP
const downloadBtn = document.createElement('button');
downloadBtn.textContent = "Download Modpack";
downloadBtn.classList.add('btn', 'pulse');

const downloadsSection = document.createElement('section');
downloadsSection.classList.add('downloads', 'fade-in');
downloadsSection.innerHTML = `
  <h2>Download Mijn Modpack</h2>
  <p>Klik op de knop hieronder om mijn Minecraft modpack te downloaden!</p>
`;
downloadsSection.appendChild(downloadBtn);
document.querySelector('.wrap').appendChild(downloadsSection);

// Modal voor uitleg
downloadBtn.addEventListener('click', () => {
  modalBg.style.display = 'flex';
  modal.classList.add('show');
  modalTitle.textContent = 'Minecraft Modpack';
  modalContent.innerHTML = `
    <p>Dit is mijn eigen Minecraft modpack! 🎮</p>
    <ul style="text-align:left; padding-left:20px;">
        <li>Compatibel met Minecraft versie 1.20+</li>
        <li>Inclusief mods voor avontuur en bouw</li>
        <li>Installeer via Forge of Fabric</li>
    </ul>
    <a href="downloads/modpack.zip" download class="btn pulse">Klik hier om te downloaden</a>
  `;
});