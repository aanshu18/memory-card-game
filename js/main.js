function start() {
    getDOMs();
    changeLimit();
}

let limit;

function getDOMs() {
    const range = document.getElementById('range');
    const limitOutput = document.getElementById('limitOutput');
}

function changeLimit() {
    if (range.value % 2 == 0) {
        limitOutput.innerHTML = range.value;
        limit = range.value;
    } else {
        range.value++;
        changeLimit();
    }
}