const imageIds = [
  "1500462918059-b1a0cb512f1d",
  "1531581147762-5961e6e2e6b1",
  "1626204327506-0d3ee11d7752",
  "1549068106-b024baf5062d",
];

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <ul className="flex w-full max-w-6xl gap-4">
        {[...Array(4).keys()].map((_item, index) => (
          <li
            key={index}
            className="h-[500px] w-full rounded-2xl bg-rose-300 relative overflow-hidden group flex-1 hover:grow-[1.25] transition-all"
          >
            <img
              className="absolute w-full h-full inset-0 object-cover"
              src={`https://images.unsplash.com/photo-${imageIds[index]}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`}
              alt=""
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 from-30%">
              <div className="w-48">
                <h2 className="text-2xl font-medium text-white leading-tight">
                  The card title is here.
                </h2>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                  <p className="overflow-hidden mt-2 text-white/70 opacity-0 group-hover:opacity-100 transition duration-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima quia ipsa eius.
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
