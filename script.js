let products = {
    data: [
        {
            title: "title : NCERT",
            subject: "Basic",
            date: "2022-01-31",
            image: "image/NCER.jpg",
        },
        {
            title: "title : Cryptography",
            subject: "IT",
            date: "2022-11-11",
            image: "image/crypto.jpg",
        },
        {
            title: "title : DBMS",
            subject: "IT",
            date: "2022-12-22",
            image: "image/Database.jpg",
        },
        {
            title: "title : Computer networks and security",
            subject: "CSE",
            date: "2022-03-20",
            image: "image/cns.jpg",
        },
        {
            title: "title : Mental Peace",
            subject: "Novel",
            date: "2022-11-10",
            image: "image/Network.jpg",
        },
        {
            title: "title : Artificial Intelligence",
            subject: "ISE",
            date: "2022-12-20",
            image: "image/Os.jpg",
        },
        {
            title: "title : System design",
            subject: "CSE",
            date: "2022-12-20",
            image: "image/Sdesign.jpg",
        },
        {
            title: "title : Mathematics",
            subject: "Basic",
            date: "2022-01-21",
            image: "image/Maths.jpg",
        },
        {
            title: "title : Harry Potter",
            subject: "Fantasy",
            date: "2022-12-20",
            image: "image/hp.jpg",
        },
        {
            title: "title : Operating System",
            subject: "CSE",
            date: "2022-04-20",
            image: "image/Nt.jpg",
        },
        {
            title: "title : Atomic Habbits",
            subject: "Novel",
            date: "1995-12-22",
            image: "image/ah.jpg",
        },
        {
            title: "title : How to win friends and influence people",
            subject: "Novel",
            date: "2002-02-02",
            image: "image/htw.jpeg",
        },
        {
            title: "title : Image Processing",
            subject: "ISE",
            date: "2021-12-20",
            image: "image/Wta.jpg",
        },
        {
            title: "title : Physics",
            subject: "Basic",
            date: "2022-1220",
            image: "image/Ncert.jpg",
        },
        {
            title: "title : UNIX",
            subject: "IT",
            date: "2022-08-08",
            image: "image/Nt.jpg",
        },
        {
            title: "title : Cyber Security",
            subject: "CSE",
            date: "2022-08-08",
            image: "image/CS.jpg",
        },
        {
            title: "title : Harry Potter",
            subject: "Fantasy",
            date: "2022-12-20",
            image: "image/hp2.jpg",
        },
        {
            title: "title : Python",
            subject: "IT",
            date: "2022-08-08",
            image: "image/py.jpg",
        },
        {
            title: "title : The Amber Crown",
            subject: "Fantasy",
            date: "2002-02-02",
            image: "image/AC.jpg",
        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.subject, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("title");
    title.innerText = i.title.toUpperCase();
    container.appendChild(title);

    let sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.innerText = i.subject.toUpperCase();
    container.appendChild(sub);

    let date = document.createElement("h6");
    date.classList.add("date");
    date.innerText = i.date.toUpperCase();
    container.appendChild(date);

    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

window.onload = () => {
    filterProduct("all");
};
