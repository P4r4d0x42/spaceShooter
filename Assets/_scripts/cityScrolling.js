#pragma strict


static var speed : float = 2;



function Start () {
	
}

function Update () 
	{
		// Sets up smooth movement based on speed
		var move : float = speed * Time.deltaTime;
		// Moves whatever this script is attached to down in the world(local space?)
		transform.Translate(Vector3.down * move, Space.World);
		
		if (transform.position.y < -17.1)
		{
			transform.position = Vector3(transform.position.x, 19.154, transform.position.z);

		}
	}