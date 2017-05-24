// update l.date with the value of date.

    d1 = document.getElementById("d1"); // first date input
    d2 = document.getElementById("d2"); // l.date input
    function updateD2(){
        d2.value = d1.value;    // change value of d2 to d1
    }
    d2.value = d1.value;        // initialize of d2 with that of d1


//////////////////////////////////////////////////////////////////////////
// search for mill.
    var gl = 5;

    s_in = document.getElementById("myInput");  // input of search
        
    // Get the modal
    var modal = document.getElementById('myModal');     // search window

    function popSearch(x) {              // when value of q changes.

        if (x==0)
        {
             q = document.getElementById("mill");        // input of mill
             gl=0;
        }

        if (x==1)
        {
             q = document.getElementById("buyer");        // input of buyer
             gl=1;
        }

        if (x==2)
        {
             q = document.getElementById("transport");        // input of transport
             gl=2;
        }                


        modal.style.display = "block";      // make search window appear
        s_in.value = q.value;               // set the value of s_in as q.value

    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

function millFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");

    if (gl==0)
        {
            li = ul.getElementsByClassName('mill');
        }
    if (gl==1)
        {
            li = ul.getElementsByClassName('buyer');
        }
    if (gl==2)
        {
            li = ul.getElementsByClassName('trans');
        }                


    

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// check whether enter is pressed or not.
function CheckEnter(event){

    var x = event.which || event.keyCode;   // grab the key code
    if (x==13) // enter is pressed
    {
       

    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    ul = document.getElementById("myUL");

    if (gl==0)
        {
            m = document.getElementById('mill');
            li = ul.getElementsByClassName('mill');
            for (var i = 0; i < li.length; i++) {
            if (li[i].style.display === "")     // get the first result displayed
            {
                result  = li[i];
                m.value = (result.innerHTML.toString().split("span>")[1].split("</")[0]); 
                // extract code from the result
                modal.style.display = "none";   // hide the search interface
                break;  // stop the loop
            }
        }
        }
    if (gl==1)
        {
            m = document.getElementById('buyer');
            li = ul.getElementsByClassName('buyer');
            for (var i = 0; i < li.length; i++) {
            if (li[i].style.display === "")     // get the first result displayed
            {
                result  = li[i];
                m.value = (result.innerHTML.toString().split("span>")[1].split("</")[0]); 
                // extract code from the result
                modal.style.display = "none";   // hide the search interface
                break;  // stop the loop
            }
        }
        }
    if (gl==2)
        {
            m = document.getElementById('trans');
            li = ul.getElementsByClassName('trans');
            for (var i = 0; i < li.length; i++) {
            if (li[i].style.display === "")     // get the first result displayed
            {
                result  = li[i];
                m.value = (result.innerHTML.toString().split(">")[1].split("</")[0]); 
                // extract code from the result
                modal.style.display = "none";   // hide the search interface
                break;  // stop the loop
            }
        }
        }   
    }

}


    function calcTot() {    // multiplies quantity and price to get the total price of an item


        quan = document.getElementById("quantity");
        price = document.getElementById("price");
        total = document.getElementById("total");

        total.value = quan.value * price.value;



    }







///////////////////////////////////////////////////////////////////////////////////////////////////