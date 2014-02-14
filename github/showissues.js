function handleResponse(response)
{
  var output = "";
  var json = JSON.parse(response);
  var items = json.items;

  for (var i = 0; i < items.length; i++) {

      var row = document.createElement('tr');
      var issueId = document.createElement('td');
      issueId.innerHTML = '<a href='+ items[i].html_url + '\'>'+ items[i].id + '</a>';
      var issueTitle = document.createElement('td');
      issueTitle.innerHTML = items[i].title;
      row.appendChild(issueId);
      row.appendChild(issueTitle);
      document.getElementById('issue-table-body').appendChild(row);
  }
}

function progressListener() {
  if (this.readyState == 4 && this.status == 200) {
    handleResponse(this.responseText);
  }
}
function showIssues(){

        var apiURL = "https://api.github.com/search/issues?q=repo:mozilla/sumo-tests+label:Community+state:open&sort=created&order=asc";
	var client = new XMLHttpRequest();
  	client.onreadystatechange = progressListener;
  	client.open("GET", apiURL);
  	client.setRequestHeader('Accept',       'application/json');
  	client.setRequestHeader('Content-Type', 'application/json');
  	client.send();	
	
}
