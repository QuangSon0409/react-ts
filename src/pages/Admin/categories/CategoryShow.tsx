import { Button, Space, Table, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { getAllCategory } from "../../../api/category";
import { useEffect, useState } from "react";

interface DataType {
  key: string | number;
  _id: number | string;
  name: string;
}
interface ICate {
  _id: string | number;
  name: string;
}
interface Props {
  categories: ICate[];
  onRemove: (category: number | string) => void;
}
const CategoryShow = (props: Props) => {
  const removeCategory = (id: string | number) => {
    props.onRemove(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
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
                removeCategory(record.key);
              }}
            >
              <Button type="primary" style={{ backgroundColor: "red" }}>
                Delete
              </Button>
            </Popconfirm>

            <Button type="primary" style={{ backgroundColor: "orange" }}>
              <Link to={`/admin/categories/${record.key}/update`}>Update</Link>
            </Button>
          </Space>
        );
      },
    },
  ];
  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    const { data } = await getAllCategory();
    // console.log(data);

    setCategory(data);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const data: DataType[] = category.map((item: ICate, index) => {
    return {
      key: item._id,
      ...item,
    };
  });
  return (
    <div>
      <Button type="primary" style={{ backgroundColor: "#14dbac" }}>
        <Link to={"/admin/categories/add"}>Add New Category</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};
export default CategoryShow;
