const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(item => item.addEventListener("wheel", inputWheel));

function inputWheel(e) {
        e.preventDefault();
        const step = this.getAttribute('step') ? +this.getAttribute('step') : 1;
        e.deltaY > 0 ? this.value = (+this.value + step) : this.value = (+this.value - step);
}