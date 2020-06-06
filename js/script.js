const next = document.getElementById('next');
const prev = document.getElementById('prev');
const card = document.getElementById('card');
const text = document.getElementById('text');
const prof = document.getElementById('prof');
const name = document.getElementById('name');
const img = document.getElementById('img');



let change = () => {    
    
    if( name.innerHTML === 'Tanya Sinclair' ) {
        console.log('si')
        name.innerHTML = 'John Tarkpor';
        prof.innerHTML = 'Junior Front-end Developer';
        text.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`;
        img.src = 'images/image-john.jpg';

    } else {
        name.innerHTML = 'Tanya Sinclair';
        prof.innerHTML = 'UX Engineer';
        text.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`;
        img.src = 'images/image-tanya.jpg';
        
    }


}


next.addEventListener( 'click', change );
prev.addEventListener( 'click', change );
