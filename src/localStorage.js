const getStoredItem = () => {
        const storedItem = localStorage.get('cart')
        if(storedItem){
                return JSON.parse(storedItem);
        } else{
                return []
        }
}



const addToCart = (id) => {
        const savedCart = getStoredItem()
        if(savedCart.includes(id)){
                alert('already exists')
        }else{
                savedCart.push(id)
                localStorage.setItem('cart', JSON.stringify(savedCart))
        }

}

export {addToCart}