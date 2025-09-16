import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "../../ui/Select";
import ColorRadio from "../../ui/ColorRadio";
import { add } from "../cart/cartSlice";
import { amountOptions } from "../../utils/constant";
import { formatCurrency } from "../../utils/helpers";
import useProduct from "./useProduct";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import styles from "./ProductDetail.module.scss";
import useForm from "../../hooks/useForm";

export default function ProductDetail() {
  const { isLoading, data } = useProduct();
  const { form, setForm, handleChange } = useForm({
    color: "",
    amount: "",
  });
  const dispatch = useDispatch();

  function handleAdd(e) {
    e.preventDefault();

    const cartItem = {
      cartId: `${data.id}-${form.color}`,
      productId: data.id,
      image,
      title,
      company,
      price,
      ...form,
    };

    dispatch(add(cartItem));
  }

  //設定form初始值
  useEffect(() => {
    if (data?.attributes?.colors?.length) {
      setForm((prev) => ({
        ...prev,
        color: data.attributes.colors[0],
        amount: amountOptions[0],
      }));
    }
  }, [data]);

  if (isLoading) return <Loading />;

  if (!data) return <Empty resourceName="product" />;

  const {
    image,
    title,
    company,
    price,
    description,
    colors = [],
  } = data.attributes || {};

  return (
    <article className={styles.productDetail}>
      <div className={`${styles.imgContainer} mb-10`}>
        <img src={image} alt={title} />
      </div>

      <section>
        <header className="mb-6">
          <h2 className="text-3xl mb-2 ">{title}</h2>
          <h3 className="text-neutral-content mb-2 ">{company}</h3>
          <p className="text-lg">{formatCurrency(price)}</p>
        </header>

        <p className="mb-6"> {description}</p>

        <form>
          <div className="mb-2">
            <ColorRadio
              name="color"
              label="Colors"
              options={colors}
              value={form.color}
              onChange={handleChange}
            />
          </div>

          <div className={`${styles.selectContainer} mb-10`}>
            <Select
              name="amount"
              label="Amount"
              options={amountOptions}
              value={form.amount}
              onChange={handleChange}
            />
          </div>

          <button className="btn-primary" onClick={handleAdd}>
            Add To Bag
          </button>
        </form>
      </section>
    </article>
  );
}
