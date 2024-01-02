let h = document.getElementById('hour');
  let m = document.getElementById('min');
  let s = document.getElementById('sec');
  function displayTime(){
    let d = new Date();
    let hr = d.getHours();
    let mi = d.getMinutes();
    let se = d.getSeconds();
    let hrot = 30*hr + mi/2;
    let mrot = 6*mi;
    let srot = 6*se;
    h.style.transform = `rotate(${hrot}deg)`;
    m.style.transform = `rotate(${mrot}deg)`;
    s.style.transform = `rotate(${srot}deg)`;
    document.getElementById('date').innerText = d.getDate();
  }
  setInterval(displayTime,1000);