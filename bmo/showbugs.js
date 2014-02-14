function handleResponse(response)
{
  var output = "";
  var json = JSON.parse(response);
  var bugs = json.bugs;

  for (var i = 0; i < bugs.length; i++) {
    output += bugs[i].id + ": " + bugs[i].summary + "\n";
  }

  alert(output);
}

function progressListener() {
  if (this.readyState == 4 && this.status == 200) {
    handleResponse(this.responseText);
  }
}
function showBugs(mailid, bstatus){
	console.log("enter");
	console.log(mailid);
	console.log(bstatus);
	var res = mailid.split("@");
	var name = res[0];		
	var host = res[1];
	var resolution;
	
	if(bstatus === "RESOLVED" ){		
		resolution = "FIXED";
	}
	else if(bstatus === "NEW"){
		resolution = "---";
	}

	var apiURL = "https://bugzilla.mozilla.org/rest/bug?resolution="+ resolution +"&emailtype1=exact&query_format=advanced&emailassigned_to1=1&bug_status="+ bstatus +"&email1="+ name +"%40"+ host;
  	
	var client = new XMLHttpRequest();
  	client.onreadystatechange = progressListener;
  	client.open("GET", apiURL);
  	client.setRequestHeader('Accept',       'application/json');
  	client.setRequestHeader('Content-Type', 'application/json');
  	client.send();	
	
}
