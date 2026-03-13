"use client"
import { useCart } from "@/context/CartContext";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";
import SeasonDetail from "@/component/SeasonDetail";

export default function WinterPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const season = {
    id: 'winter',
    name: 'Đông',
    nameEn: 'Winter',
    subtitle: 'Huyền bí quyến rũ',
    description: 'Sâu đậm với xạ hương và trầm hương',
    fullDescription: 'Mùa đông huyền bí với những nốt hương sâu đậm, ấm áp của xạ hương, trầm hương và gia vị phương đông. Bộ sưu tập này mang đến sự quyền quý và sang trọng.',
    heroImage: 'https://fimgs.net/mdimg/perfume/375x500.73669.jpg',
    color: '#4682B4'
  };

  const products = [
    {id: 1, name: 'Hương Quế Ấm Áp', brand: 'LUXE SCENT', price: 2500000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.73669.jpg', badge: 'Best Seller'},
    {id: 2, name: 'Trầm Hương Phương Đông', brand: 'LUXE SCENT', price: 4200000, volume: '100ml', image: 'https://fimgs.net/mdimg/perfume/375x500.1825.jpg'},
    {id: 3, name: 'Vani Ngọt Ngào', brand: 'LUXE SCENT', price: 2300000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.14441.jpg', badge: 'Mới'},
    {id: 4, name: 'Gỗ Tuyết Tùng', brand: 'LUXE SCENT', price: 3800000, volume: '100ml', image: 'https://fimgs.net/mdimg/perfume/375x500.1826.jpg'}
  ];

  const otherSeasons = [
    {id: 'spring', name: 'Xuân', subtitle: 'Giai đoạn chuyển mình', image: 'https://fimgs.net/mdimg/perfume/375x500.1406.jpg'},
    {id: 'summer', name: 'Hạ', subtitle: 'Năng lượng rực rỡ', image: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg'},
    {id: 'autumn', name: 'Thu', subtitle: 'Hoài niệm tĩnh lặng', image: 'https://fimgs.net/mdimg/perfume/375x500.14365.jpg'}
  ];

  return (
    <>
      <LuxuryHeader />
      <SeasonDetail season={season} otherSeasons={otherSeasons} products={products} onAddToCart={handleAddToCart} />
      <LuxuryFooter />
    </>
  );
}
