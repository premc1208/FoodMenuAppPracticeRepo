
const Food = () => {
    const foodItems = [
        { id: 1, name: "Pizza", price: 12.99 },
        { id: 2, name: "Burger", price: 8.99 },
        { id: 3, name: "Salad", price: 7.99 }
    ];

    return (
        <>
            <h2>Food Menu</h2>
            {
                foodItems.map(item => {
                    return (
                        <div key={item.id}>
                            <label>{item.name} - ${item.price.toFixed(2)}</label>
                        </div>
                    )
                })
            }
        </>
    )   
}

export default Food
