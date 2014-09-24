#pragma strict
 
var speed = 1.0;
 
function Update() {
    guiText.material.color.a = Mathf.PingPong(Time.time * speed, 1.0);
}