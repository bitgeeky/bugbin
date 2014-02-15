var l;
function handleResponse(response)
{
  var output = "";
  var json = JSON.parse(response);
  var bugs = json.bugs;
  l = bugs.length;
  for (var i = 0; i < bugs.length; i++) {
    output += bugs[i].id + ": " + bugs[i].summary + "\n";
    var row = document.createElement('tr');

        var bugId = document.createElement('td');
        bugId.innerHTML = '<a href=\'https://bugzilla.mozilla.org/show_bug.cgi?id=' + bugs[i].id + '\'>'+ bugs[i].id + '</a>';
        var bugCreator = document.createElement('td');
        bugCreator.innerHTML = bugs[i].creator_detail.real_name;
        var bugShortDesc = document.createElement('td');
        bugShortDesc.innerHTML = bugs[i].summary;
        var bugComponent = document.createElement('td');
        bugComponent.innerHTML = bugs[i].component;
        var bugAssignee = document.createElement('td');
        bugAssignee.innerHTML = bugs[i].assigned_to_detail.real_name;
        var bugWhiteBoard = document.createElement('td');
        bugWhiteBoard.innerHTML = bugs[i].whiteboard;
        var bugStatus = document.createElement('td');
        bugStatus.innerHTML = bugs[i].status;
        var bugResolution = document.createElement('td');
        bugResolution.innerHTML = bugs[i].resolution;
        var bugLastChange = document.createElement('td');
        bugLastChange.innerHTML = bugs[i].last_change_time;

        row.appendChild(bugId);
        row.appendChild(bugAssignee);
        row.appendChild(bugCreator);
        row.appendChild(bugStatus);
        row.appendChild(bugShortDesc);
        row.appendChild(bugLastChange);
        document.getElementById('bugs-table-body').appendChild(row);
  }
}

function progressListener() {
  if (this.readyState == 4 && this.status == 200) {
    handleResponse(this.responseText);
    var mssg = document.getElementById('show_MSG');
    if(l>0){
        mssg.id = 'hide_MSG';
    }
    else{
        mssg.innerHTML = 'No Bugs Found !';  
    }
  }
}
function showBugs(mailid, bstatus){
	var wmssg = document.createElement('h1');
        wmssg.innerHTML = "Fetching Bugs ...";
        wmssg.id = 'show_MSG';
        document.getElementsByTagName('body')[0].appendChild(wmssg);   
        
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
