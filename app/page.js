import Image from "next/image";
import ProductGroup from "./components/ProductGroup";

export default function Home() {
  // Define icon sizes outside of the return statement
  const iconSize = 50; // Icon size in pixels
  const cartIconSize = 40; // Cart icon size in pixels

  return (
    <div className="min-h-screen flex flex-col mx-10">
      {/* Navigation Bar */}
      <nav className="relative px-5 sm:px-10 py-5 flex items-center border-custom">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/chloelogo.jpg"
            alt="Chloe de Bloom"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Social Media Icons and Cart Icon */}
        <div className="flex items-center space-x-1">
          {/* Line Link */}
          <a
            href="https://line.me/ti/p/your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/linelogobig.png"
              alt="Line"
              width={iconSize}
              height={iconSize}
              className="px-2"
            />
          </a>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/iglogobig.png"
              alt="Instagram"
              width={iconSize}
              height={iconSize}
              className="px-2"
            />
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/walogobig.png"
              alt="WhatsApp"
              width={iconSize}
              height={iconSize}
              className="px-2"
            />
          </a>

          {/* Cart Icon with Circular Glass Background */}
          <a href="/cart" className="relative flex-shrink-0">
            <div className=" flex items-center justify-center bg-white bg-opacity-20 rounded-full backdrop-blur-md">
              <Image
                src="/cartflower.png"
                alt="Cart"
                width={cartIconSize}
                height={cartIconSize}
              />
            </div>
          </a>
        </div>
      </nav>

      {/* Body */}
      <main className="relative flex-1 px-10 border-custom">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>

        {/* Centering Wrapper */}
        <div className="flex flex-col items-center justify-center h-full">
          {/* Info */}
          <div className="flex flex-col items-center justify-center pt-10">
            <p className="text-lg">Delivery + Pickup in Bangkok :)</p>
            <p className="text-lg">จัดส่ง / รับสินค้าในกรุงเทพฯ</p>
          </div>

              {/* Start Order Button */}
              <button className="px-5 py-5 my-14 bg-pink-700 text-white rounded-lg outline-white outline-4 outline-offset-2">
            Start Order 👍
          </button>

          {/* Product Groups */}
          <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProductGroup title="Birthday" image="/pgbirthdaybw2.png" />
            <ProductGroup title="Romance" image="/pgromancebw2.png" />
            <ProductGroup title="Wedding" image="/weddingbw2.png" />
            <ProductGroup title="Corporate" image="/pgcorporatebw2.png" />
            <ProductGroup title="Colors" image="/colorsbw2.png" />
          </div>

      
        </div>
      </main>

      {/* Footer */}
      <footer className="relative h-20 border-custom flex items-center justify-center">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>
        {/* Footer content */}
        <p>
          Made with ❤️ in Bangkok
        </p>
      </footer>
    </div>
  );
}
