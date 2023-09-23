let a = document.getElementById('AdClosed');
let b = document.getElementById('Ad');

function closeAd() {
    a.style.top = "-30%";
    b.style.top = "-100%";
}


setTimeout(function() {
    let lazyLoadImgs = document.querySelectorAll("img");
    const lazyLoadImgsLen = lazyLoadImgs.length;

    for (let i = lazyLoadImgsLen - 1; i >= 0; --i) {
        let lazyImgsAttr = lazyLoadImgs[i].getAttribute("data-src");
        lazyLoadImgs[i].setAttribute("src", `${lazyImgsAttr}`);
    }
    
}, 5000);



let v = document.getElementById('searchButton');

function SearchA() {
    v.classList.add("search-waiting");
    v.innerHTML = "<span class='between'>search</span>";
    setTimeout(function() { v.innerHTML = "<span class='between'>more_horiz</span>"; }, 2000)
    setTimeout(function() { v.innerHTML = "<span class='between' style='color: #f4b400 !important;'>done</span>"; }, 4000)
    setTimeout(searchAnim, 6000);
}

function searchAnim() {
    v.classList.remove("search-waiting");
    v.innerHTML = "<span>search</span>";
}



$(document).ready(function() {
    $(".filter-options").click(function() {
        $(".filter-options").removeClass("seleted-done");
        $(this).addClass("seleted-done");
    });
});
$(".tagged-filters").click(function() {
    $(this).toggleClass("tagged-tick");
});



function hearted(h) {
    if (h.innerHTML === "<button class=\"material-icons\" style=\"color: #ff5576;animation: bounceIn 1s;\">favorite_border</button>") {

        h.innerHTML = "<button class=\"material-icons\" style=\"color: #ff5576 !important;animation: bounceIn 1s;\">favorite</button>";
    } else {
        h.innerHTML = "<button class=\"material-icons\" style=\"color: #ff5576;animation: bounceIn 1s;\">favorite_border</button>";
    }
}

function booked(b) {
    if (b.innerHTML === "<button class=\"material-icons\" style=\"color: #f4b400;animation: bounceIn 1s;\">bookmark_border</button>") {

        b.innerHTML = "<button class=\"material-icons\" style=\"color: #f4b400 !important;animation: bounceIn 1s;\">bookmark</button>";
    } else {
        b.innerHTML = "<button class=\"material-icons\" style=\"color: #f4b400;animation: bounceIn 1s;\">bookmark_border</button>";
    }
}



function showedit() {
    "use strict";
    let playU = document.getElementById("Userid");
    if (playU.style.display === "none") {
        playU.style.display = "block";
    } else {
        playU.style.display = "none";
    }
}



let w = document.getElementById('changeIcon');
let x = document.getElementById('homeSearch');
let y = document.getElementById('homelogo');
let z = document.getElementById('searchDrop');

function search_side() {
    w.innerText = "arrow_back";
    x.style.left = "-4%";
    y.style.display = "none";
    z.style.display = "block";
}

function search_side_cancel() {
    w.innerText = "search";
    x.style.left = "-1%";
    y.style.display = "block";
    z.style.display = "none"
}



let input = document.getElementById('item');
let button = document.getElementById('add')
let ol = document.getElementById('list');
let clear = document.getElementById('clear');
let searchs = document.getElementById('searchs');


let addToDo = () => {
    if (input.value === '') {
        alert('toDo is Empty');
    } else {
        if (input.value.length <= 1000) {
            ol.innerHTML += `
                <li class="toDoItem">
                    <a class="text" href='#'>${input.value}</a>
                    <div class='remove'><i class='material-icons' style='font-size: 18px;'>clear</i></div>
                </li>
            `;
            localStorage["toDoItems"] = ol.innerHTML;
        } else {
            alert('Max Length is 1000');
        }
    };

    input.value = '';
};

// Add ToDoList On Enter KeyCode
let enterPress = e => {
    if (e.keyCode === 13) {
        addToDo();
    };
};

// Remove ToDo
let removeToDo = e => {
    if (e.target.className === 'remove') {
        e.target.parentElement.remove();
        localStorage["toDoItems"] = ol.innerHTML
    };

};

if (localStorage["toDoItems"]) {
    ol.innerHTML = localStorage["toDoItems"];
}
// Clear ToDo List
let clearToDo = () => {
    while (ol.firstChild) {
        ol.removeChild(ol.lastChild);
        localStorage["toDoItems"] = ol.innerHTML
    };
};

let searchToDo = e => {
    let list = document.getElementsByClassName('toDoItem');
    let text = e.target.value.toLowerCase();

    for (let i = 0; i < list.length; i++) {
        if (list[i].children[0].textContent.toLowerCase().indexOf(text) != -1) {
            list[i].style.display = 'block';
            document.getElementById("nonePic").style.display = "none";
        } else {
            list[i].style.display = 'none';
            document.getElementById("nonePic").style.display = "block";

        };
    };
};

button.addEventListener('click', addToDo);
input.addEventListener('keyup', enterPress);
ol.addEventListener('click', removeToDo);
clear.addEventListener('click', clearToDo);
searchs.addEventListener('keyup', searchToDo);

$(document).ready(function() {
    $("#searchButton").on("click", function() {
        let Sinput = $("#MainS");
        let value = $(Sinput).val().toLowerCase();
        setTimeout(function() {
            $(".search-results").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });

        }, 3000);


    });
});

let recognition = new webkitSpeechRecognition();

recognition.continuous = false;
recognition.interimResults = true;

function searchByVoice() {
    recognition.onresult = function(event) {
        console.log(event);
        let output = document.getElementById("MainSearch");
        output.innerHTML = "";
        for (let i = 0; i < event.results.length; i++) {
            output.innerHTML = output.innerHTML + event.results[i][0].transcript;
        }
    }
    recognition.start();
}




function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});





