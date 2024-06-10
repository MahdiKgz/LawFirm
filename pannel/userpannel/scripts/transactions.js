import { showAllUserTransactions , showTransactionDetail } from "./funcs/shared.js"

window.showTransactionDetail = showTransactionDetail

window.addEventListener('load' , () => {
    showAllUserTransactions();
})