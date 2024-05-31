const wordArray = ["Lemon","Puzzle","Tiger","Banana","Elephant","Ocean","Castle","Guitar","Rainbow","Sunshine","Chocolate","Universe","Dragon","Pizza","Butterfly","Mountain","Telescope","Waterfall","Adventure","Galaxy","Lemonade","Friendship","Moonlight","Fireworks","Paradise","Journey","Treasure","Penguin","Volcano","Starlight","Carnival","Christmas","Dolphin","Wonderland","Icecream","Freedom","Sunflower","Wonderland","Rainbow","Bubblegum","Mermaid","Sunrise","Watermelon","Ladybug","Serenade","Serenity","Harmony","Adventure","Whirlwind","Blossom"];
let random = Math.floor(Math.random()*wordArray.length)
let now = wordArray[random];
let now2 = now.split("")
// console.log(now.split(""));
for (let i = now2.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [now2[i], now2[j]] = [now2[j], now2[i]];
}
now2 =  now2.join("")
console.log(now2);
console.log(now);
document.getElementById("check").addEventListener("click", () => {
    let user = document.getElementById("user").value;
    if (user.toLowerCase() === now.toLowerCase()) {
        alert("You Win");
    } else {
        alert("You lose");
    }
});
document.getElementById("refresh").addEventListener("click",()=>{
    location.reload()
})


