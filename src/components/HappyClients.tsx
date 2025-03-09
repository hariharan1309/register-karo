import Clients from "../assets/Clients.png";
const HappyClients = () => {
  return (
    <div className="grid grid-cols-1 pb-14">
      <div className="p-14 flex flex-col gap-3 items-center justify-center mx-auto max-w-[800px]">
        <h2 className="font-inter text-[32px] text-[#272D37] text-base leading-10 font-bold">
          Our Happy Clients
        </h2>
        <p className="text-[#666666] text-center font-inter">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service
        </p>
      </div>
      <img src={Clients} alt="" className="w-full" />
      <button className="place-self-center flex flex-row gap-1.5 items-center text-[#1C4670] mt-4">
        <p className=" font-semibold">Show more</p>
        <span>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pt-[1px]"
          >
            <path
              d="M1.16667 6H12M7.83333 1L12.2441 5.41074C12.5695 5.73618 12.5695 6.26382 12.2441 6.58926L7.83333 11"
              stroke="#1C4670"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default HappyClients;
