let data = [
    { 'img': 'ananas.png', 'name-uzb': 'Ananas', 'name-eng': 'Pineapple' },
    { 'img': 'anjir.jpg', 'name-uzb': 'Anjir', 'name-eng': 'Fig' },
    { 'img': 'archa.jpg', 'name-uzb': 'Archa', 'name-eng': 'Juniper' },
    { 'img': 'ayiq.jpg', 'name-uzb': 'Ayiq', 'name-eng': 'Bear' },
    { 'img': 'ayol.jpeg', 'name-uzb': 'Ayol', 'name-eng': 'Woman' },
    { 'img': 'banan.png', 'name-uzb': 'Banan', 'name-eng': 'Banana' },
    { 'img': 'baraban.png', 'name-uzb': 'Baraban', 'name-eng': 'Drum' },
    { 'img': 'barg.jpg', 'name-uzb': 'Barg', 'name-eng': 'Leaf' },
    { 'img': "basketbol_topi.jpg", 'name-uzb': "To'p", 'name-eng': 'Ball' },
    { 'img': 'basketbolchi.jpg', 'name-uzb': 'Basketbolchi', 'name-eng': 'Basketball Player' },
    { 'img': 'basseyn.jpg', 'name-uzb': 'Basseyn', 'name-eng': 'Swimming Pool' },
    { 'img': 'behi.jpg', 'name-uzb': 'Behi', 'name-eng': 'Quince' },
    { 'img': 'bino.jpg', 'name-uzb': 'Bino', 'name-eng': 'Building' },
    { 'img': 'bori.jpg', 'name-uzb': 'Bori', 'name-eng': 'Wolf' },
    { 'img': 'charli_chaplin.jpg', 'name-uzb': 'aktyor', 'name-eng': 'Actor' },
    { 'img': 'chipta.jpg', 'name-uzb': 'Chipta', 'name-eng': 'Ticket' },
    { 'img': 'chizburger.jpg', 'name-uzb': 'Chizburger', 'name-eng': 'Cheeseburger' },
    { 'img': 'cola.png', 'name-uzb': 'Cola', 'name-eng': 'Cola' },
    { 'img': 'dasturchi.png', 'name-uzb': 'Dasturchi', 'name-eng': 'Programmer' },
    { 'img': 'delfin.jpg', 'name-uzb': 'Delfin', 'name-eng': 'Dolphin' },
    { 'img': 'divan.jpg', 'name-uzb': 'Divan', 'name-eng': 'Sofa' },
    { 'img': 'dron.jpg', 'name-uzb': 'Dron', 'name-eng': 'Drone' },
    { 'img': 'echki.webp', 'name-uzb': 'Echki', 'name-eng': 'Goat' },
    { 'img': 'elektromobil.jpg', 'name-uzb': 'Elektromobil', 'name-eng': 'Electric Car' },
    { 'img': 'elon-musk-portrait.jpg', 'name-uzb': 'milliader', 'name-eng': 'billionaire' },
    { 'img': 'email.png', 'name-uzb': 'Email', 'name-eng': 'Email' },
    { 'img': 'erkak.jpg', 'name-uzb': 'Erkak', 'name-eng': 'Man' },
    { 'img': 'fanta.png', 'name-uzb': 'Fanta', 'name-eng': 'Fanta' },
    { 'img': 'ferma.jpg', 'name-uzb': 'Ferma', 'name-eng': 'Farm' },
    { 'img': 'fil.jpg', 'name-uzb': 'Fil', 'name-eng': 'Elephant' },
    { 'img': 'gantel.jpg', 'name-uzb': 'Gantel', 'name-eng': 'Dumbbell' },
    { 'img': 'gepard.webp', 'name-uzb': 'Gepard', 'name-eng': 'Cheetah' },
    { 'img': 'gilos.png', 'name-uzb': 'Gilos', 'name-eng': 'Cherry' },
    { 'img': 'jip.jpg', 'name-uzb': 'Jip', 'name-eng': 'Jeep' },
    { 'img': 'jirafa.jpg', 'name-uzb': 'Jirafa', 'name-eng': 'Giraffe' },
    { 'img': 'kalonka.jpg', 'name-uzb': 'Kalonka', 'name-eng': 'Speaker' },
    { 'img': 'kapalak.jpg', 'name-uzb': 'Kapalak', 'name-eng': 'Butterfly' },
    { 'img': 'karta.jpg', 'name-uzb': 'Karta', 'name-eng': 'Card' },
    { 'img': 'katta uy.jpg', 'name-uzb': 'Katta Uy', 'name-eng': 'Big House' },
    { 'img': 'kema.jpg', 'name-uzb': 'Kema', 'name-eng': 'Ship' },
    { 'img': 'kitob.jpg', 'name-uzb': 'Kitob', 'name-eng': 'Book' },
    { 'img': 'klupnay.webp', 'name-uzb': 'Klupnay', 'name-eng': 'Strawberry' },
    { 'img': 'krasofka.jpg', 'name-uzb': 'Krasofka', 'name-eng': 'Sneakers' },
    { 'img': 'kuchuk.jpg', 'name-uzb': 'Kuchuk', 'name-eng': 'Dog' },
    { 'img': 'kursi.png', 'name-uzb': 'Kursi', 'name-eng': 'Chair' },
    { 'img': 'lampochka.jpg', 'name-uzb': 'Lampochka', 'name-eng': 'Light Bulb' },
    { 'img': 'lupa.png', 'name-uzb': 'Lupa', 'name-eng': 'Magnifying Glass' },
    { 'img': 'malina.png', 'name-uzb': 'Malina', 'name-eng': 'Raspberry' },
    { 'img': 'mandarin.jpg', 'name-uzb': 'Mandarin', 'name-eng': 'Orange' },
    { 'img': 'mario.jpg', 'name-uzb': `O'yin`, 'name-eng': 'Game' },
    { 'img': 'mashina.png', 'name-uzb': 'Mashina', 'name-eng': 'Car' },
    { 'img': 'maymun.jpg', 'name-uzb': 'Maymun', 'name-eng': 'Monkey' },
    { 'img': 'mebel.jpg', 'name-uzb': 'Mebel', 'name-eng': 'Furniture' },
    { 'img': 'mevalar.jpg', 'name-uzb': 'Mevalar', 'name-eng': 'Fruits' },
    { 'img': 'mikki_maus.png', 'name-uzb': 'Mikki Maus', 'name-eng': 'Mickey Mouse' },
    { 'img': 'mikrafon.jpg', 'name-uzb': 'Mikrafon', 'name-eng': 'Microphone' },
    { 'img': 'militsia.png', 'name-uzb': 'Militsiya', 'name-eng': 'Police' },
    { 'img': 'monno_lisa.jpg', 'name-uzb': 'surat', 'name-eng': 'Painting' },
    { 'img': 'motosikl.jpg', 'name-uzb': 'Motosikl', 'name-eng': 'Motorcycle' },
    { 'img': 'mushuk.jpg', 'name-uzb': 'Mushuk', 'name-eng': 'Cat' },
    { 'img': 'naski.jpg', 'name-uzb': 'paypoq', 'name-eng': 'Socks' },
    { 'img': 'nok.png', 'name-uzb': 'Nok', 'name-eng': 'Pear' },
    { 'img': "urik.png", 'name-uzb': "O'rik", 'name-eng': 'Apricot' },
    { 'img': 'ochki.jpg', 'name-uzb': 'Ochki', 'name-eng': 'Glasses' },
    { 'img': 'odamlar.png', 'name-uzb': 'Odamlar', 'name-eng': 'People' },
    { 'img': 'oila.webp', 'name-uzb': 'Oila', 'name-eng': 'Family' },
    { 'img': 'olcha.webp', 'name-uzb': 'Olcha', 'name-eng': 'Cherry' },
    { 'img': 'olma.jpg', 'name-uzb': 'Olma', 'name-eng': 'Apple' },
    { 'img': 'olmos_uzuk.jpg', 'name-uzb': 'Olmos Uzuk', 'name-eng': 'Diamond Ring' },
    { 'img': 'olov.jpg', 'name-uzb': 'Olov', 'name-eng': 'Fire' },
    { 'img': 'oltin_bar.jpg', 'name-uzb': 'Oltin', 'name-eng': 'Gold' },
    { 'img': 'ot.jpg', 'name-uzb': 'Ot', 'name-eng': 'Horse' },
    { 'img': 'ovqat.jpg', 'name-uzb': 'Ovqat', 'name-eng': 'Food' },
    { 'img': 'oyna.jpg', 'name-uzb': 'Oyna', 'name-eng': 'Mirror' },
    { 'img': 'pepsi.png', 'name-uzb': 'Pepsi', 'name-eng': 'Pepsi' },
    { 'img': 'pingvin.jpg', 'name-uzb': 'Pingvin', 'name-eng': 'Penguin' },
    { 'img': 'piyoz.jpg', 'name-uzb': 'Piyoz', 'name-eng': 'Onion' },
    { 'img': 'playstayshn.jpg', 'name-uzb': 'Playstayshn', 'name-eng': 'PlayStation' },
    { 'img': 'pul.png', 'name-uzb': 'Pul', 'name-eng': 'Money' },
    { 'img': 'qaychi.jpg', 'name-uzb': 'Qaychi', 'name-eng': 'Scissors' },
    { 'img': "qul_soati.jpg", 'name-uzb': "Qo'l Soati", 'name-eng': 'Watch' },
    { 'img': "kaft.jpg", 'name-uzb': "Qo'l", 'name-eng': 'Hand' },
    { 'img': "qogoz.gif", 'name-uzb': "Qog'oz", 'name-eng': 'Paper' },
    { 'img': 'qorparcha.jpg', 'name-uzb': 'Qor Parcha', 'name-eng': 'Snowflake' },
    { 'img': 'qor.jpg', 'name-uzb': 'Qor', 'name-eng': 'Snow' },
    { 'img': 'qorbobo.jpg', 'name-uzb': 'Qorbobo', 'name-eng': 'Santa Claus' },
    { 'img': 'qoziqorin.png', 'name-uzb': 'Qoziqorin', 'name-eng': 'Mushroom' },
    { 'img': 'quloqchin.jpg', 'name-uzb': 'Quloqchin', 'name-eng': 'Headphones' },
    { 'img': 'quyon.jpg', 'name-uzb': 'Quyon', 'name-eng': 'Rabbit' },
    { 'img': 'robot.png', 'name-uzb': 'Robot', 'name-eng': 'Robot' },
    { 'img': 'samolyot.jpg', 'name-uzb': 'Samolyot', 'name-eng': 'Airplane' },
    { 'img': 'shaftoli.png', 'name-uzb': 'Shaftoli', 'name-eng': 'Peach' },
    { 'img': 'sher.jpg', 'name-uzb': 'Sher', 'name-eng': 'Lion' },
    { 'img': 'shippak.jpg', 'name-uzb': 'Shippak', 'name-eng': 'Slippers' },
    { 'img': 'shokaland.png', 'name-uzb': 'Shokaland', 'name-eng': 'Chocolate' },
    { 'img': 'shurva.jpg', 'name-uzb': 'Shurva', 'name-eng': 'Soup' },
    { 'img': 'sichqon.jpeg', 'name-uzb': 'Sichqon', 'name-eng': 'Mouse' },
    { 'img': 'sirtlon.jpg', 'name-uzb': 'Sirtlon', 'name-eng': 'Leopard' },
    { 'img': 'sumka.jpg', 'name-uzb': 'Sumka', 'name-eng': 'Bag' },
    { 'img': 'suv_motosikli.jpg', 'name-uzb': 'Suv Motosikli', 'name-eng': 'Jet Ski' },
    { 'img': 'suv_tomchisi.png', 'name-uzb': 'Suv Tomchisi', 'name-eng': 'Water Drop' },
    { 'img': 'talaba.jpg', 'name-uzb': 'Talaba', 'name-eng': 'Student' },
    { 'img': 'tanka.jpg', 'name-uzb': 'Tanka', 'name-eng': 'Tank' },
    { 'img': 'tarvuz.jpeg', 'name-uzb': 'Tarvuz', 'name-eng': 'Watermelon' },
    { 'img': 'telefon.jpg', 'name-uzb': 'Telefon', 'name-eng': 'Phone' },
    { 'img': 'tipratikan.jpg', 'name-uzb': 'Tipratikan', 'name-eng': 'Hedgehog' },
    { 'img': 'toj.jpg', 'name-uzb': 'Toj', 'name-eng': 'Crown' },
    { 'img': 'traktory.png', 'name-uzb': 'Traktory', 'name-eng': 'Tractor' },
    { 'img': 'uy.jpg', 'name-uzb': 'Uy', 'name-eng': 'House' },
    { 'img': 'uzbekiston_xaritasi.jpg', 'name-uzb': 'Xarita', 'name-eng': 'Map' },
    { 'img': 'uzum.jpg', 'name-uzb': 'Uzum', 'name-eng': 'Grape' },
    { 'img': 'velosiped.jpg', 'name-uzb': 'Velosiped', 'name-eng': 'Bicycle' },
    { 'img': 'vertolyot.jpg', 'name-uzb': 'Vertolyot', 'name-eng': 'Helicopter' },
    { 'img': 'vino.jpg', 'name-uzb': 'Vino', 'name-eng': 'Wine' },
    { 'img': 'yaxta.jpg', 'name-uzb': 'Yaxta', 'name-eng': 'Yacht' },
    { 'img': "yulbars.webp", 'name-uzb': "Yo'lbars", 'name-eng': 'Tiger' },
    { 'img': 'zebra.jpg', 'name-uzb': 'Zebra', 'name-eng': 'Zebra' },
    { 'img': 'zina.png', 'name-uzb': 'Zina', 'name-eng': 'Stairs' }
];

