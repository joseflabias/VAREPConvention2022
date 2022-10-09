export function get12HourTime(date) {
  if (date.getMinutes()==12){
        var hours = 12;
    }
    else{
        var hours = date.getMinutes() >= 12 ? date.getMinutes() - 12 : date.getMinutes()
    }
    
    let minutes = date.getMinutes() == 0 ? "00" : date.getMinutes()
    let p = date.getHours() >= 12 ? " PM" : " AM"
    return hours + ":" + minutes + p
}
