import { useOrders } from "../features/checkout/useOrders";
import SectionTitle from "../ui/SectionTitle";
import Loading from "../ui/Loading";
import styles from "./Orders.module.scss";
import Pagination from "../ui/Pagination";
import Empty from "../ui/Empty";
import { formatDate } from "../utils/helpers";

export default function Orders() {
  const { orderData, isLoading } = useOrders();

  if (isLoading) return <Loading />;

  const { data, meta } = orderData;
  if (!data.length) return <Empty resourceName="orders" />;

  return (
    <section>
      <SectionTitle title="Your Orders" />

      <div>
        <h3 className="mb-6">Total Orders: {meta.pagination.total || 0}</h3>

        <table className={styles.ordersTable}>
          <thead className="text-sm">
            <tr className="border-base-300">
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map(({ id, attributes }, index) => (
              <tr
                key={id}
                className={`${
                  index % 2 === 0 ? styles.evenRow : styles.oddRow
                } border-base-300`}
              >
                <td>{attributes.name || "empty name"}</td>
                <td>{attributes.address || "empty address"}</td>
                <td>{attributes.cartItems?.length || 0}</td>
                <td>{attributes.orderTotal || "$0.00"}</td>
                <td>{formatDate(attributes.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination pagination={meta.pagination} />
      </div>
    </section>
  );
}
