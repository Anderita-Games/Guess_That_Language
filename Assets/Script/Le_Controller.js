/*  -----------------------
	Made by Andrew Friedman
	4/7/17 4:14 PM
	Sh!t is fye
	-----------------------  */
	
#pragma strict
import System.IO; //For Reading TXT
import System.Collections.Generic; //For using LIST

var HighScore : UnityEngine.UI.Text;
var Current : UnityEngine.UI.Text;
var Previous : UnityEngine.UI.Text;
var Remaining : UnityEngine.UI.Text;

var Option1 : UnityEngine.UI.Text;
var Option2 : UnityEngine.UI.Text;
var Option3 : UnityEngine.UI.Text;
var Option4 : UnityEngine.UI.Text;

var Export : UnityEngine.UI.Text;
var reason : UnityEngine.UI.Text;

var Fail : GameObject;

var Language : String;
var time : int;
var Picker : int; //Always one extra ;)
var Picker2 : int;

var imports = new List.<int>();

var sr : StreamReader;
var level : TextAsset;
var level2 : TextAsset;
var line;

function Start () {
	level = Resources.Load("Languages/" + PlayerPrefs.GetString("CurrentLanguage"), typeof(TextAsset));
	level2 = Resources.Load("Languages/Languages", typeof(TextAsset));
	Picker = Random.Range(1,8);
	time = 60;
	PlayerPrefs.SetString("Previous", "N/A");
	PlayerPrefs.SetInt("CurrentScore", 0);
	CHOOSER();
	while (time != 0 && Fail.active != true) {
		Remaining.text = "Time Left: " + time;
		yield WaitForSeconds (1);
		time--;
	}
}

function Update () {
	HighScore.text = "HighScore: " + PlayerPrefs.GetInt("HighScore");
	Current.text = "Current Score: " + PlayerPrefs.GetInt("CurrentScore");
	Previous.text = "Last Language: " + PlayerPrefs.GetString("Previous");
	
	if (PlayerPrefs.GetInt("CurrentScore") > PlayerPrefs.GetInt("HighScore")) {
		PlayerPrefs.SetInt("HighScore", PlayerPrefs.GetInt("CurrentScore"));
	}
		
	if (time == 0) {
		Debug.Log("Time is Over");
		reason.text = "YOU RAN OUT OF TIME";
		Fail.SetActive (true);
		//Application.LoadLevel ("MainMenu");
	}
}

function CHOOSER () {
	Picker = Random.Range(1,8);
	if (Picker == 1) {
		PlayerPrefs.SetString("CurrentLanguage", "Danish");
		PlayerPrefs.SetInt("LastLine", 23516);
	}else if (Picker == 2) {
		PlayerPrefs.SetString("CurrentLanguage", "Dutch");
		PlayerPrefs.SetInt("LastLine", 52613);
	}else if (Picker == 3) {
		PlayerPrefs.SetString("CurrentLanguage", "English"); //The best One
		PlayerPrefs.SetInt("LastLine", 84100);
	}else if (Picker == 4) {
		PlayerPrefs.SetString("CurrentLanguage", "French");
		PlayerPrefs.SetInt("LastLine", 208914);
	}else if (Picker == 5) {
		PlayerPrefs.SetString("CurrentLanguage", "Italian");
		PlayerPrefs.SetInt("LastLine", 82928);
	}else if (Picker == 6) {
		PlayerPrefs.SetString("CurrentLanguage", "Norwegian");
		PlayerPrefs.SetInt("LastLine", 61413);
	}else if (Picker == 7) {
		PlayerPrefs.SetString("CurrentLanguage", "Spanish");
		PlayerPrefs.SetInt("LastLine", 174846);
	}
	LABELER(); //Changing the buttons!
	Creation(); //Changing the output text!
}

