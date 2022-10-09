export function get12HourTime(date) {
  if (date.getHours()==12){
        var hours = 12;
    }
    else{
        var hours = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
    }
    
    let minutes = date.getMinutes() == 0 ? "00" : date.getMinutes()
    let p = date.getHours() >= 12 ? " PM" : " AM"
    return hours + ":" + minutes + p
}
