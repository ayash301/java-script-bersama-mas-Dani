// Soal 11 - Multiple Events
export function setupSoal11() {
    const multiBtn = document.getElementById('multiBtn');
    
    multiBtn.addEventListener('click', function() {
        document.getElementById('multiText').style.color = 'red';
    });
    
    multiBtn.addEventListener('click', function() {
        document.getElementById('multiText').innerText = 'Dua event berjalan!';
    });
}

// Soal 12 - Remove Event
export function setupSoal12() {
    const removeEventBtn = document.getElementById('removeEventBtn');
    
    function eventHandler() {
        alert('Event dijalankan!');
    }
    
    removeEventBtn.addEventListener('click', eventHandler);
    
    document.getElementById('removeBtn').addEventListener('click', function() {
        removeEventBtn.removeEventListener('click', eventHandler);
        alert('Event dihapus!');
    });
}

// Soal 13 - Form Submit
export function setupSoal13() {
    document.getElementById('simpleForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('nameInput').value;
        document.getElementById('formResult').innerText = `Halo, ${name}!`;
    });
}

// Soal 14 - Event Delegation
export function setupSoal14() {
    document.getElementById('itemList').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.style.background = '#2ecc71';
            e.target.innerText += ' ✓';
        }
    });
}

// Soal 15 - Once Event
export function setupSoal15() {
    document.getElementById('onceBtn').addEventListener('click', function() {
        alert('Ini hanya sekali!');
    }, { once: true });
}

// Initialize all
export function initBagianC() {
    setupSoal11();
    setupSoal12();
    setupSoal13();
    setupSoal14();
    setupSoal15();
}