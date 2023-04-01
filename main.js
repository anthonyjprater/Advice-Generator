const adviceId = document.querySelector('#advice-id')
const advice = document.querySelector('.advice')
const getAdviceBtn = document.querySelector('#advice-btn')
document.querySelector('#advice-btn')

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        adviceId.textContent = `ADVICE # ${data.slip.id}`
        advice.innerHTML = `${data.slip.advice}`
        console.log(data)
    })
}

// function getAdvice(){
//     fetch('https://api.adviceslip.com/advice')
//         .then((res) => res.json())
//         .then((data) => console.log(data))
// }

getAdviceBtn.addEventListener('click', getAdvice)