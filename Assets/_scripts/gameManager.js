#pragma strict
/// The idea of this script is to do the following:
// Creation of enemy waves
// Score
// GUI
// Player re-spawning

var enemySpwn1  : Transform;
var enemyTarg1  : Transform;
var enemyPrefab : GameObject;
var targetDir   : Vector3;
private var enemySpeed = 0.1;


function Start () 
{
	targetDir = enemyTarg1.position - enemySpwn1.transform.position;
	SendEnemy();
	
}

function Update () 
{

}



function SendEnemy()
{
	var instantiatedProjectile : GameObject = Instantiate(enemyPrefab, enemySpwn1.transform.position, this.transform.rotation);
	
	instantiatedProjectile.rigidbody.velocity = transform.TransformDirection(targetDir*enemySpeed);
	
}