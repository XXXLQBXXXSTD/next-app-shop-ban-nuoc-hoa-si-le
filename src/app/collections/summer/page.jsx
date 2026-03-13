"use client"
import { useCart } from "@/context/CartContext";
import LuxuryHeader from "@/component/LuxuryHeader";
import LuxuryFooter from "@/component/LuxuryFooter";
import SeasonDetail from "@/component/SeasonDetail";

export default function SummerPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const season = {
    id: 'summer',
    name: 'Hạ',
    nameEn: 'Summer',
    subtitle: 'Năng lượng rực rỡ',
    description: 'Tươi mát với cam Bergamot và hương biển',
    fullDescription: 'Mùa hè bùng nổ với năng lượng tươi mới, những nốt hương cam chanh sảng khoái kết hợp cùng hương biển mặn mà. Bộ sưu tập này mang đến cảm giác tự do và phóng khoáng.',
    heroImage: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg',
    color: '#FFA500'
  };

  const products = [
    {id: 1, name: 'Citrus Spark', brand: 'LUXE SCENT', price: 1200000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg'},
    {id: 2, name: 'Ocean Breeze', brand: 'LUXE SCENT', price: 1450000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.1713.jpg'},
    {id: 3, name: 'Summer Zest', brand: 'LUXE SCENT', price: 1100000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.42575.jpg'},
    {id: 4, name: 'Mediterranean Mist', brand: 'LUXE SCENT', price: 1600000, volume: '50ml', image: 'https://fimgs.net/mdimg/perfume/375x500.46861.jpg'}
  ];

  const otherSeasons = [
    {id: 'spring', name: 'Xuân', subtitle: 'Giai đoạn chuyển mình', image: 'https://fimgs.net/mdimg/perfume/375x500.1406.jpg'},
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
