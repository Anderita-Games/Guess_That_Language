/*  -----------------------
	Made by Andrew Friedman
	4/7/17 4:14 PM
	Sh!t is fye
	-----------------------  */
	
#pragma strict

var Teacher : GameObject;
var HighScores : UnityEngine.UI.Text;

function Start () {
	HighScores.text = "Your HighScore: " + PlayerPrefs.GetInt("HighScore");
}

function HowToPlay () {
	if (Teacher.active == false) {
		Teacher.SetActive(true);
	}else if (Teacher.active == true) {
		Teacher.SetActive(false);
	}else {
		Debug.Log("ERROR ERROR DUMBASS");
	}
}

function Starter () {
	Application.LoadLevel ("Game");
} 
