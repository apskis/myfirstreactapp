import ProductForm from "./ProductForm";

export default function CreateProduct() {
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto" style={{backgroundColor: 'white', padding: '10px, 20px', marginBottom: 20}}>
                <form>
                    <ProductForm></ProductForm>
                </form>
            </div>
        </div>
    )
}