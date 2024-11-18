import Image from "next/image";
import ProductGroup from "./components/ProductGroup";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-10">
      {/* Navigation Bar */}
      <nav className="relative px-10 py-5 flex justify-between items-center border-custom">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>

        <Image
          src="/chloelogo.jpg"
          alt="Chloe de Bloom"
          width={80}
          height={80}
          className="rounded-full"
        />

        <a href="/cart" className="relative">
          <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full backdrop-blur-md">
            <Image
              src="/cart.png"
              alt="Cart"
              width={40}
              height={40}
            />
          </div>
        </a>
      </nav>

      {/* Social Media Links Navigation */}
      <nav className="relative py-3 border-custom">
        {/* Left and Right Borders Positioned Absolutely */}
        <div className="border-left absolute inset-y-0 left-0"></div>
        <div className="border-right absolute inset-y-0 right-0"></div>

        {/* Social Media Links Container */}
        <div className="flex justify-between items-center px-10">
          {/* Line Link */}
          <a href="https://line.me/ti/p/your-line-id" target="_blank" rel="noopener noreferrer">
            <Image
              src="/line.png"
              alt="Line"
              width={48}
              height={48}
            />
          </a>

          {/* WhatsApp Link */}
          <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={48}
              height={48}
            />
          </a>

          {/* Telegram Link */}
          <a href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer">
            <Image
              src="/telegram.png"
              alt="Telegram"
              width={48}
              height={48}
            />
          </a>

          {/* WeChat Link */}
          <a href="weixin://dl/chat?your-wechat-id" target="_blank" rel="noopener noreferrer">
            <Image
              src="/wechat.png"
              alt="WeChat"
              width={48}
              height={48}
            />
          </a>
        </div>
      </nav>

      {/* Body */}
      <main className="relative flex-1 p-4 border-custom">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>

        {/* Product Groups */}
        <div className="grid grid-cols-auto-fit-minmax-200 gap-8 py-8">
          <ProductGroup title="Birthday" image="/pgbirthday.png" />
          <ProductGroup title="Romance" image="/pgromance.png" />
          <ProductGroup title="Wedding" image="/pgwedding.png" />
          <ProductGroup title="Corporate" image="/pgcorporate.png" />
          <ProductGroup title="Colors" image="/pgcolors.png" />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative h-20 p-4 border-custom">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>
        {/* Footer content */}
      </footer>
    </div>
  );
}
