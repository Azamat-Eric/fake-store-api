// Selecting header elements
const welcomeHeader = document.querySelector('header h1');

// Selecting main elements
const featuredProductsHeader = document.querySelector('main .products h2');
const productImage = document.querySelector('.product-image img');
const titleElement = document.querySelector('#title');
const descriptionElement = document.querySelector('#description');
const categoryElement = document.querySelector('#category');
const ratingElement = document.querySelector('#rating');
const rateElement = document.querySelector('#rate');
const countElement = document.querySelector('#count');
const priceElement = document.querySelector('#price');
const section_pro = document.querySelector("section");

// Selecting footer elements
const footerParagraph = document.querySelector('footer p');

fetch('https://fakestoreapi.com/carts/user/2')
            .then(rs=>rs.json())
            .then(ds=>console.log(ds))

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for(let i = 0; i< data.length;i++){
            var container = document.createElement("div");
            container.className = "product-container";
            section_pro.appendChild(container);

            var img_div = document.createElement("div");
            img_div.setAttribute("class","product-image");
            container.appendChild(img_div);
            
            var image = document.createElement('img');
            image.src=data[i].image;
            img_div.appendChild(image);

            var properties = document.createElement("div");
            properties.id = "properties";
            container.appendChild(properties);
            
            var title_div = document.createElement('div');
            title_div.setAttribute("id", "title");
            title_div.textContent = data[i].title;
            properties.appendChild(title_div);

            var description = document.createElement("div");
            description.id = 'description';
            properties.appendChild(description);
            description.textContent = data[i].description;

            var category = document.createElement("div");
            category.id = 'category';
            category.textContent="Category: "+data[i].category;
            properties.appendChild(category);

            var rating = document.createElement("div");
            rating.id ="rating";
            properties.appendChild(rating);
            
            var progressbar = document.createElement("progress");
            progressbar.min = 0;
            progressbar.max = 5;
            progressbar.value = data[i].rating.rate;
            rating.appendChild(progressbar);

            var rate = document.createElement("div");
            rate.id = 'rate';
            rate.innerText += data[i].rating.rate;
            var rate_num = data[i].rating.rate
            rating.appendChild(rate);
            rate_num<=5?rate.style.color = "green": "less";
            rate_num<=4?rate.style.color = "blue": "less";
            rate_num<=3?rate.style.color = "orange": "less";
            rate_num<=2?rate.style.color = "red": "less";

            var count = document.createElement("div");
            count.id = 'count';
            rating.appendChild(count);
            count.textContent = data[i].rating.count;
            
            var price = document.createElement("div");
            price.id = "price";
            price.textContent = "$"+data[i].price;
            properties.appendChild(price);
        }
    });