const inputRengeRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text');

const fontSizeControl = (event) => {
    textRef.style.fontSize = event.currentTarget.value + 'px'
}

inputRengeRef.addEventListener('input', fontSizeControl )