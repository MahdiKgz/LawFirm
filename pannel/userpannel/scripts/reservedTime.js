import { showUserMeetingDates , showMeetingStatus, submitNewMeeting } from "./funcs/shared.js"

window.showMeetingStatus = showMeetingStatus

window.addEventListener("load" , () => {
    showUserMeetingDates();
    const newMeetingSubmitButton = document.querySelector("#newMeetingSubmit")
    newMeetingSubmitButton.addEventListener("click" , () => {
        submitNewMeeting().then(() => {
            showUserMeetingDates();
        })
    })
})