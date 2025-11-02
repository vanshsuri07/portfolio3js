import { clientReviews } from "../constants/index.js";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

const Clients = () => {
  return (
    <section className="c-space my-20" id="clients">
      <h3 className="head-text">Hear from My Clients</h3>

      <ScrollStack
        itemDistance={50}
        itemScale={0.02} // Each card 2% bigger
        itemStackDistance={40}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={1.0} // Start at normal size
        rotationAmount={0} // No rotation for flat stack
        useWindowScroll={true}
      >
        {clientReviews.map((item) => (
          <ScrollStackItem
            key={`review-${item.id}`}
            itemClassName="client-review bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm"
          >
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Clients;
