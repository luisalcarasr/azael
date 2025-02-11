export const Address = () => {
  return (
    <div className="mx-auto text-center px-4 py-4 flex flex-col gap-2 font-bitter">
      <div className="text-1xl uppercase text-amber-950">
        <h2 className="text-xl font-rye text-red-900">Misa</h2>
        12:00 p.m. en la Parroquia Cristo Redentor.
      </div>
      <a href="https://maps.app.goo.gl/GSQCBEVALzktRcSJA" className="font-rye text-lg uppercase text-amber-100 bg-amber-950 mx-auto rounded p-2 px-4 cursor-pointer">
      click here
      </a>
      <div className="text-1xl uppercase text-amber-950 pt-4">
        <h2 className="text-xl font-rye text-red-900">Party</h2>
        4:00 p.m. en el salón de eventos Santa Imelda, Av. Paseo del Porvenir 405, Col. Santa
        Imelda, C.P. 20218, Aguascalientes, Ags.
        </div>
      <a href="https://maps.app.goo.gl/ks1GEj6d2W9tgZek7" className="font-rye text-lg uppercase text-amber-100 bg-amber-950 mx-auto rounded p-2 px-4 cursor-pointer">
      click here
      </a>
    </div>
  );
};