$('#R').click(function() {
    event.preventDefault();
    $('.U-grp-div').animate({
        scrollLeft: "+=645px"
    }, "fast");
});
$('#L').click(function() {
    event.preventDefault();
    $('.U-grp-div').animate({
        scrollLeft: "-=645px"
    }, "fast");
});

$(".other-U-info").click(function() {
    $(this).toggleClass("Other_act");
});



let adClose = document.getElementById('AdClose')
let ad = document.getElementById('Ad');

function closeAd() {
    adClose.style.top = "-30%";
    ad.style.top = "-100%";
}

function myPopup() {
    let popup = document.getElementById("myPopup");
    popup.style.display = "block";
}

function ClosePop() {

    document.getElementById("myPopup").style.display = "none";

}




$(function() {
    $('.tabs-nav a').click(function() {
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');

        let currentTab = $(this).attr('href');
        $('.tabs-content div').hide();
        $(currentTab).show();

        return false;
    });
});




let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();




function Dashboards(evt, dashCon) {
    let i, dashcontent, dashlinks;
    dashcontent = document.getElementsByClassName("dashcontent");
    for (i = 0; i < dashcontent.length; i++) {
        dashcontent[i].style.display = "none";
    }
    dashlinks = document.getElementsByClassName("side-button");
    for (i = 0; i < dashlinks.length; i++) {
        dashlinks[i].className = dashlinks[i].className.replace(" dashActive", "");
    }
    document.getElementById(dashCon).style.display = "block";
    evt.currentTarget.className += " dashActive";
}

document.getElementById("clicked").click();





let getbox = document.getElementById("mygetbox");
let btned = document.getElementById("mygt");
let spans = document.getElementsByClassName("closed")[0];
btned.onclick = function() {
    getbox.style.display = "block";
}
spans.onclick = function() {
    getbox.style.display = "none";
}

document.getElementById("myModal").onclick = function(event) {
    if (event.target == getbox) {
        getbox.style.display = "none";
    }
}




function change(img) {
    let urlString = 'url(' + img.src + ')';
    document.getElementById("body").style.backgroundImage = urlString;
};




let selector = '.borders img';

$(selector).on('click', function() {
    $(selector).removeClass('actives');
    $(this).addClass('actives');
});




function CopyExe() {
    let copyText = document.getElementById("copiedInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("myTooltip").innerHTML = "Copied!";
}





let audios = document.getElementById('Test_Audio');
let clicked = false;
let buttons = ["b1", "b2", "b3", "b4", "b5", "b6"];
buttons.forEach(function(item) {
    let btn = document.getElementById(item);
    buttons.disabled = true;
});



function today() {
    let d = new Date();
    let text = "Today is " + d.getDate().toString() + "/" + (d.getMonth() + 1).toString() + "/" + d.getFullYear().toString();
    responsiveVoice.speak(text);
}



function handleClick(s) {

    if (s.checked) {

        let div = document.getElementById("Help");
        div.style.display = "block";
        document.getElementById("question").focus();

        responsiveVoice.speak("Hello, I am Your Virtual assistant! Now please tell me what can i do for you?", "UK English Female");
        buttons.forEach(function(item) {
            let btn = document.getElementsByClassName("buttonS");
            btn.disabled = false;

        });

    } else {
        let div = document.getElementById("Help");
        div.style.display = "none";
        buttons.forEach(function(item) {
            let btn = document.getElementsByClassName("buttonS");
            btn.disabled = true;
        });
        responsiveVoice.speak('Okay! Good bye, See you Soon!');



    }
}

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    return "The time is " + convertHourToName(h) + " o'clock and " + convertNumberToName(m) + " past";

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function convertHourToName(num) {
    if (num > 12) {
        num -= 12;
    }
    return convertNumberToName(num);
}

function convertNumberToName(num) {
    let lowNames = ["zero", "one", "two", "three",
        "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen"
    ];
    let tensNames = ["twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"
    ];
    let tens, ones, result;
    if (num < lowNames.length) {
        result = lowNames[num];
    } else {
        tens = Math.floor(num / 10);
        ones = num % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            result = "unknown";
        }
    }
    return result;
}

function theTime() {
    responsiveVoice.speak(startTime());

}

function walden() {
    quotes = ["I find it wholesome to be alone the greater part of the time. To be in company, even with the best, is soon wearisome and dissipating. I love to be alone. I never found the companion that was so companionable as solitude.",
        " Just like freedom, Truth is not cheap. Yet both are worth more than all the gold in the world. But what is freedom, if there is no truth? And what is truth, if there is no freedom? Both are worth fighting for — because one without the other would be hell.",

        "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms."
    ];

    let q = quotes.length;
    let responseIndex = Math.floor((Math.random() * 10) + 1) % q;
    let response = quotes[responseIndex];
    responsiveVoice.speak(response, "Us English Female");
}


function calculate() {
    let toDo = document.getElementById('calc').value;
    try {
        let result = eval(toDo);
        responsiveVoice.speak("The result of " + toDo + " is  " + result + ".");
    } catch (err) {
        responsiveVoice.speak("I dont know. Maybe Next time.");
    }

}

function includes(container, value) {
    let returnValue = false;
    let pos = container.indexOf(value);
    if (pos >= 0) {
        returnValue = true;
    }
    return returnValue;
}

