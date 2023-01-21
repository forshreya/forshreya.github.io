var i = 0;
var txt1 = "Hi Shreyaaa...!    > Welcome to my world. Being an introvert  I often find it difficult expressing myself to > people. But when I do, I make > sure that the other person > really feels special 😁 >> Ufff.. your cuteness is just off the charts. < Your smile 😊, you see.. is among the best things i've seen in my life. I can only wonder how much more beautiful it would be in the real life. Dayum! You also have a doggo!!! introduce me alreadyy T__T  >> I wanna meet you right nowwww, ughhh !!!  I wanna know more about youu! I wanna spend more time with ya and see how things would go !! What's in it for you? >> You'll be getting a kid like friend, who would sing songs for you, send you a nice breakfast when you are sick, write letters for ya, hold your hand everytime he meets you, hear you out when you have a bad day,.... basically wouldn't ever let go of a chance to make you feel special 😁 (can't spill all my secrets, duh). You can trust me on that, I've been with that idiot for 23 years now. >>  Would you be now interested in taking this a step further and go out with me on a virtual date?";
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
