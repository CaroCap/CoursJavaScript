// Approche degueux
$('body').append('<div><h2>Greg</h2><img src="https://picsum.photos/id/237/200/300" alt=""><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aliquid natus maiores obcaecati quam ut perferendis molestias blanditiis sapiente. Error eaque accusamus omnis accusantium? Nam blanditiis laborum voluptas. Magnam, unde.</p></div>');

// meilleure approche
$('body').append('<div></div>');
$('div').append('<h2>Greg</h2>')
        .append('<img src="https://picsum.photos/id/237/200/300" alt="">')
        .append('<p>lorem ipsum</p>');

// approche JS Pure
let div = document.createElement('div');
let h2 = document.createElement('h2');
h2.innerHTML = "Greg";
div.appendChild(h2);
document.body.appendChild(div);
        
