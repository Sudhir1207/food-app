export default function FoodList({foodData}){
    return(
        <div>
            {foodData.map((food)=><h1>{food.title}</h1>)}
        </div>
    )
}