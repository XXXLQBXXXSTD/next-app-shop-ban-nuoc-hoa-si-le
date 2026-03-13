export default function ProductItem ({name, price, onAdd, image, brand, discount}) {
    const finalPrice = discount ? price * (1 - discount / 100) : price;
    
    return(
        <div className="card h-100 shadow-sm">
            <div className="position-relative">
                <img 
                    src={image || "https://via.placeholder.com/300x400?text=Perfume"} 
                    className="card-img-top" 
                    alt={name}
                    style={{height: '300px', objectFit: 'cover'}}
                />
                {discount && (
                    <span className="position-absolute top-0 end-0 badge bg-danger m-2">
                        -{discount}%
                    </span>
                )}
            </div>
            <div className="card-body d-flex flex-column">
                <small className="text-muted">{brand || "Brand"}</small>
                <h6 className="card-title">{name}</h6>
                <div className="mt-auto">
                    {discount ? (
                        <div>
                            <span className="text-decoration-line-through text-muted me-2">
                                {price.toLocaleString()}đ
                            </span>
                            <span className="text-danger fw-bold">
                                {finalPrice.toLocaleString()}đ
                            </span>
                        </div>
                    ) : (
                        <p className="text-primary fw-bold mb-2">{price.toLocaleString()}đ</p>
                    )}
                    <button onClick={onAdd} className="btn btn-dark w-100 mt-2">
                        🛒 Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    )
}

