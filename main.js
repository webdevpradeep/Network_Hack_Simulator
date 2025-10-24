const lines = [
  'Initializing network hacking suite data science...',
  'Scanning local network...',
  '192.168.0.25 - Router detected',
  '192.168.0.23 - Target found',
  '',
  'Launching ping flood...',
  'Bypassing firewall...',
  'Firewall bypassed successfully.',
  '',
  'Spoofing MAC address...',
  'Injecting remote payload...',
  'Establishing connection...',
  'Connected to target machine.',
  '',
  'Accessing files...',
  'Found: secrets.txt, bank_logins.docx, data.csv, genom.fasta',
  'Downloading secrets.txt...',
  'Downloading data.csv',
  'Downloading genom.fasta',
  'Download complete.',
  '',
  'Cleaning logs...',
  'Disconnecting...',
  'Session ended.',
  'code by bienvni keba and Braulio ',
];

let index = 0;
let charIndex = 0;
const terminal = document.getElementById('terminal');

function typeLine() {
  if (index < lines.length) {
    if (charIndex === 0) terminal.innerHTML += '\n';
    terminal.innerHTML += lines[index].charAt(charIndex);
    charIndex++;
    if (charIndex < lines[index].length) {
      setTimeout(typeLine, 40);
    } else {
      index++;
      charIndex = 0;
      setTimeout(typeLine, 100);
    }
    terminal.scrollTop = terminal.scrollHeight;
  }
}

function startHack() {
  terminal.innerText = '';
  index = 0;
  charIndex = 0;
  setTimeout(typeLine, 100);
}