function answer() {

    let assist = new Audio();
    assist.src = '/Users/arunmadhavfegade/Downloads/google_now_voice (1).mp3';
    assist.play();

    let found = false;
    let emptywords = ["", " "];
    let guidewords = ["guide", "guide me", "guide me on this webpage", "help me to understand this page", "help me to understand this webpage", "please show me the guide", "tutorial", "tutorial of this webpage", "tutorial of webpage", "tutorial of my page"];

    let datewords = ["today", "date"];
    let timewords = ["time", "clock"];
    let musicwords = ["music", "song", "play a good song", "play a song for me", "play a song", "play a nice song"];
    let whatwords = ["what is the memo of the webpage?"];
    let pausewords = ["pause"];
    let hiwords = ["hello", "hi", "good", "hallo", "helo", "ohayo", "ohaayo", "namaskar"];
    let assistwords = ["What can you do for me", "my command", "obey me"];
    let howwords = ["how are you", "how are you?", "how are you today"];
    let word = document.getElementById('question').value.toLowerCase();
    let words = word.split(" ");

    if (includes(datewords, word)) {

        today();
        return;
    }

    if (includes(timewords, word)) {
        theTime();
        found = true;
    }


    if (includes(musicwords, word)) {
        responsiveVoice.speak('Okay! I Am playing it.');
        setTimeout(function() {
            audios.play();
        }, 2500)

        document.getElementById('Mydis').style.display = "block";
        found = true;
    }

    if (includes(pausewords, word)) {
        responsiveVoice.speak("Okay! It is paused!");
        audios.pause();
        found = true;
        document.getElementById('Mydis').style.display = "none";
    }

    if (includes(hiwords, word)) {
        responsiveVoice.speak("Hi!!! nice to see you");
        found = true;
    }

    if (includes(whatwords, word)) {

        responsiveVoice.speak("There are \'boys\' and \'girls\' like my master. to respect their talent we are here.");

        found = true;

    }

    if (includes(assistwords, word)) {

        responsiveVoice.speak("Your Wish. Is my command!");

        found = true;

    }

    if (includes(emptywords, word)) {

        responsiveVoice.speak("Please tell me briefly!");

        found = true;

    }

    if (includes(howwords, word)) {

        responsiveVoice.speak("I am Fine! How are You?");
        found = true;
    }


    if (includes(guidewords, word)) {

        responsiveVoice.speak('Sure! I am going to take You at the guide Page.');
        setTimeout(function() {
            location.replace("Guide.html");
        }, 2500);

        found = true;

    }


    if (found === false) {
        responsiveVoice.speak("Sorry.! i didn't get that.");
        found = true;
    }

}


function news() {

    let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=9dce0afd2b8d42ffa33e4c8e667dc324";
    let req = new Request(url);
    let i = 0;
    let text = "";

    fetch(req)
        .then(function(resp) {

            return resp.json();
        })
        .then(function(myJson) {

            for (i in myJson.articles) {
                text = text + myJson.articles[i].title + ". "
            }

            responsiveVoice.speak(text);
        });
}

function OpenTab(evt, cityName) {
    let i, gapcontent, gaplinks;
    gapcontent = document.getElementsByClassName("gapcontent");
    for (i = 0; i < gapcontent.length; i++) {
        gapcontent[i].style.display = "none";
    }
    gaplinks = document.getElementsByClassName("gaplinks");
    for (i = 0; i < gaplinks.length; i++) {
        gaplinks[i].className = gaplinks[i].className.replace(" activation", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " activation";
}

document.getElementById("defaultOpend").click();



let editBtn = document.getElementById('editBtn');
let editables = document.querySelectorAll('#title, #author, #content');

if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem('title') !== null) {
        editables[0].innerHTML = localStorage.getItem('title');
    }
    if (localStorage.getItem('author') !== null) {
        editables[1].innerHTML = localStorage.getItem('author');
    }
    if (localStorage.getItem('content') !== null) {
        editables[2].innerHTML = localStorage.getItem('content');
    }
}

editBtn.addEventListener('click', function(e) {
    if (!editables[0].isContentEditable) {
        editables[0].contentEditable = 'true';
        editables[1].contentEditable = 'true';
        editables[2].contentEditable = 'true';

        editables[0].style.background = 'rgba(63,133,244,0.07)';
        editables[1].style.background = 'rgba(63,133,244,0.07)';
        editables[2].style.background = 'rgba(63,133,244,0.07)';

        editables[0].style.color = '#1e90ff';
        editables[1].style.color = '#1e90ff';
        editables[2].style.color = '#1e90ff';

        editBtn.innerHTML = '<i class="material-icons">done_all</i>';
        editBtn.style.backgroundColor = 'rgba(63,133,244,0.078)';
        editBtn.style.color = 'dodgerblue';


    } else {
        // Disable Editing
        editables[0].contentEditable = 'false';
        editables[1].contentEditable = 'false';
        editables[2].contentEditable = 'false';

        editables[0].style.background = 'transparent';
        editables[1].style.background = 'transparent';
        editables[2].style.background = 'transparent';

        editables[0].style.color = '#333';
        editables[1].style.color = '#333';
        editables[2].style.color = '#333';

        // Change Button Text and Color
        editBtn.innerHTML = '<i class="material-icons">edit</i>';
        editBtn.style.backgroundColor = '#ffffff';
        editBtn.style.color = 'dodgerblue';
        // Save the data in localStorage 
        for (let i = 0; i < editables.length; i++) {
            localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
        }
    }
});






