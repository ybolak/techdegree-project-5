// baguetteBox.run('.gallery');​

function search_photo() {
    let input, filter, div, a_1, a_2, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName('gallery');
    a_1 = div.getElementsByTagName('a');


    for( i = 0; i < a.length; i++ ) {
        a_2 = a_1[j].getElementsByTagName('a')[0];
        txtValue = j.textContent || j.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            a[j].style.display = "";
        } else {
            a[j].style.display = "none";
        }
    }
}

