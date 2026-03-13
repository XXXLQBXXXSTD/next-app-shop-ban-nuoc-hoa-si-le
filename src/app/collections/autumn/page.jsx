"use client"
import { useCart } from "@/context/CartContext";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";
import SeasonDetail from "@/component/SeasonDetail";

export default function AutumnPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const season = {
    id: 'autumn',
    name: 'Thu',
    nameEn: 'Autumn',
    subtitle: 'Hoài niệm tĩnh lặng',
    description: 'Ấm áp với hổ phách và gỗ tuyết tùng',
    fullDescription: 'Mùa thu mang đến sự ấm áp, sâu lắng với những nốt hương gỗ, hổ phách và lá khô. Bộ sưu tập này dành cho những tâm hồn mơ mộng và hoài niệm.',
    heroImage: 'https://fimgs.net/mdimg/perfume/375x500.14365.jpg',
    color: '#D2691E'
  };

  const products = [
    {id: 1, name: 'Warm Amber Intense', brand: 'LUXE SCENT', price: 3200000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.14365.jpg', badge: 'Mới', discount: 15},
    {id: 2, name: 'Woody Silence', brand: 'LUXE SCENT', price: 2850000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.2825.jpg'},
    {id: 3, name: 'Autumn Leaves', brand: 'LUXE SCENT', price: 2500000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.1826.jpg'},
    {id: 4, name: 'Golden Hour', brand: 'LUXE SCENT', price: 3100000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.1825.jpg'}
  ];

  const otherSeasons = [
    {id: 'spring', name: 'Xuân', subtitle: 'Giai đoạn chuyển mình', image: 'https://fimgs.net/mdimg/perfume/375x500.1406.jpg'},
    {id: 'summer', name: 'Hạ', subtitle: 'Năng lượng rực rỡ', image: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg'},
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
