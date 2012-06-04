#pragma strict
/// The idea of this script is to do the following:
// Creation of enemy waves
// Score
// GUI
// Player re-spawning

var enemySpwn1  : Transform;
var enemyTarg1  : Transform;
var enemySpwn2  : Transform;
var enemyTarg2  : Transform;
var enemyPrefab1 : GameObject;
var enemyPrefab2 : GameObject;
var enemyPrefab3 : GameObject;
var enemySpeed = 0.1;
var enemySpeed2 = 0.2;

private var targetSpwnDir1   : Vector3;
private var targetSpwnDir2   : Vector3;

// Player life and death control
var playerObj  : GameObject;
var playerSpwn : GameObject;
var respawn = false;
var playerLives = 4;
var script1 : Component;
var player1 : GameObject;
var shield  : GameObject;
var playerDeathObj : GameObject;


// Score and GUI
var playerLivesTxt : Texture2D;
var playerScore = 0;
var style : GUIStyle;


function Start () 
{
	targetSpwnDir1 = enemyTarg1.position - enemySpwn1.transform.position;
	targetSpwnDir2 = enemyTarg2.position - enemySpwn2.transform.position;
	
	SendWave1();
	yield WaitForSeconds(5);
	SendWave2();
	yield WaitForSeconds(5);
	SendWave3();
	yield WaitForSeconds(5);
	SendWave4();
	SendWave5();

}

function Update () 
{
	if (respawn == true && playerLives !=0){respawnPlayer();}
}

function OnGUI()
{
	GUI.Label(Rect (20, 660, 74, 85),playerLivesTxt, style);
	GUI.Label(Rect (300, 660, 50, 50),playerLives.ToString(),style);
	GUI.Label(Rect (300, 700, 200, 50),playerScore.ToString(),style);
	print("OnGUI");

}

function SendWave1()
{
	for (var i = 0; i <= 3; i++)
	{
		var instantiatedProjectitle : GameObject = Instantiate (enemyPrefab1,enemySpwn1.transform.position, this.transform.rotation);
		instantiatedProjectitle.rigidbody.velocity = transform.TransformDirection(targetSpwnDir1*enemySpeed2);
		yield WaitForSeconds(1.0);
	}
}

function SendWave2()
{
	for (var i = 0; i <= 5; i++)
	{
		var instantiatedProjectitle : GameObject = Instantiate (enemyPrefab2,enemySpwn2.transform.position, this.transform.rotation);
		instantiatedProjectitle.rigidbody.velocity = transform.TransformDirection(targetSpwnDir2*enemySpeed);
		yield WaitForSeconds(1.0);
	}
}

function SendWave3()
{
		var instantiatedProjectitle : GameObject = Instantiate (enemyPrefab3,enemySpwn1.transform.position, this.transform.rotation);
		instantiatedProjectitle.rigidbody.velocity = transform.TransformDirection(targetSpwnDir1*enemySpeed2);
		yield WaitForSeconds(1.0);
}

function SendWave4()
{
	for (var i = 0; i <= 7; i++)
	{
		var instantiatedProjectitle : GameObject = Instantiate (enemyPrefab2,enemySpwn2.transform.position, this.transform.rotation);
		instantiatedProjectitle.rigidbody.velocity = transform.TransformDirection(targetSpwnDir2*enemySpeed);
		yield WaitForSeconds(1.0);
	}
}

function SendWave5()
{
		var instantiatedProjectitle : GameObject = Instantiate (enemyPrefab3,enemySpwn1.transform.position, this.transform.rotation);
		instantiatedProjectitle.rigidbody.velocity = transform.TransformDirection(targetSpwnDir1*enemySpeed2);
		yield WaitForSeconds(1.0);
}

function destroyPlayer(dpos : Vector3)
{
	var player1 : GameObject = Instantiate(playerDeathObj, dpos, playerDeathObj.transform.rotation) as GameObject;
	player1.animation["death"].speed = 3.5;
	yield WaitForSeconds(0.5);
	Destroy(player1);
}

function respawnPlayer()
{
	player1 = Instantiate(playerObj, playerSpwn.transform.position, playerObj.transform.rotation) as GameObject;
	var script1 = player1.transform.gameObject.GetComponent(shipController); // Have to leave the "" out to make this work
	script1.startTime = Time.time;
	script1.shieldOn=true;
	script1.playerInvincible = true;
	respawn = false;
}





/** Not needed anymore
function SendEnemy()
{
	var instantiatedProjectile : GameObject = Instantiate(enemyPrefab, enemySpwn1.transform.position, this.transform.rotation);
	
	instantiatedProjectile.rigidbody.velocity = transform.TransformDirection(targetDir*enemySpeed);
	
}
**/