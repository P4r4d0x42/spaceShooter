#pragma strict
 
static var scrollSpeed : float = 0.3;



function Start () {

}

function Update () {
	var offset : float = Time.time * -scrollSpeed;
	
	renderer.material.mainTextureOffset = Vector2(0, offset);
	
}