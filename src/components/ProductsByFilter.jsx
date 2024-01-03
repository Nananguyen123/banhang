import { Card, Col, Radio, Row } from "antd";
import { useEffect, useState } from "react";
import { useFetch } from "../common/CustomeHook";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import Products from "./Products";
export function ProductsByFilter() {
  const [filter, setFilter] = useState();
  const [listProduct, setListProduct, paging, setPaging, reload, setReload] =
    useFetch(
      `https://backoffice.nodemy.vn/api/products?populate=*`,
      `filters[idBrand][name]=${filter}`
    );

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setFilter(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onChange} value={filter}>
        <Radio value="Asus">Asus</Radio>
        <Radio value="Lenovo">Lenovo</Radio>
        <Radio value="Apple">Apple</Radio>
        <Radio value="ACER">ACER</Radio>
        <Radio value="MSI">MSI</Radio>
      </Radio.Group>
      {/* <Products brand={filter}></Products> */}
      <Row gutter={[30, 30]}>
        {listProduct.map((item) => {
          return (
            <div key={item?.id}>
              <Col span={6}>
                <Link to={`products/${item?.attributes?.slug}`}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <img
                        alt="example"
                        src={
                          "https://backoffice.nodemy.vn" +
                          item?.attributes?.image?.data[0]?.attributes?.url
                        }
                      />
                    }
                  >
                    <Meta
                      title={item?.attributes?.name}
                      description={item?.attributes?.description?.substring(
                        0,
                        30
                      )}
                    />
                  </Card>
                </Link>
              </Col>
            </div>
          );
        })}
      </Row>
    </>
  );
}