function LABELER () {
	Picker2 = Random.Range(1,5);
	level = Resources.Load("Languages/" + PlayerPrefs.GetString("CurrentLanguage"), typeof(TextAsset));
	level2 = Resources.Load("Languages/Languages", typeof(TextAsset));
	PlayerPrefs.SetInt("Option", Picker2);
	imports.Add (Picker);
	NAMES();
	Option1.text = Language;
	NAMES();
	Option2.text = Language;
	NAMES();
	Option3.text = Language;
	NAMES();
	Option4.text = Language;
	imports.Clear();
	//Corrector
	if (Picker2 == 1) {
		Option1.text = PlayerPrefs.GetString("CurrentLanguage");
	}else if (Picker2 == 2) {
		Option2.text = PlayerPrefs.GetString("CurrentLanguage");
	}else if (Picker2 == 3) {
		Option3.text = PlayerPrefs.GetString("CurrentLanguage");
	}else if (Picker2 == 4) {
		Option4.text = PlayerPrefs.GetString("CurrentLanguage");
	}
}

function NAMES () {
	var Rando = Random.Range(1,8);
	while(imports.Contains(Rando)) {
		Rando = Random.Range(1,8);
	}
	imports.Add (Rando);
	sr = new StreamReader(new MemoryStream(level2.bytes));
	var number = Random.Range(1,8);
	while (Rando > 0) {
		line = sr.ReadLine();
		Rando--;
	}
	Language = line;
	sr.Close();
}

function Optioner1 () {
	if (PlayerPrefs.GetInt("Option") == 1) {
		PlayerPrefs.SetString("Previous", PlayerPrefs.GetString("CurrentLanguage"));
		PlayerPrefs.SetInt("CurrentScore", PlayerPrefs.GetInt("CurrentScore") + 1);
		CHOOSER();
	}else {
		reason.text = "YOU CHOSE WRONG. IT WAS " + PlayerPrefs.GetString("CurrentLanguage");
		Fail.SetActive (true);
	}
}

function Optioner2 () {
	if (PlayerPrefs.GetInt("Option") == 2) {
		PlayerPrefs.SetString("Previous", PlayerPrefs.GetString("CurrentLanguage"));
		PlayerPrefs.SetInt("CurrentScore", PlayerPrefs.GetInt("CurrentScore") + 1);
		CHOOSER();
	}else {
		reason.text = "YOU CHOSE WRONG. IT WAS " + PlayerPrefs.GetString("CurrentLanguage");
		Fail.SetActive (true);
	}
}

function Optioner3 () {
	if (PlayerPrefs.GetInt("Option") == 3) {
		PlayerPrefs.SetString("Previous", PlayerPrefs.GetString("CurrentLanguage"));
		PlayerPrefs.SetInt("CurrentScore", PlayerPrefs.GetInt("CurrentScore") + 1);
		CHOOSER();
	}else {
		reason.text = "YOU CHOSE WRONG. IT WAS " + PlayerPrefs.GetString("CurrentLanguage");
		Fail.SetActive (true);
	}
}

function Optioner4 () {
	if (PlayerPrefs.GetInt("Option") == 4) {
		PlayerPrefs.SetString("Previous", PlayerPrefs.GetString("CurrentLanguage"));
		PlayerPrefs.SetInt("CurrentScore", PlayerPrefs.GetInt("CurrentScore") + 1);
		CHOOSER();
	}else {
		reason.text = "YOU CHOSE WRONG. IT WAS " + PlayerPrefs.GetString("CurrentLanguage");
		Fail.SetActive (true);
	}
}

function Creation () {
	var Counter = 3; //Choosing the language
	while (Counter > 0) {
		sr = new StreamReader(new MemoryStream(level.bytes));
		//sr = new StreamReader(PlayerPrefs.GetString("CurrentLanguage") + ".txt");
		var number = Random.Range(1,PlayerPrefs.GetInt("LastLine"));
		while (number > 0) {
			line = sr.ReadLine();
			number--;
		}
		PlayerPrefs.SetString("Word#" + Counter, line + " ");
		sr.Close();
		Counter--;
	}
	Export.text = PlayerPrefs.GetString("Word#3") + PlayerPrefs.GetString("Word#2") + PlayerPrefs.GetString("Word#1");
} 

function Restart () {
	Application.LoadLevel ("Game");
}

function Escape () {
	Application.LoadLevel ("MainMenu");
}