export function getDate(){
    let today = new Date();
    let options = {weekday: 'long', month: 'short', day: 'numeric'};
    return  today.toLocaleDateString('en-US', options);
}

