import { Button, Space, Table, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  _id: number | string;
  name: string;
  price: number;
}
type IProduct = {
  _id: string | number;
  name: string;
  price: number;
  desc: string;
};
interface Props {
  products: IProduct[];
  onRemove: (id: number | string) => void;
}

const ProductShow = (props: Props) => {
  const removeProduct = (id: string | number) => {
    props.onRemove(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Popconfirm
              title="Mày dám xóa -)) xóa rồi đừng tiếc"
              onConfirm={() => {
                removeProduct(record.key);
              }}
            >
              <Button type="primary" style={{ backgroundColor: "red" }}>
                Delete
              </Button>
            </Popconfirm>

            <Button type="primary" style={{ backgroundColor: "orange" }}>
              <Link to={`/admin/products/${record.key}/update`}>Update</Link>
            </Button>
          </Space>
        );
      },
    },
  ];
  const data: DataType[] = props.products.map((item: IProduct, index) => {
    return {
      key: item._id,
      ...item,
    };
  });
  return (
    <div>
      <Button type="primary" style={{ backgroundColor: "#14dbac" }}>
        <Link to={"admin/products/add"}>Add New Product</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductShow;
