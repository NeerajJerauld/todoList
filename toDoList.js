// const demo = document.getElementById("demo")
const tableBodyEle = document.getElementById("tableBody");

function loadDoc() {
  console.log("Inside loadDoc");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(this.responseText);
      tableBodyEle.innerHTML = "";
      // mytitle.innerHTML = "Whats up"
      resp.forEach(addingRows);
      function addingRows(item, index) {
        var trNode = document.createElement("TR");
        var tdNode1 = document.createElement("TD");
        var tdNode2 = document.createElement("TD");
        var tdNode3 = document.createElement("TD");
        var tdNode4 = document.createElement("TD");
        var text1 = document.createTextNode(resp[index].userId);
        var text2 = document.createTextNode(resp[index].id);
        var text3 = document.createTextNode(resp[index].title);
        var text4 = document.createTextNode(resp[index].completed);
        if (resp[index].completed === true) {
          var cbNode = document.createElement("INPUT");
          cbNode.setAttribute("type", "checkbox");
          cbNode.setAttribute("checked", true);
          cbNode.setAttribute("disabled", true);
          cbNode.setAttribute("id", "cb");
          tdNode4.appendChild(cbNode);
        } else {
          var cbNode = document.createElement("INPUT");
          cbNode.setAttribute("type", "checkbox");
          cbNode.setAttribute("id", "cb");
          tdNode4.appendChild(cbNode);
        }
        tdNode1.appendChild(text1);
        tdNode2.appendChild(text2);
        tdNode3.appendChild(text3);

        trNode.appendChild(tdNode1);
        trNode.appendChild(tdNode2);
        trNode.appendChild(tdNode3);
        trNode.appendChild(tdNode4);
        tableBodyEle.appendChild(trNode);
      }
      
      setTimeout(timeoutHandler, 100);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function timeoutHandler() {
    let count = 0;
  $(document).on("change", "input[type=checkbox]", function (event) {
    var elem = event.target;
    if (elem.checked) {
      disableCheckPromise(elem).then();
      count++;
      alertCompletionPromise(count).then();
    }
  });
}
function disableCheckPromise(e) {
  return new Promise(function (resolve, reject) {
    e.disabled = true;
    resolve();
  });
}
function alertCompletionPromise(counter) {
    // console.log(counter)
    
  return new Promise(function (resolve, reject) {
    if (counter === 5) {
      alert("Congrats you have finished 5 tasks...");
    }
    resolve();
  });
}


