//grid created on load
function loading () {    
    var bigBox = document.getElementById("puzzlearea");
    bigBox.style.marginTop = "-50px";
    document.getElementById("controls").style.marginTop = "75px";

    function nameBox () {
        var divs = bigBox.getElementsByTagName("div");

        for (var i = 0; i < divs.length; i++) {
            divs[i].className = "puzzlepiece";
            divs[i].style.backgroundImage = "url(\"images/background_" + (i + 1) + ".jpg\")";
        }

        return divs;
    }
var emptyDiv;
    function tableCreate () {
        var body = document.getElementById('puzzlearea'),
            tbl  = document.createElement('table'),
            boxes = nameBox();
        tbl.style.width = '400px';
        tbl.style.height = '400px';
        tbl.cellPadding = '0';
        tbl.cellSpacing = '0';
        tbl.setAttribute('border', '0');

        var tbdy = document.createElement('tbody');
        for (var i = 0; i < 4; i++) {
            var tr = document.createElement('tr');

            for (var j = 0; j < 4; j++) {
                var td = document.createElement('td');

                if(j <= boxes.length + 1){
                    td.appendChild([].shift.call(boxes));
                    td.onclick = whenClickedFilled;
                    tr.appendChild(td);
                } else {
                    emptyDiv = document.createElement('div');
                    empty_td = document.createElement('td');
                    empty_td.appendChild(emptyDiv);
                    tr.appendChild(empty_td);
                    emptyDiv.className = "puzzlepiece emptyDivClass";
                    emptyDiv.id = "empty";
                    emptyDiv.style.backgroundColor = "#c0c0c0";
                    emptyDiv.style.backgroundImage = "none";
                    emptyDiv.style.border = "none";
                    emptyDiv.style.width = "100px";
                    emptyDiv.style.height = "100px";
                    empty_td.onclick = whenClickedEmpty;
                }                
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        body.appendChild(tbl);

        var tds = bigBox.getElementsByTagName("td");
        for (var i = 0; i < 16 ; i++) {
            tds[i].id = "box"+(i+1);
            tds[i].firstElementChild.id = "filled";
        }
    }
    tableCreate();

    //differentiate between empty square and boxes

        
    function whenClickedFilled(){
        console.log("filled");
        //Get the div element and parent
        //Then determine the parent of the empty div
        //Perform an element swap
        var clickedDiv = this.firstChild;
        var clickedDivParent = this;
        var emptyDivParent = emptyDiv.parentElement;
        
        emptyDivParent.removeChild(emptyDiv); 
        clickedDivParent.removeChild(clickedDiv);
        
        clickedDivParent.appendChild(emptyDiv);
        emptyDivParent.appendChild(clickedDiv);
    }

    function whenClickedEmpty(){
        console.log("empty");
    }
    

}

window.onload = function () {
    loading();
};






