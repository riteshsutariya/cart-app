import Products from "../components/Products";

export default function Home(){
    return(
        <>
        <div>
            <h2 className="heading">welcome to store</h2>
            <section>
                <h3>products</h3>
                <Products/>
            </section>
        </div>
        </>
    )
}