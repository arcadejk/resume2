document.addEventListener('DOMContentLoaded', () => {
    const websites = [
        { name: "Love Maths", url: "https://arcadejk.github.io/love-math/", image: "assets/images/website1.png" },
        { name: "Korean Movie Reacts", url: "https://arcadejk.github.io/movies-reacts-playlist/", image: "assets/images/website2.png" },
        { name: "Love Sandwiches", url: "https://loves-sandwiches-arcade-5cd3a5ebfca2.herokuapp.com/", image: "assets/images/website3.png" },
        { name: "Love Running", url: "https://arcadejk.github.io/Love-Running-Project/", image: "assets/images/website4.png" },
        { name: "K-Drama Fandom", url: "https://arcadejk.github.io/kdrama-fandom/", image: "assets/images/website5.png" },
        { name: "Whiskey Drop website", url: "https://arcadejk.github.io/bootstrap4/", image: "assets/images/website6.png" },
        { name: "Love Letters and Grammar", url: "https://love-letters-and-grammar-5f96e9223b1d.herokuapp.com/", image: "assets/images/website7.png" },
    ];

    const websitesList = document.getElementById('websites-list');

    websites.forEach(site => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        
        const link = document.createElement('a');
        link.href = site.url;
        link.textContent = site.name;
        link.target = "_blank";
        
        const image = document.createElement('img');
        image.src = site.image;
        image.alt = site.name;
        image.className = 'img-thumbnail preview-image';

        link.appendChild(image);

        const text = document.createElement('span');
        text.textContent = site.name;

        listItem.appendChild(link);
    
        websitesList.appendChild(listItem);
    });
});
