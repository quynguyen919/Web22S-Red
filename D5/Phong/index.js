const danhSachSanPham = [{
        name: "San Pham 1:",
        price: "Giá: 20",
        photoURL: "./img/1495863.jpg",
        description: "Mô tả: Đẹp ^^"
    },
    {
        name: "San Pham 2:",
        price: "Giá: 10",
        photoURL: "./img/I0cw3N.jpg",
        description: "Mô tả: Ngầu ^^"
    }
]
const container = document.getElementsByClassName("body")
    // console.log(box)
for (let i = 0; i < danhSachSanPham.length; i++) {
    // console.log(danhSachSanPham[i])
    let box = document.createElement("div")
    box.className = "box " + i;
    let name = document.createElement("h2")
    name.innerHTML = danhSachSanPham[i].name
    box.appendChild(name)
    name.className = "name " + i;

    let photoURL = document.createElement("img")
    photoURL.src = danhSachSanPham[i].photoURL
    box.appendChild(photoURL)
    photoURL.className = "poster " + i;

    let price = document.createElement("h3")
    price.innerHTML = danhSachSanPham[i].price
    box.appendChild(price)
    price.className = "price " + i;

    let description = document.createElement("h2")
    description.innerHTML = danhSachSanPham[i].description
    box.appendChild(description)
    description.className = "description " + i;

    container[0].appendChild(box)

}