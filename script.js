let output = document.getElementById('output')

function display(num) {
    output.value += num
}
function calc() {
    try {
        output.value = eval(output.value)
    }
    catch(err) {
        alert('invalid')
    }
}
function clear() {
    output.value = "";
}
function del() {
    output.value = output.value.slice(0, -1)
}