let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
homeScoreEl.textContent = 0
guestScoreEl.textContent = 0
let homeScoreNum = 0
let guestScoreNum = 0

function incrementHomeByOne() {
    homeScoreNum++
    homeScoreEl.textContent = homeScoreNum
}

function incrementHomeByTwo() {
    homeScoreNum = homeScoreNum + 2
    homeScoreEl.textContent = homeScoreNum
}

function incrementHomeByThree() {
    homeScoreNum = homeScoreNum + 3
    homeScoreEl.textContent = homeScoreNum
}

function incrementGuestByOne() {
    guestScoreNum++
    guestScoreEl.textContent = guestScoreNum
}

function incrementGuestByTwo() {
    guestScoreNum = guestScoreNum + 2
    guestScoreEl.textContent = guestScoreNum
}

function incrementGuestByThree() {
    guestScoreNum = guestScoreNum + 3
    guestScoreEl.textContent = guestScoreNum
}

function resetGame() {
    homeScoreEl.textContent = 0
    homeScoreNum = 0
    guestScoreEl.textContent = 0
    guestScoreNum = 0
}