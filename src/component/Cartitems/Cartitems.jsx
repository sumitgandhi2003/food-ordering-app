import { cart } from "../restItemContainer/RestItemContainer";
import RestItemConainer from "../restItemContainer/RestItemContainer";
const Cartitems = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-2/4">
                {cart.map((item) => {
                    return (
                        <RestItemConainer
                            item={item}
                            key={item?.card?.info?.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Cartitems;
