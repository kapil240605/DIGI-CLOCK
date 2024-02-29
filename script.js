function updatetime() {
    const now = new Date();
    let h = now.getHours().toString();
    let m = now.getMinutes().toString();
    let s = now.getSeconds().toString();
    let session = "AM";

    if (h>12) {
        h= h - 12;
    }

    if (h<=12) {
        session = "PM";
    }

    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;

    const timestring = `${h}:${m}:${s} ${session}`;

    document.getElementById('time').innerText = timestring;
}



setInterval(updatetime, 1000);

updatetime();
