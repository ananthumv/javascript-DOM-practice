const seats = [false, false, false, true, true, true, true, false, false, false]
const root = document.getElementById("root")

for(let i=0; i<=seats.length; i++){
    let seat = document.createElement("div")
    seat.classList.add("seat")
    if(seats[i]===true){
        seat.classList.add("booked")
    }
    root.appendChild(seat)
}
