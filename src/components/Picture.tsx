export const Picture = () => {
  return (
    <div className="mx-auto text-center px-4 py-4 font-im-fell-english-sc">
      <div className="mx-auto w-64 md:w-[50%] border-4 border-amber-950 aspect-square  overflow-hidden">
        <img src="/pictures/azael.jpeg" alt="Azael" className="sepia-[0.85]" />
      </div>
      <div
        className="font-rye text-xl md:text-2xl uppercase text-amber-950"
        style={{
          clipPath: "ellipse(100% 100% at 50% 100%)",
        }}
      >
        February 22th, 2025
      </div>
    </div>
  );
};
