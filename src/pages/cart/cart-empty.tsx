export default function Empty() {
  return (
    <div className="flex flex-col items-center gap-5">
      <img className="w-[100px]" alt="empty" src="/assets/images/illustration-empty-cart.svg" />
      <span className="font-semibold text-[#CAAFA7]">Your added items will appear here</span>
    </div>
  );
}
