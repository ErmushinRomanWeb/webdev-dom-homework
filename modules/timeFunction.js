export function timeFunction(timeFunction) {
    const myDate = timeFunction;
    let day = myDate.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let month = myDate.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = myDate.getFullYear() % 100;
    let hours = myDate.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = myDate.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let timeWithoutSeconds = hours + ":" + minutes;
    const fullDate =
      day + "." + month + "." + year + " " + timeWithoutSeconds;
    return fullDate;
}