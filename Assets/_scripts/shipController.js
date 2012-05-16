#pragma strict

enum shipState{MOVINGUP,MOVINGDOWN,MOVINGLEFT,MOVINGRIGHT,SHOOT,IDLE};

var currentState : shipState;
var speed : float;
var laser : GameObject;
var shootSpwnPos1 : GameObject;
var shootSpwnPos2 : GameObject;

private var initialLaserSpeed = 10;
private var fireRate : float = 0.2;
private var nextFire = 0.0;





function Start () {

}

function Update () 
	{
		// Up
		if (Input.GetKey(KeyCode.UpArrow))
		{
			if(transform.position.y < 3.75)
			{currentState = shipState.MOVINGUP;ActionShip(currentState);}
		}
		
		// Down
		if (Input.GetKey(KeyCode.DownArrow))
		{
			if(transform.position.y > -3)
			{currentState = shipState.MOVINGDOWN;ActionShip(currentState);}
		}
		
		// Left
		if (Input.GetKey(KeyCode.LeftArrow))
		{
			if(transform.position.x > -2)
			{currentState = shipState.MOVINGLEFT;ActionShip(currentState);}
		}
		
		// Right
		if (Input.GetKey(KeyCode.RightArrow))
		{
			if(transform.position.x < 2)
			{currentState = shipState.MOVINGRIGHT;ActionShip(currentState);}
		}
		
		// Right
		if (Input.GetKey(KeyCode.Space) && Time.time > nextFire)
			{
			nextFire = Time.time + fireRate;
			currentState = shipState.SHOOT;
			ActionShip(currentState);
			}
		

	}

		function ActionShip (state : shipState){
			switch (state) {
				case shipState.SHOOT:
					var cloneLaser1 : GameObject = Instantiate(laser,shootSpwnPos1.transform.position,shootSpwnPos1.transform.rotation) as GameObject;
					cloneLaser1.rigidbody.velocity = transform.TransformDirection(Vector3.up * initialLaserSpeed);
					
					var cloneLaser2 : GameObject = Instantiate(laser,shootSpwnPos2.transform.position,shootSpwnPos2.transform.rotation) as GameObject;
					cloneLaser2.rigidbody.velocity = transform.TransformDirection(Vector3.up * initialLaserSpeed);
					break;
				case shipState.MOVINGUP:
					transform.Translate(0,speed * Time.deltaTime,0,Space.World);
					break;
				case shipState.MOVINGDOWN:
					transform.Translate(0,speed * -Time.deltaTime,0,Space.World);
					break; 
				case shipState.MOVINGLEFT:
					transform.Translate(speed * -Time.deltaTime,0,0,Space.World);
					break;
				case shipState.MOVINGRIGHT:
					transform.Translate(speed * Time.deltaTime,0,0,Space.World);
					break;  
			}
			
		
		
		
	}