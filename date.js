module.exports = getDate;

function getDate (){
    
    let date = new Date();
    let day = date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})

    return day
}

