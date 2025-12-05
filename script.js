// Modal functionality for Step 1
const modal = document.getElementById('step1Modal');
const step1Btn = document.getElementById('step1Btn');
const closeModal = document.getElementById('closeModal');

// Modal functionality for Step 2
const modal2 = document.getElementById('step2Modal');
const step2Btn = document.getElementById('step2Btn');
const closeModal2 = document.getElementById('closeModal2');

// Modal functionality for Step 3
const modal3 = document.getElementById('step3Modal');
const step3Btn = document.getElementById('step3Btn');
const closeModal3 = document.getElementById('closeModal3');

// Modal functionality for Step 4
const modal4 = document.getElementById('step4Modal');
const step4Btn = document.getElementById('step4Btn');
const closeModal4 = document.getElementById('closeModal4');

// Modal functionality for Step 5
const modal5 = document.getElementById('step5Modal');
const step5Btn = document.getElementById('step5Btn');
const closeModal5 = document.getElementById('closeModal5');

// Open Step 1 modal
if (step1Btn) {
  step1Btn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

// Close Step 1 modal
if (closeModal) {
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

// Close Step 1 on outside click
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Open Step 2 modal
if (step2Btn) {
  step2Btn.addEventListener('click', () => {
    modal2.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

// Close Step 2 modal
if (closeModal2) {
  closeModal2.addEventListener('click', () => {
    modal2.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

// Close Step 2 on outside click
if (modal2) {
  modal2.addEventListener('click', (e) => {
    if (e.target === modal2) {
      modal2.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Open Step 3 modal
if (step3Btn) {
  step3Btn.addEventListener('click', () => {
    modal3.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

// Close Step 3 modal
if (closeModal3) {
  closeModal3.addEventListener('click', () => {
    modal3.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

// Close Step 3 on outside click
if (modal3) {
  modal3.addEventListener('click', (e) => {
    if (e.target === modal3) {
      modal3.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Open Step 4 modal
if (step4Btn) {
  step4Btn.addEventListener('click', () => {
    modal4.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

// Close Step 4 modal
if (closeModal4) {
  closeModal4.addEventListener('click', () => {
    modal4.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

// Close Step 4 on outside click
if (modal4) {
  modal4.addEventListener('click', (e) => {
    if (e.target === modal4) {
      modal4.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Open Step 5 modal
if (step5Btn) {
  step5Btn.addEventListener('click', () => {
    modal5.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

// Close Step 5 modal
if (closeModal5) {
  closeModal5.addEventListener('click', () => {
    modal5.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

// Close Step 5 on outside click
if (modal5) {
  modal5.addEventListener('click', (e) => {
    if (e.target === modal5) {
      modal5.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    if (modal2 && modal2.style.display === 'flex') {
      modal2.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    if (modal3 && modal3.style.display === 'flex') {
      modal3.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    if (modal4 && modal4.style.display === 'flex') {
      modal4.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    if (modal5 && modal5.style.display === 'flex') {
      modal5.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
});
