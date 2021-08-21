const initialPrice = document.querySelector("#initial-price")
const stocksQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price")
const submitButton = document.querySelector("#tell-me")
const output = document.querySelector("#output")

submitButton.addEventListener('click', () =>{
    calculateProfitAndLoss(Number(initialPrice.value),Number(stocksQuantity.value),Number(currentPrice.value))
})

function showOutput(message){
    output.innerText = message
}

function calculateProfitAndLoss(initial , quantity, current){
    // if(initial ===  || quantity === null || current === null){
    //     showOutput('please fill in all the fields')
    // }
    if(initial > current){
        // loss logic
        let loss = (initial - current)*quantity
        let lossPercentage = (loss/initial)*100
        // output.innertext = `you have lost ${loss} rs. which if of ${lossPercentage}% `
        // console.log(`you have lost ${loss} rs. which if of ${lossPercentage}% `)
        output.style.backgroundColor = "red"
        showOutput(`you have lost ${loss} rs. which if of ${lossPercentage}% `)
        
    } else if(initial < current){
        //profit logic
        let profit = (current - initial) * quantity
        let profitPercentage = (profit/initial)*100
        // output.innerText = `profit of ${profit} rs. which is of ${profitPercentage}%`
        // console.log(`profit of ${profit} rs. which is of ${profitPercentage}%`)
        output.style.backgroundColor = "green"
        showOutput(`profit of ${profit} rs. which is of ${profitPercentage}%`)
    } else {
        // rest code
        // output.innerText = `No pain no gain ! and no gain no pain`
        // console.log(`No pain no gain ! and no gain no pain`)
        output.style.backgroundColor = "gray"
        showOutput(`No pain no gain ! and no gain no pain`)

    }
}