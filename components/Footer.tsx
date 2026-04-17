export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-[0.2em]">FUTURBLIT</div>
            <p className="mt-4 max-w-md text-sm text-white/50 leading-relaxed">
              숫자로 증명하고, 감각으로 압도합니다.
              <br />
              제품 기획부터 퍼포먼스 마케팅까지.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <div className="text-white/40 text-xs tracking-[0.3em] mb-3">CONTACT</div>
              <div className="text-white/80">contact@futurblit.com</div>
            </div>
            <div>
              <div className="text-white/40 text-xs tracking-[0.3em] mb-3">FOLLOW</div>
              <div className="flex gap-4 text-white/80">
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/40">
          <div>© {new Date().getFullYear()} FUTURBLIT. All rights reserved.</div>
          <div className="tracking-[0.3em]">CREATING NEW OPPORTUNITIES</div>
        </div>
      </div>
    </footer>
  );
}
