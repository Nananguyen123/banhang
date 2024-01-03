import React, { useEffect, useState } from "react";
import { useFetch } from "../common/CustomeHook";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const { Header, Content, Footer } = Layout;
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Search from "antd/es/input/Search";
import Sider from "antd/es/layout/Sider";
import "../App.css";
import ProductsAll from "./ProductsAll";

export function ListProduct() {
  const [listProduct, setListProduct, paging, setPaging] = useFetch(
    `https://backoffice.nodemy.vn/api/homepage?populate=*`
  );

  console.log("homepage", listProduct);

  let listImage =
    listProduct?.attributes?.leftBanner?.data.map((item) => {
      if (item) {
        return {
          original: import.meta.env.VITE_BASE_API_URL + item?.attributes?.url,
          thumbnail:
            import.meta.env.VITE_BASE_API_URL +
            item?.attributes?.formats?.thumbnail?.url,
        };
      }
    }) || [];

  return (
    <>
      {/* <Layout> */}
      {/* <Header
          style={{
            background: "dark",
            position: "sticky",
            width: "100%",
            zIndex: 100,
            top: 0,
            transition: "top 0.6s",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search
            placeholder="input search text"
            style={{
              width: 200,
            }}
          />
        </Header> */}

      {/* <Content> */}
      {/* <div
              style={{
                width: "230px",
                height: "70vh",
                border: "solid black",
                marginLeft: "147px",
                position: "absolute",
                background: "white",
              }}
            >
              Silder
            </div> */}
      {/* <div className="header">
        <div className="leftBanner">
          {listImage ? (
            <ImageGallery
              showPlayButton={false}
              items={listImage}
              showThumbnails={false}
              showFullscreenButton={false}
              autoPlay={true} // Bật chế độ tự động chuyển đổi
              slideInterval={3000} // Thiết lập thời gian giữa các ảnh (đơn vị: milliseconds)
            />
          ) : null}
        </div>
        <div className="rightBanner">
          <img
            src={
              `https://backoffice.nodemy.vn` +
              listProduct?.attributes?.rightBanner?.data[0].attributes?.url
            }
          />
          <img
            src={
              `https://backoffice.nodemy.vn` +
              listProduct?.attributes?.rightBanner?.data[1].attributes?.url
            }
          />
        </div>
      </div> */}

      {/* subBanner */}
      {/* <div className="subBanner">
        <img
          src={
            `https://backoffice.nodemy.vn` +
            listProduct?.attributes?.subBanner?.data[0].attributes?.url
          }
        />

        <img
          src={
            `https://backoffice.nodemy.vn` +
            listProduct?.attributes?.subBanner?.data[1].attributes?.url
          }
        />

        <img
          src={
            `https://backoffice.nodemy.vn` +
            listProduct?.attributes?.subBanner?.data[2].attributes?.url
          }
        />
      </div> */}

      {/* bottom  */}
      {/* <div className="bottomBanner">
        <img
          src={
            `https://backoffice.nodemy.vn` +
            listProduct?.attributes?.bottomBanner?.data[0].attributes?.url
          }
        />
        <img
          src={
            `https://backoffice.nodemy.vn` +
            listProduct?.attributes?.bottomBanner?.data[1].attributes?.url
          }
        />
        <img
          src={
            `https://backoffice.nodemy.vn` +
            listProduct?.attributes?.bottomBanner?.data[2].attributes?.url
          }
        />
        <img
          src={
            `https://backoffice.nodemy.vn` +
            listProduct?.attributes?.bottomBanner?.data[3].attributes?.url
          }
        />
      </div> */}

      {/* </Content> */}
      {/* </Layout> */}
    </>
  );
}

export default ListProduct;
