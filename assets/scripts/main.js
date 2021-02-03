// main.js

// TODO
document.getElementById("volume-slider").setAttribute("onchange", "update_slider_display(this.value);");
document.getElementById("volume-number").setAttribute("onchange", "update_slider(this.value);");
document.getElementById("honk-btn").setAttribute("type", "button");
document.getElementById("honk-btn").setAttribute("onclick", "play_honk();");
document.getElementById("audio-selection").setAttribute("onchange", "set_horn(this);");

function set_horn(snd){
    var divs = snd.querySelectorAll("input:checked"), i;

    for (i = 0; i < divs.length; ++i) {
        if(divs[i].id == "radio-air-horn"){
            document.getElementById('horn-sound').setAttribute("src","./assets/media/audio/air-horn.mp3")
            document.getElementById('sound-image').setAttribute("src","./assets/media/images/air-horn.svg")
        }
        if(divs[i].id == "radio-car-horn"){
            document.getElementById('horn-sound').setAttribute("src","./assets/media/audio/car-horn.mp3")
            document.getElementById('sound-image').setAttribute("src","./assets/media/images/car.svg")
        }
        if(divs[i].id == "radio-party-horn"){
            document.getElementById('horn-sound').setAttribute("src","./assets/media/audio/party-horn.mp3")
            document.getElementById('sound-image').setAttribute("src","./assets/media/images/party-horn.svg")
        }
    }
}

function play_honk(){
    var audio = document.getElementById('horn-sound');
    audio.volume = document.getElementById("volume-number").value/100;
    audio.pause();
    audio.currentTime = 0
    audio.play();
}

function update_slider_display(val) {
    document.getElementById("volume-number").setAttribute("value", val);
    update_volume_image(val);
}
function update_slider(val) {
    document.getElementById("volume-slider").setAttribute("value", val);
    update_volume_image(val);
}

function update_volume_image(val) {
    sourcepth = "";
    document.getElementById("honk-btn").disabled = false;
    if(val < 1){
        sourcepth = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }else if(val < 34){
        sourcepth = "./assets/media/icons/volume-level-1.svg";
    }else if(val < 67){
        sourcepth = "./assets/media/icons/volume-level-2.svg";
    }else{
        sourcepth = "./assets/media/icons/volume-level-3.svg";
    }
    document.getElementById("volume-image").setAttribute("src", sourcepth);
}