let number = document.getElementById("number")
let sec = document.querySelector("section")
let st = document.querySelector(".start_button")
let mode = document.getElementById("mode")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let plus = 0
for (let i = 0; i < data.length; i++) {
    let rand1 = Math.floor(Math.random() * data.length)
    let rand2 = Math.floor(Math.random() * data.length)
    let t = data[rand1]
    data[rand1] = data[rand2]
    data[rand2] = t
}

let tanlanganlar = []
st.addEventListener('click', () => {
    tanlanganlar = []
    sec.innerHTML = ``
    let count = parseInt(number.value - 1)
    for (let i = 0; i <= count; i++) {
        let item = data[i];
        let box = document.createElement("div")
        box.classList.add("box")
        box.innerHTML = `
            <p class="name_uzb">${item["name-uzb"]}</p>
            <img src="photos/${item["img"]}" alt="Image">
            <p class="name_eng">${item["name-eng"]}</p>
        `
        
        tanlanganlar.push(item)
        localStorage.setItem('word', JSON.stringify(tanlanganlar))
        sec.appendChild(box)

        mode.onclick = () => {
            document.querySelectorAll(".box").forEach(box => {
                let box_img = box.querySelector("img")
                if (mode.checked) {
                    box.style.width = `100%`
                    box_img.style.width = `60%`
                    box_img.style.height = `70vh`
                    box.style.height = `500%`
                    next.style.display = `block`
                    prev.style.display = `block`
                } else {
                    box.style.width = `20%`
                    box.style.height = `40vh`
                    box_img.style.height = `30vh`
                    box_img.style.width = `90%`
                    next.style.display = `none`
                    prev.style.display = `none`
                }
            });
        };
    }
});