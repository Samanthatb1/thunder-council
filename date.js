const theDate = document.getElementsByClassName('current-date')[0];

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let current_datetime = new Date()
let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear()

theDate.innerHTML = formatted_date ;