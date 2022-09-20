exports.getDate= function(){
    var date1 = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    return date1.toLocaleDateString('US-EN',options);
}


exports.getDay = function(){
    const options = { weekday: 'long'}
    return date1.toLocaleDateString('US-EN',options);
}

