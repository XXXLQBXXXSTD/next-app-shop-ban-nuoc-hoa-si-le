"use client"
import { useCart } from "@/context/CartContext";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";
import SeasonDetail from "@/component/SeasonDetail";

export default function SpringPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const season = {
    id: 'spring',
    name: 'Xuân',
    nameEn: 'Spring',
    subtitle: 'Giai đoạn chuyển mình',
    description: 'Sự bùng nổ của hoa anh đào và cỏ xanh mới nhú',
    fullDescription: 'Mùa xuân mang đến sự tươi mới, nhẹ nhàng với những nốt hương hoa cỏ tinh tế. Bộ sưu tập này tôn vinh vẻ đẹp thuần khiết của thiên nhiên đang thức giấc.',
    heroImage: 'https://fimgs.net/mdimg/perfume/375x500.1406.jpg',
    color: '#FFB6C1'
  };

  const products = [
    {id: 1, name: 'Petal Breeze', brand: 'LUXE SCENT', price: 1200000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.7955.jpg', badge: 'Mới'},
    {id: 2, name: 'Spring Bloom', brand: 'LUXE SCENT', price: 1450000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.1713.jpg'},
    {id: 3, name: 'Dewy Morning', brand: 'LUXE SCENT', price: 1100000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.1406.jpg'},
    {id: 4, name: 'Blossom Whisper', brand: 'LUXE SCENT', price: 1350000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg'}
  ];

  const otherSeasons = [
    {id: 'summer', name: 'Hạ', subtitle: 'Năng lượng rực rỡ', image: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg'},
    {id: 'autumn', name: 'Thu', subtitle: 'Hoài niệm tĩnh lặng', image: 'https://fimgs.net/mdimg/perfume/375x500.14365.jpg'},
    {id: 'winter', name: 'Đông', subtitle: 'Huyền bí quyến rũ', image: 'https://fimgs.net/mdimg/perfume/375x500.73669.jpg'}
  ];

  return (
    <>
      <LuxuryHeader />
      <SeasonDetail season={season} otherSeasons={otherSeasons} products={products} onAddToCart={handleAddToCart} />
      <LuxuryFooter />
    </>
  );
}
