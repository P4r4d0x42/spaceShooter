#pragma strict
//Laser clean up code.
function Start () 
{
	run();
}

function Update () 
{

}

function run()
{
	yield WaitForSeconds(4);
	Destroy(this.gameObject);

}
function OnTriggerEnter(col : Collider)
{
	if (col.tag == "enemy"){Destroy(this.gameObject);}
}