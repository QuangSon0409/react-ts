import { Button, Space, Table, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../../api/product";

interface DataType {
  key: string | number;
  _id: number | string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
}
type IProduct = {
  _id: string | number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
};
interface Props {
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
      title: "Product Original Price",
      dataIndex: "originalPrice",
      key: "originalPrice",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Product Image",
      dataIndex: "image",
      key: "image",
      render: (text) => <img src={text} alt="" />,
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
  // console.log(props.products);
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const response = await getProduct();
    setProduct(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const data: DataType[] = product.map((item: IProduct, index) => {
    return {
      key: item._id,
      ...item,
    };
  });
  return (
    <div>
      <Button type="primary" style={{ backgroundColor: "#14dbac" }}>
        <Link to={"/admin/products/add"}>Add New Product</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductShow;
