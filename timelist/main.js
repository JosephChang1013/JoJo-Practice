$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    //1 sec = 1000 ms
    //計算一天的毫秒數量
    let millisecsPerDay = 24 * 60 * 60 * 1000;
    var topicCount = topic.length;

   
    for (var x = 0; x < topicCount; x++) {
        $("#courseTable").append(
            "<tr>" +
            `<td>${x + 1}</td>` +
            `<td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString().slice(5)}</td>` +
            `<td>${topic[x]}</td>` +
            "</tr>");
        // `<td>${thisDateObject.getMonth() + 1}/${thisDateObject.getDate()} </td>` +


    }
});

// let input = document.getElementsByTagName("input")
// input.addEventListener("change",changelist)
// function changelist (){
//     for (var x = 0; x < topicCount; x++) {
//         $("#courseTable").append(
//             "<tr>" +
//             `<td>${x + 1}</td>` +
//             `<td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString().slice(5)}</td>` +
//             `<td>${topic[x]}</td>` +
//             "</tr>");
    

            
//             if (topic[x].slice(2)=="停課"){
//                 $("this").css("color",gray);

//             }
//         }