import React from "react";
import { useFetch } from "../common/CustomeHook";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button, Card, Col, Flex, Pagination, Row } from "antd";
import Meta from "antd/es/card/Meta";

const ProductsAll = () => {
  const [listProduct, setListProduct, paging, setPaging] = useFetch(
    `https://backoffice.nodemy.vn/api/products?populate=*`
  );

  return (
    <>
      <Button>Lenovo</Button>
      <Button>Asus</Button>
      <Button>Apple</Button>
      <Pagination
        defaultCurrent={1}
        current={paging.page}
        total={paging.total}
        pageSize={paging.pageSize}
        onChange={(page) => {
          setPaging({
            ...paging,
            page: page,
          });
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
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
      </div>
    </>
  );
};

export default ProductsAll;
