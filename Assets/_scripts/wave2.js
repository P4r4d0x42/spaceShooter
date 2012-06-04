#pragma strict
var rotationDirection = Vector3(0,0,1);
var rotationSpeed = 50.0;
private var parentTransform : Transform;


function Start () 
{
}

function Update () 
{
	parentTransform = this.transform.parent;
}
	
function FixedUpdate()
{
	if (parentTransform != null)
	{
		transform.RotateAround(parentTransform.position, rotationDirection, rotationSpeed * Time.deltaTime);
		this.transform.rotation.z = 0;
	}
	
}
