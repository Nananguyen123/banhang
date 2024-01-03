import React, { useState } from "react";
import { useFetch } from "../common/CustomeHook";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button, Card, Col, Flex, Pagination, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { ProductsByFilter } from "./ProductsByFilter";
export default function Products(props) {
  const navigate = useNavigate();
  const [listProduct, setListProduct, paging, setPaging] = useFetch(
    `https://backoffice.nodemy.vn/api/products?populate=*`,
    props.query
  );

  return (
    <>
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
                <Col sm={24} md={6}>
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
}
