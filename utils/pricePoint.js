export const pricePoint = (price) => {
    let stringPrice = price.toString();
    let stringPoint = ""; 
    for(let i=stringPrice.length-1; i>=0; i--){
        stringPoint += stringPrice.charAt(i);
        if(i === stringPrice.length-3){
            stringPoint += ".";
        }
    }
    let reverseNumber = stringPoint.split("").reverse().join("")
    return reverseNumber;
}