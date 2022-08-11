
let abul = { name: "abul",friend : "Babul"};
abul = abul.name.toLowerCase();

let babul = {name : "Babul",friend: "abul"};
babul = babul.name.toLowerCase();


function isBestFriend( para1, para2){
    if(para1.name === para2.friend && para2.name === para1.friend){
        return true;
    }
    return false
}
