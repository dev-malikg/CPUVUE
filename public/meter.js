const per_text = document.getElementById("text_percent")
const circle = document.getElementById("circle")

// setting transition
document.getElementById("arrrow").style.transition = "all 1s"
circle.style.transition = "all 2s"
per_text.style.transition = "all 2s"



// animating number function
function animateValue(obj, start, end, duration) {
    let startTimestamp = null
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        obj.innerHTML = Math.floor(progress * (end - start) + start)
        if (progress < 1) {
            window.requestAnimationFrame(step)
        }
    };
    window.requestAnimationFrame(step)
}

// corving the text 
new CircleType(document.getElementById('measure')).radius(1500)

// variables
const rotated = document.getElementById('arrrow')
rotated.style.transform = 'rotate(-20deg)'

var current_rotation = -20

var OldMax = 100
var OldMin = 0
var NewMax = 20
var NewMin = -20

var s_text = 0

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
ipToConect = getCookie("ip_to_connect_for_cpuPercent")


//repetation process 
$(document).ready(function () {
    setInterval(async function () {


        // getting data
        const getCpuP = () => {
            return new Promise((resolve) => {
                const data = {};
                fetch(`http://${ipToConect}:3000/pcpu`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json()).then((data) => { resolve(data.cpu_usage) })
                    .catch((error) => { console.error('Error:', error) })
            })
        }


        const executeProcesses = async () => {
            getCpuP().then((res) => {
                // getting data from the server ----- Math.floor(Math.random() * 101)
                // var cpu_usage = Math.floor(Math.random() * 101)
                let cpu_usage = Math.floor(res);

                if (cpu_usage > 8 && cpu_usage < 92) {
                    cpu_usage = cpu_usage + 7
                }
                // converting data into suitable data range
                OldRange = (OldMax - OldMin)
                NewRange = (NewMax - NewMin)
                NewValue = (((cpu_usage - OldMin) * NewRange) / OldRange) + NewMin

                // rotatting liddle according to the new data
                rotated.style.transform = 'rotate(' + (NewValue) + 'deg)';


                // animating 
                s_num = parseInt(per_text.innerHTML)
                animateValue(per_text, s_num, cpu_usage, 800)

                // changing colour of circle_meter
                if (cpu_usage >= 0 && cpu_usage < 10) { circle.style.backgroundColor = "#428c6c", per_text.style.color = "#428c6c" }
                else if (cpu_usage >= 10 && cpu_usage < 20) { circle.style.backgroundColor = "#8aa95f", per_text.style.color = "#8aa95f" }
                else if (cpu_usage >= 20 && cpu_usage < 30) { circle.style.backgroundColor = "#a0b259", per_text.style.color = "#a0b259" }
                else if (cpu_usage >= 30 && cpu_usage < 40) { circle.style.backgroundColor = "#b7b957", per_text.style.color = "#b7b957" }
                else if (cpu_usage >= 40 && cpu_usage < 50) { circle.style.backgroundColor = "#cfc44f", per_text.style.color = "#cfc44f" }
                else if (cpu_usage >= 50 && cpu_usage < 60) { circle.style.backgroundColor = "#cfc44f", per_text.style.color = "#cfc44f" }
                else if (cpu_usage >= 60 && cpu_usage < 70) { circle.style.backgroundColor = "#efbe47", per_text.style.color = "#efbe47" }
                else if (cpu_usage >= 70 && cpu_usage < 80) { circle.style.backgroundColor = "#f0ab40", per_text.style.color = "#f0ab40" }
                else if (cpu_usage >= 80 && cpu_usage < 90) { circle.style.backgroundColor = "#ef8b37", per_text.style.color = "#ef8b37" }
                else { circle.style.backgroundColor = "#ee692e", per_text.style.color = "#ee692e" }

            })
        }
        executeProcesses()



    }, 1200)
})