$(function() {
    $("#imageUpload").change(function() {
        if (this.files && this.files[0]) {
            let reader = new FileReader();

            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
    $('#myImgA').attr('src', e.target.result);
    $('#yourImage').attr('src', e.target.result);
    $('#navimg').attr('src', e.target.result);
};



$("#item").on("input", function() {
    $("#MainSearch").val($(this).val());
});
$("#MainSearch").on("input", function() {
    $("#item").val($(this).val());
});





function handleBack(b) {


    let bg_1 = document.getElementById("editProfile");
    let bg_2 = document.getElementById("matched");
    let bg_3 = document.getElementById("lastView");
    let bg_4 = document.getElementById("sidebar");
    let bg_5 = document.getElementById("userDash");
    let bg_6 = document.getElementById("histories");

    if (b.checked) {

        bg_1.style.backgroundImage = 'url("https://cdn.dribbble.com/users/103909/screenshots/3693125/airbnb-04.png")';
        bg_1.style.backgroundRepeat = "no-repeat";
        bg_1.style.backgroundSize = "500px 500px";
        bg_1.style.backgroundPosition = "center";

        bg_2.style.backgroundImage = 'url("https://cdn.dribbble.com/users/103909/screenshots/3757866/nyt-04.png")';
        bg_2.style.backgroundRepeat = "no-repeat";
        bg_2.style.backgroundSize = "500px 500px";
        bg_2.style.backgroundPosition = "bottom right";

        bg_3.style.backgroundImage = 'url("https://cdn.dribbble.com/users/2330950/screenshots/6586087/63.jpg")';
        bg_3.style.backgroundRepeat = "no-repeat";
        bg_3.style.backgroundSize = "250px 250px";
        bg_3.style.backgroundPosition = "bottom right";

        bg_4.style.backgroundImage = 'url("https://cdn.dribbble.com/users/458522/screenshots/4330646/connect_accounts.jpg"), url("https://cdn.dribbble.com/users/103909/screenshots/7126728/media/017d23bb3e79c8fb5276a58f7a462145.png")';
        bg_4.style.backgroundRepeat = "no-repeat, no-repeat";
        bg_4.style.backgroundSize = "250px 225px, 250px 300px";
        bg_4.style.backgroundPosition = "bottom center, top center";

        bg_5.style.backgroundImage = 'url("https://cdn.dribbble.com/users/103909/screenshots/5299571/flavio-06.png")';
        bg_5.style.backgroundRepeat = "no-repeat";
        bg_5.style.backgroundSize = "500px 300px";
        bg_5.style.backgroundPosition = "bottom right";

        bg_6.style.backgroundImage = 'url("https://cdn.dribbble.com/users/103909/screenshots/3887718/affinity-01.png")';
        bg_6.style.backgroundRepeat = "no-repeat";
        bg_6.style.backgroundSize = "500px 300px";
        bg_6.style.backgroundPosition = "bottom right";

        responsiveVoice.speak("Okay, Turned On");

    } else {

        bg_1.style.backgroundImage = "none";
        bg_2.style.backgroundImage = "none";
        bg_3.style.backgroundImage = "none";
        bg_4.style.backgroundImage = "none";
        bg_5.style.backgroundImage = "none";
        bg_6.style.backgroundImage = "none";


        responsiveVoice.speak('Hmmm, it\'s off');


    }
}





function handleAcc(a) {

    let gamebox = document.getElementById('mygamebox');

    if (a.checked) {

        gamebox.style.display = "block";

        responsiveVoice.speak("okay, It\'s connecting");


    } else {

        gamebox.style.display = "none";

        responsiveVoice.speak('Disconnected!');


    }
}






function handleWidget(w) {



    if (w.checked) {

        document.getElementById("widget").style.display = "block";
        responsiveVoice.speak("Sure, You cancheck this Widgets in Users page.");

    } else {

        document.getElementById("widget").style.display = "block";
        responsiveVoice.speak('okay, it\'s disabled');

    }
}





function handleSecure(u) {



    if (u.checked) {


        responsiveVoice.speak("Checking. please hold on your butt!. it\'s turned on");

    } else {

        responsiveVoice.speak('It is turned off!');


    }
}





function myFunction4() {
    document.getElementById("snackbar4").classList.toggle("show4");
    document.getElementById("snackbar4").classList.remove("hide4");
}

function snack_close() {

    document.getElementById("snackbar4").classList.toggle("hide4");
    document.getElementById("snackbar4").classList.remove("show4");

}



let umodal = document.getElementById("Umodal");
let trig = document.getElementById("UPost");
let ucancel = document.getElementById("ucancel");

let uemoji = document.getElementById("Emoji");
let uemocan = document.getElementById("uemocan");
let uemotrig = document.getElementById("emotrig");

let uimg = document.getElementById("UPimg");
let uimtrig = document.getElementById("uimtrig");

trig.addEventListener("click", function() {
    umodal.style.display = "block";
    document.getElementById("overlay").style.display = "block";
});
ucancel.addEventListener("click", function() {
    umodal.style.display = "none";
    document.getElementById("overlay").style.display = "none";
});
uemocan.addEventListener("click", function() {
    uemoji.style.opacity = "0";
    uemoji.style.zIndex = "-1";
});
uemotrig.addEventListener("click", function() {

    uemoji.style.opacity = "1";
    uemoji.style.zIndex = "50";
});

uimtrig.addEventListener("click", function() {

    uimg.style.opacity = "1";
    uimg.style.zIndex = "50";
});

function Posted() {
    let umodal = document.getElementById("Umodal");
    umodal.style.display = "none";
    document.getElementById('overlay').style.display = "none";
}



let uemijac = '.main-emoji-holder';
$(uemijac).on('click', function() {
    $(uemijac).removeClass('emoji-selected');
    $(this).addClass('emoji-selected');
});




let uback = document.getElementById("UBack");
let norm = document.getElementById("norm");
uback.addEventListener("click", function() {
    document.getElementById('backgShow').classList.toggle("leftanim");
});
norm.addEventListener("click", function() {
    document.getElementById("Uint").classList.remove("empty");
    document.getElementById("Uint").style.backgroundImage = "none";
    document.getElementById("Uint").style.borderRadius = "5px";
    document.getElementById("Uint").style.color = "#333";
});



$(document).ready(function() {

    $('#Uposted').click(function() {
        let toAdd = $('div[name="Uposts"]').text();

        $(".other-U-info").click(function() {
            $(this).toggleClass("Other_act");
        });

        $('.for-you').after("<div class='comm-txt'><svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='32' height='32' style='position: relative;' viewBox='0 0 172 172' style=' fill:#000000;'><defs><linearGradient x1='77.099' y1='63.20283' x2='163.37133' y2='192.32825' gradientUnits='userSpaceOnUse' id='color-1_6BBCqlzE4iKd_gr1'><stop offset='0' stop-color='#28afea'></stop><stop offset='1' stop-color='#0b88da'></stop></linearGradient><linearGradient x1='5.04533' y1='87.46917' x2='130.18608' y2='165.421' gradientUnits='userSpaceOnUse' id='color-2_6BBCqlzE4iKd_gr2'><stop offset='0' stop-color='#28afea'></stop><stop offset='1' stop-color='#0b88da'></stop></linearGradient></defs><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g><path d='M32.25,93.16667l129,-51.27033v94.27033c0,3.95958 -3.20708,7.16667 -7.16667,7.16667h-121.83333z' fill='url(#color-1_6BBCqlzE4iKd_gr1)'></path><path d='M10.75,41.89633v94.27033c0,3.95958 3.20708,7.16667 7.16667,7.16667h136.16667c1.75942,0 3.35042,-0.65933 4.59742,-1.71283z' fill='url(#color-2_6BBCqlzE4iKd_gr2)'></path><path d='M10.75,39.41667h150.5v6.063l-62.06333,48.19583c-7.75792,6.02358 -18.61542,6.02358 -26.37333,0l-62.06333,-48.19583z' fill='#000000' opacity='0.05'></path><path d='M10.75,37.625h150.5v6.063l-64.62183,46.98467c-6.31383,4.67267 -14.9425,4.67267 -21.25633,0l-64.62183,-46.98467z' fill='#000000' opacity='0.07'></path><path d='M17.91667,28.66667h136.16667c3.95958,0 7.16667,3.20708 7.16667,7.16667v6.063l-67.18033,45.7735c-4.86975,3.31817 -11.27317,3.31817 -16.13933,0l-67.18033,-45.7735v-6.063c0,-3.95958 3.20708,-7.16667 7.16667,-7.16667z' fill='#50e6ff'></path></g></g></svg> <span style='position: relative;top: -10px;'><b style='color: #787878;cursor: pointer;'>ShreyB</b> Posted</span><i class='material-icons more-opt-U'>more_horiz</i><hr class='a-line'><br><div class='top-side-user'><img src='https://mcdn.wallpapersafari.com/medium/47/16/wrGW5E.jpg'><span>Shrey bhangale</span><b>November 25, 2020 •  <i class='material-icons' style='position: absolute;font-weight: bolder;font-size: 14px;text-indent: 20%;cursor: default;'>public</i></b></div><br><div class='main-commnts'>" + toAdd + "</div><hr class='a-line'><div class='more-info-details'><div class='other-U-info'><svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'width='25' height='25'viewBox='0 0 172 172'style=' fill:#000000;'><g transform='translate(9.03,9.03) scale(0.895,0.895)'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='none' stroke-linecap='butt' stroke-linejoin='none' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g fill='#ffffff' stroke='#666666' stroke-width='30' stroke-linejoin='round'><path d='M50.38883,151.145c-5.61867,3.38983 -12.54883,-1.64833 -11.05817,-8.03383l9.45283,-40.51317l-31.46883,-27.262c-4.95933,-4.29283 -2.30767,-12.44133 4.22833,-12.99317l41.42333,-3.51167l16.20383,-38.23417c2.5585,-6.02717 11.10117,-6.02717 13.65967,0l16.20383,38.23417l41.42333,3.51167c6.536,0.55183 9.18767,8.70033 4.22833,12.99317l-31.46883,27.262l9.45283,40.51317c1.49067,6.3855 -5.4395,11.42367 -11.05817,8.03383l-35.61117,-21.49283z'></path></g><path d='M0,172v-172h172v172z' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path><g fill='#ffffff' stroke='none' stroke-width='1' stroke-linejoin='miter'><path d='M86,129.65217l35.61117,21.49283c5.61867,3.38983 12.54883,-1.64833 11.05817,-8.03383l-9.45283,-40.51317l31.46883,-27.262c4.95933,-4.29283 2.30767,-12.44133 -4.22833,-12.99317l-41.42333,-3.51167l-16.20383,-38.23417c-2.5585,-6.02717 -11.10117,-6.02717 -13.65967,0l-16.20383,38.23417l-41.42333,3.51167c-6.536,0.55183 -9.18767,8.70033 -4.22833,12.99317l31.46883,27.262l-9.45283,40.51317c-1.49067,6.3855 5.4395,11.42367 11.05817,8.03383z'></path></g><path d='' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path></g></g></svg><span class='user-i-hover'>Grade Up</span><b>11.1K</b></div><div class='other-U-info'><svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='25' height='25' viewBox='0 0 172 172' style=' fill:#000000;'><g transform='translate(8.944,8.944) scale(0.896,0.896)'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='none' stroke-linecap='butt' stroke-linejoin='none' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g fill='#ffffff' stroke='#666666' stroke-width='30' stroke-linejoin='round'><path d='M149.69733,38.06933c27.68483,36.57867 -24.725,79.37083 -37.05167,90.859c-7.3745,6.87283 -16.47617,15.03567 -21.9085,19.87317c-2.71617,2.42233 -6.76533,2.42233 -9.4815,0c-5.43233,-4.8375 -14.534,-13.00033 -21.9085,-19.87317c-12.32667,-11.48817 -64.72933,-54.28033 -37.05167,-90.859c7.955,-10.5135 20.03083,-17.071 33.20317,-16.5335c19.64383,0.80267 30.50133,14.9425 30.50133,14.9425c0,0 10.8575,-14.13983 30.50133,-14.9425c13.17233,-0.5375 25.24817,6.02 33.196,16.5335z'></path></g><path d='M0,172v-172h172v172z' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path><g fill='#ffffff' stroke='none' stroke-width='1' stroke-linejoin='miter'><path d='M116.50133,21.53583c-19.64383,0.80267 -30.50133,14.9425 -30.50133,14.9425c0,0 -10.8575,-14.13983 -30.50133,-14.9425c-13.17233,-0.5375 -25.24817,6.02 -33.20317,16.5335c-27.67767,36.57867 24.725,79.37083 37.05167,90.859c7.3745,6.87283 16.47617,15.03567 21.9085,19.87317c2.71617,2.42233 6.76533,2.42233 9.4815,0c5.43233,-4.8375 14.534,-13.00033 21.9085,-19.87317c12.32667,-11.48817 64.7365,-54.28033 37.05167,-90.859c-7.94783,-10.5135 -20.02367,-17.071 -33.196,-16.5335z'></path></g><path d='' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path><path d='' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path></g></g></svg><span class='user-i-hover'>Like</span><b>100K</b></div><div class='other-U-info'><svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='25' height='25' viewBox='0 0 172 172' style=' fill:#000000;'><g transform='translate(14.706,14.706) scale(0.829,0.829)'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='none' stroke-linecap='butt' stroke-linejoin='none' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g fill='#ffffff' stroke='#666666' stroke-width='30' stroke-linejoin='round'><path d='M129,14.33333c0.9899,0 1.95019,0.10309 2.88347,0.29395c5.59965,1.14513 10.01079,5.55627 11.15592,11.15592c0.19177,0.93083 0.29395,1.89805 0.29395,2.88346v129l-57.33333,-21.5l-57.33333,21.5v-129c0,-6.92927 4.91694,-12.70341 11.44987,-14.03939c0.93328,-0.19085 1.89357,-0.29395 2.88346,-0.29395z'></path></g><path d='M0,172v-172h172v172z' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path><g fill='#ffffff' stroke='none' stroke-width='1' stroke-linejoin='miter'><path d='M43,14.33333c-0.9899,0 -1.95019,0.10309 -2.88346,0.29395c-6.53293,1.33598 -11.44987,7.11012 -11.44987,14.03939v129l57.33333,-21.5l57.33333,21.5v-129c0,-0.98542 -0.10218,-1.95264 -0.29395,-2.88346c-1.14513,-5.59966 -5.55627,-10.0108 -11.15592,-11.15592c-0.93328,-0.19085 -1.89357,-0.29395 -2.88347,-0.29395z'></path></g><path d='' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path></g></g></svg><span class='user-i-hover'>Save</span></div><div class='other-U-info'><svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='25' height='25' viewBox='0 0 172 172' style=' fill:#000000;'><g transform='translate(12.728,12.728) scale(0.852,0.852)'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='none' stroke-linecap='butt' stroke-linejoin='none' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g fill='#ffffff' stroke='#666666' stroke-width='30' stroke-linejoin='round'><path d='M17.2,149.06667c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333c0,-9.202 2.78067,-88.5628 97.46667,-91.6416v-23.02507c0,-2.31627 1.39893,-4.41467 3.53747,-5.2976c2.14427,-0.8944 4.6096,-0.3956 6.24933,1.24413l40.13333,40.13333c2.24173,2.24173 2.24173,5.8652 0,8.10693l-40.13333,40.13333c-1.63973,1.63973 -4.10507,2.1328 -6.24933,1.24413c-2.13853,-0.88293 -3.53747,-2.98133 -3.53747,-5.2976v-22.85307c-35.088,0.9804 -60.95107,11.03093 -75.0092,29.22853c-10.86467,14.0524 -10.9908,27.88693 -10.9908,28.02453c0,3.17053 -2.56853,5.73333 -5.73333,5.73333z'></path></g><path d='M0,172v-172h172v172z' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path><g fill='#ffffff' stroke='none' stroke-width='1' stroke-linejoin='miter'><path d='M17.2,149.06667c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333c0,-9.202 2.78067,-88.5628 97.46667,-91.6416v-23.02507c0,-2.31627 1.39893,-4.41467 3.53747,-5.2976c2.14427,-0.8944 4.6096,-0.3956 6.24933,1.24413l40.13333,40.13333c2.24173,2.24173 2.24173,5.8652 0,8.10693l-40.13333,40.13333c-1.63973,1.63973 -4.10507,2.1328 -6.24933,1.24413c-2.13853,-0.88293 -3.53747,-2.98133 -3.53747,-5.2976v-22.85307c-35.088,0.9804 -60.95107,11.03093 -75.0092,29.22853c-10.86467,14.0524 -10.9908,27.88693 -10.9908,28.02453c0,3.17053 -2.56853,5.73333 -5.73333,5.73333z'></path></g><path d='' fill='none' stroke='none' stroke-width='1' stroke-linejoin='miter'></path></g></g></svg><span class='user-i-hover'>Share</span></div></div></div>");

    });

    $('.main-emoji-holder').click(function() {

        let emojis = $(".main-emoji-holder .svgap").html();

        $('.for-you').after("<div class='comm-txt'><svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='32' height='32' viewBox='0 0 172 172' style=' fill:#000000;'><defs><radialGradient cx='87.00781' cy='95.59169' r='133.78375' gradientUnits='userSpaceOnUse' id='color-1_119289_gr1'><stop offset='0' stop-color='#ffffff'></stop><stop offset='0.193' stop-color='#ffffff'></stop><stop offset='0.703' stop-color='#ffffff'></stop><stop offset='1' stop-color='#ffffff'></stop></radialGradient><linearGradient x1='86' y1='150.5' x2='86' y2='16.125' gradientUnits='userSpaceOnUse' id='color-2_119289_gr2'><stop offset='0' stop-color='#d1d668'></stop><stop offset='0.612' stop-color='#e2e076'></stop><stop offset='1' stop-color='#e3c545'></stop></linearGradient><linearGradient x1='48.375' y1='73.90625' x2='56.4375' y2='73.90625' gradientUnits='userSpaceOnUse' id='color-3_119289_gr3'><stop offset='0' stop-color='#ffe79f'></stop><stop offset='0.258' stop-color='#ffe9a7'></stop><stop offset='0.66' stop-color='#ffefbd'></stop><stop offset='1' stop-color='#fff5d5'></stop></linearGradient><linearGradient x1='107.5' y1='73.90625' x2='115.5625' y2='73.90625' gradientUnits='userSpaceOnUse' id='color-4_119289_gr4'><stop offset='0' stop-color='#ffe79f'></stop><stop offset='0.258' stop-color='#ffe9a7'></stop><stop offset='0.66' stop-color='#ffefbd'></stop><stop offset='1' stop-color='#fff5d5'></stop></linearGradient></defs><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g><path d='M161.25,118.25h-40.3125l-6.9875,-2.6875h16.15725c3.05838,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-8.54356 -6.47419,-8.54356c-2.22525,0 -4.03125,-1.806 -4.03125,-4.03125c0,-2.22525 1.806,-4.03125 4.03125,-4.03125h7.826c3.06106,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-11.23106 -6.47419,-11.23106h-1.34375c-2.96969,0 -5.375,-2.40531 -5.375,-5.375c0,-2.96969 2.40531,-5.375 5.375,-5.375h25.29475c3.06106,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-8.54356 -6.47419,-8.54356h-4.03125c-2.96969,0 -5.375,-2.40531 -5.375,-5.375c0,-2.96969 2.40531,-5.375 5.375,-5.375h5.375c4.9665,0 8.91981,-4.54994 7.90125,-9.68844c-0.76056,-3.82431 -4.35375,-6.43656 -8.25331,-6.43656h-27.86669c-2.22525,0 -4.03125,-1.806 -4.03125,-4.03125c0,-2.22525 1.806,-4.03125 4.03125,-4.03125h15.8885c3.06106,0 5.91788,-1.93769 6.71069,-4.89394c1.19862,-4.46931 -2.18494,-8.54356 -6.47419,-8.54356h-123.3885c-3.06106,0 -5.91788,1.93769 -6.71069,4.89394c-1.19862,4.46931 2.18494,8.54356 6.47419,8.54356v0c3.71144,0 6.71875,3.00731 6.71875,6.71875c0,3.71144 -3.00731,6.71875 -6.71875,6.71875h-2.451h-6.95525c-4.43438,0 -8.0625,3.62812 -8.0625,8.0625c0,4.43437 3.62812,8.0625 8.0625,8.0625h51.0625c0.946,0 1.84094,-0.19619 2.6875,-0.49719v30.05969h-19.91975c-3.06106,0 -5.91787,4.62519 -6.71069,7.58144c-0.58856,2.19569 -0.0645,4.28656 1.12338,5.85606h-37.64919c-3.71144,0 -6.71875,3.00731 -6.71875,6.71875c0,3.71144 3.00731,6.71875 6.71875,6.71875h2.6875c3.71144,0 6.71875,3.00731 6.71875,6.71875c0,3.71144 -3.00731,6.71875 -6.71875,6.71875h-1.34375c-4.45319,0 -8.0625,3.60931 -8.0625,8.0625c0,4.45319 3.60931,8.0625 8.0625,8.0625h14.78125c3.71144,0 6.71875,3.00731 6.71875,6.71875c0,3.71144 -3.00731,6.71875 -6.71875,6.71875h-4.03125c-4.45319,0 -8.0625,3.60931 -8.0625,8.0625c0,4.45319 3.60931,8.0625 8.0625,8.0625h129c4.45319,0 8.0625,-3.60931 8.0625,-8.0625c0,-4.45319 -3.60931,-8.0625 -8.0625,-8.0625h-1.34375c-3.71144,0 -6.71875,-3.00731 -6.71875,-6.71875c0,-3.71144 3.00731,-6.71875 6.71875,-6.71875h12.09375c4.45319,0 8.0625,-3.60931 8.0625,-8.0625c0,-4.45319 -3.60931,-8.0625 -8.0625,-8.0625z' fill='url(#color-1_119289_gr1)'></path><path d='M153.1875,83.3125c0,37.10094 -30.08656,67.1875 -67.1875,67.1875c-37.10094,0 -67.1875,-30.08656 -67.1875,-67.1875c0,-37.10094 30.08656,-67.1875 67.1875,-67.1875c37.10094,0 67.1875,30.08656 67.1875,67.1875z' fill='url(#color-2_119289_gr2)'></path><path d='M69.875,77.9375c0,7.42825 -6.00925,13.4375 -13.4375,13.4375c-7.42825,0 -13.4375,-6.00925 -13.4375,-13.4375c0,-7.42825 6.00925,-13.4375 13.4375,-13.4375c7.42825,0 13.4375,6.00925 13.4375,13.4375z' fill='#717171'></path><path d='M56.4375,73.90625c0,2.22525 -1.806,4.03125 -4.03125,4.03125c-2.22525,0 -4.03125,-1.806 -4.03125,-4.03125c0,-2.22525 1.806,-4.03125 4.03125,-4.03125c2.22525,0 4.03125,1.806 4.03125,4.03125z' fill='url(#color-3_119289_gr3)'></path><path d='M129,77.9375c0,7.42825 -6.00925,13.4375 -13.4375,13.4375c-7.42825,0 -13.4375,-6.00925 -13.4375,-13.4375c0,-7.42825 6.00925,-13.4375 13.4375,-13.4375c7.42825,0 13.4375,6.00925 13.4375,13.4375z' fill='#717171'></path><path d='M115.5625,73.90625c0,2.22525 -1.806,4.03125 -4.03125,4.03125c-2.22525,0 -4.03125,-1.806 -4.03125,-4.03125c0,-2.22525 1.806,-4.03125 4.03125,-4.03125c2.22525,0 4.03125,1.806 4.03125,4.03125z' fill='url(#color-4_119289_gr4)'></path><path d='M86,126.3125c-8.89294,0 -16.125,-6.63006 -16.125,-14.78125c0,-2.22794 1.806,-4.03125 4.03125,-4.03125c2.22525,0 4.03125,1.80331 4.03125,4.03125c0,3.70337 3.61737,6.71875 8.0625,6.71875c4.44512,0 8.0625,-3.01538 8.0625,-6.71875c0,-2.22794 1.806,-4.03125 4.03125,-4.03125c2.22525,0 4.03125,1.80331 4.03125,4.03125c0,8.15119 -7.23206,14.78125 -16.125,14.78125z' fill='#717171'></path></g></g></svg> <span style='position: relative;top: -10px;'><b style='color: #787878;cursor: pointer;'>ShreyB</b> Feeling</span><i class='material-icons more-opt-U'>more_horiz</i><hr class='a-line'><br><div class='top-side-user'><img src='https://mcdn.wallpapersafari.com/medium/47/16/wrGW5E.jpg'><span>Shrey bhangale</span><b>November 25, 2020 •  <i class='material-icons' style='position: absolute;font-weight: bolder;font-size: 14px;text-indent: 20%;cursor: default;'>public</i></b></div><br><div class='main-commnts' style='border: none !important;'>" + emojis + "</div></div>");

    });

});


function UpostImg(ucimg) {
    "use strict";
    let uint = document.getElementById("Uint");
    let urlString = 'url(' + ucimg.src + ')';
    uint.style.backgroundImage = urlString;
    uint.style.minHeight = "250px";
    uint.classList.add("empty");
    uint.style.color = "#fff";
    uint.style.borderRadius = "15px";
};



$(document).ready(function() {
    if (window.File && window.FileList && window.FileReader) {
        $("#files").on("change", function(e) {
            let files = e.target.files,
                filesLength = files.length;
            for (let i = 0; i < filesLength; i++) {
                let f = files[i]
                let fileReader = new FileReader();
                fileReader.onload = (function(e) {
                    let file = e.target;
                    $(".UPimg").css("opacity", "1");
                    $(".UPimg").append("<div class=\'img-hold\'><div class=\'top-left\'><button class=\'Uedit\'><i class=\'material-icons\'>edit</i><span>Edit</span></button></div><div class='top-right'><span class=\"material-icons remove\">close</span></div><img class=\"imageThumb\" src=\"" + e.target.result + "\"/></div>"

                    );
                    $(".top-right").click(function() {
                        $(this).parent(".img-hold").remove();
                    });


                });
                fileReader.readAsDataURL(f);
            }
            console.log(files);
        });
    } else {
        alert("Your browser doesn't support to File API")
    }
});




const colors = document.querySelectorAll('.color');
colors.forEach(color => {
    color.addEventListener('click', e => {
        colors.forEach(c => c.classList.remove('selected'));
        const theme = color.getAttribute('data-color');
        document.button.setAttribute('data-theme', theme);
        color.classList.add('selected');
    });
});




function password(length, special) {
    let iteration = 0;
    let password = "";
    let randomNumber;
    if (special == undefined) {
        let special = false;
    }
    while (iteration < length) {
        randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
        if (!special) {
            if ((randomNumber >= 33) && (randomNumber <= 47)) { continue; }
            if ((randomNumber >= 58) && (randomNumber <= 64)) { continue; }
            if ((randomNumber >= 91) && (randomNumber <= 96)) { continue; }
            if ((randomNumber >= 123) && (randomNumber <= 126)) { continue; }
        }
        iteration++;
        password += String.fromCharCode(randomNumber);
    }
    document.getElementById('IDs').innerHTML = password;
}



function myPopup() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("more-show");
}



$('.one-profile .img').each(function(idx, item) {
    let winnerId = "winner-" + idx;
    this.id = winnerId;
    $(this).click(function() {
        let btn = $("#winner-" + idx);
        let span = $(".closed");
        let popId = $('#win-' + idx);
        btn.click(function() {
            $(popId).addClass('on');
            $('body').addClass('lorem');
        });
        span.click(function() {
            $(popId).removeClass('on');
            $('body').removeClass('lorem');
        });

    });
});




let ghostEditor = {
    bindEvents: function() {
        this.bindDesignModeToggle();
        this.bindToolbarButtons();
    },

    bindDesignModeToggle: function() {
        $('#page-content').on('click', function(e) {
            document.designMode = 'on';
        });

        $('#page-content').on('click', function(e) {
            let $target = $(e.target);

            if ($target.is('#page-content')) {
                document.designMode = 'off';
            }
        });
    },

    bindToolbarButtons: function() {
        $('.top-edit').on('mousedown', '.exe-elem', function(e) {
            e.preventDefault();
            let btnId = $(e.target).attr('id');
            this.editStyle(btnId);
        }.bind(this));
    },

    editStyle: function(btnId) {
        let value = null;

        if (btnId === 'createLink') {
            if (this.isSelection()) value = prompt('Enter a link:');
        }

        document.execCommand(btnId, true, value);
    },

    isSelection: function() {
        let selection = window.getSelection();
        return selection.anchorOffset !== selection.focusOffset
    },

    init: function() {
        this.bindEvents();
    },
}

ghostEditor.init();

if (localStorage.getItem('text_in_editor') !== null) {
    document.getElementById('page-content').innerHTML = localStorage.getItem('text_in_editor');
}
document.addEventListener('keydown', function(e) {
    localStorage.setItem('text_in_editor', document.getElementById('page-content').innerHTML);
});

$(".exe-elem").click(function() {
    $(this).toggleClass('exe-active');
});




document.querySelectorAll('#heart').forEach(
    button => button.addEventListener('click', e => button.classList.toggle('liked'))
);



$('.user-name, .user-follow').on('click', function() {
    if ($(this).find('i').text() == 'add') {
        $(this).find('span').css("background-color", "rgb(102, 179, 255, 0.07)");
        $(this).find('i').text('done');
        $(this).find('.add-user').addClass("followed");
        $(this).find('span').css("border", "2px solid #66b3ff");

    } else {
        $(this).find('i').text('add');
        $(this).find('span').css("background-color", "rgb(63, 133, 244, 0.07)");
        $(this).find('.add-user').removeClass("followed");
        $(this).find('span').css("border", "2px solid #1a8cff");
        $(this).find('span').css("background-color", "rgb(63, 133, 244, 0.07)");

    }
});