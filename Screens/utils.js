export function get12HourTime(date) {
  if (mytime==12){
        var hours = 12;
    }
    else{
        var hours = mytime >= 12 ? mytime - 12 : mytime
    }
    
    let minutes = date.getMinutes() == 0 ? "00" : date.getMinutes()
    let p = date.getHours() >= 12 ? " PM" : " AM"
    return hours + ":" + minutes + p
}
