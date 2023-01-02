export async function getProducts(){
    $.ajax({
        url :"https://fakestoreapi.com/products",
        type:"GET",
        dataType:"json",
        success : function(data){
            renderAllProdPages()
            data.map((item)=>{
                console.log("get success")
                renderProducts(item)
            })
        }, fail: function(error){
                console.log(error.message)
        }
    })
}
export async function getProductsDetail(prodID){
    $.ajax({
        url :`https://fakestoreapi.com/products/${prodID}`,
        type:"GET",
        dataType:"json",
        success : function(data){
            removeElement()
            console.log("success")
            renderProductsDetail(data)
        }, fail: function(error){
                console.log(error.message)
        }
    })
}


function removeElement(){
    $('#products').remove()
    $('#container').remove()
    $('#first').remove()
    $('#second').remove()
    $('#secsatu').remove()
}

//render
function renderProducts(item){
    $('#products').append(
        `<div class="prodItems">
                <a href="?prodID=${item.id}">
                <img src="${item.image}" class="prodItemsImage">
                <div class="image-overlay">
                <p class="image-overlay-text">${item.title}</p>
                </div>
                </a>
        </div>`
    )
}

function renderAllProdPages(){
    $('#first').append(
        `<div class="item">
            <span class="judul">Urbane Aesthetic</span>
        </div>
        `
    )
    $('#secsatu').append(
        `Buy. Think. Grow.`
    )
    $('#second').append(
        `<section class="secdua">
        <span class="isisecdua">
            “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
            <br>
            -Ralph Waldo Emerson
        </span>
    </section>
    <section class="trending">
        <h1>TRENDING</h1>
    </section>`
    )
}
function renderProductsDetail(item){
    $('#products-detail').append(
        `<div class='prod-detail-container'>
            <img class="prod-detail-image" src="${item.image}">
            <h2 class="prod-detail-title">${item.title}<br>$${item.price}</h2>
            <span class="prod-detail-desc">${item.description}</span>
        </div>`
    )
}