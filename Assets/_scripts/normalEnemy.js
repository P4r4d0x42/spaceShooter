#pragma strict

private var startTime : float;
private var shootTimeLeft : float;
private var shootTimeSeconds = 1;
var enemyLaser : GameObject;
private var laserSpeed = 0.8;
private var shootSpwnT : Transform;




function Start () {
	
	//It also ensures that the script finds each enemy's unique shootSpwn object, rather than just finding one.
	// using transform.find instead of gameObject.Find so find all child objects of that game object.
	shootSpwnT = this.transform.Find("shootSpwn"); 
	
	}
	
function Update () {
 	
 	shootTimeLeft = Time.time - startTime;
 	if(shootTimeLeft >= shootTimeSeconds){
 		Fire();
 		startTime = Time.time;
 		shootTimeLeft = 0.0;
 	}


}

function Fire(){
    
    var instLaser : GameObject = Instantiate (enemyLaser, shootSpwnT.transform.position, shootSpwnT.transform.rotation); // Instantiates the laser at the location of the emptygame object
	instLaser.rigidbody.velocity = transform.TransformDirection(Vector3.up * -laserSpeed); // Sets projectile in motion and sets speed.
	
}