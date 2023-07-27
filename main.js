
var a=prompt("enter a only string");
document.write("Given String="+a+"<br><br>");

b=a.split("");
var c=[];
console.log(b);
document.write("b="+b+"<br><br>");
for(i=0;i<b.length;i++){
    if(b[i]=="a"||b[i]=="e"||b[i]=="i"||b[i]=="o"||b[i]=="u"){
        c.push(b[i]);

    }

}
document.write("Vowels in a given array="+c+"<br><br>");
    document.write("Number of vowels in given array="+c.length);
