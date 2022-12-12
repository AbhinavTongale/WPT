function addNewMessage() {
    let divRef = document.querySelector("#container");
  
    let newElement = `<h1>Hello Abhi</h1>`;
  
    // GET THE INNERHTML
    let currentInnerHtml = divRef.innerHTML;
  
    let newInnerHtml = currentInnerHtml + newElement;
  
    // SET THE INNERHTML
    divRef.innerHTML = newInnerHtml;
  }