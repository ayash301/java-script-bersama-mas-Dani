
export function setupSoal6() {
    document.getElementById('changeTextBtn').onclick = function() {
        document.getElementById('textTarget').innerText = 'Teks sudah diubah!';
    };
}

export function setupSoal7() {
    document.getElementById('hoverArea').onmouseover = function() {
        this.style.background = '#3498db';
        this.style.color = 'white';
    };
    
    document.getElementById('hoverArea').onmouseout = function() {
        this.style.background = '';
        this.style.color = '';
    };
}
export function setupSoal8() {
    document.getElementById('realTimeInput').oninput = function() {
        document.getElementById('displayText').innerText = this.value;
    };
}

export function setupSoal9() {
    document.getElementById('oneTimeBtn').onclick = function() {
        this.disabled = true;
        this.innerText = 'Sudah diklik';
    };
}


export function setupSoal10() {
    document.getElementById('overwriteBtn').onclick = function() {
        document.getElementById('overwriteText').innerText = 'Handler kesatu';
    };
    
    document.getElementById('overwriteBtn').onclick = function() {
        document.getElementById('overwriteText').innerText = 'Handler kedua (pertama ditimpa)';
    };
}
export function initBagianB() {
    setupSoal6();
    setupSoal7();
    setupSoal8();
    setupSoal9();
    setupSoal10();
}
initBagianB();