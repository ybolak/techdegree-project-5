baguetteBox.run('.gallery');

// credit The Net Ninja (https://www.youtube.com/watch?v=3NG8zy0ywIk)
const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const pictures = document.getElementsByTagName('a');
    Array.from(pictures).forEach(function(pic){
        const caption = pic.dataset.caption;
        if(caption.toLowerCase().indexOf(term) != -1 ){
            pic.style.display = 'block';
        } else {
            pic.style.display = 'none';
        }
    })
    
})



  