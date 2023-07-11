const compareResults = (userWeight, compWeight) =>{
    const popup = document.getElementById('popup')
    window.addEventListener('click', refreshPage)

function refreshPage(event){
        window.location.reload()
        }



    if (userWeight > compWeight) {
        popup.innerText = 'you win, macho man!'
    } else if (
        userWeight === compWeight
    ) {
        popup.innerText = 'we be the same bro!'
    
    } else {
        popup.innerText = 'you lose chump!'
    }
}

export default compareResults;