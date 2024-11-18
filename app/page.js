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
        <div className="flex items-center justify-center h-full">
          {/* Product Groups */}
          <div className="grid gap-8 py-5 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            <ProductGroup title="Birthday" image="/pgbirthday.png" />
            <ProductGroup title="Romance" image="/pgromance.png" />
            <ProductGroup title="Wedding" image="/pgwedding.png" />
            <ProductGroup title="Corporate" image="/pgcorporate.png" />
            <ProductGroup title="Colors" image="/pgcolors.png" />
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
