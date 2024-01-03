import { Menu } from "antd";
import { useFetch } from "../../common/CustomeHook";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function Header() {
  // const [listProduct, setListProduct, paging, setPaging] = useFetch(
  //   `https://backoffice.nodemy.vn/api/homepage?populate=*`
  // );

  // console.log("homepage", listProduct);

  // let listImage =
  //   listProduct?.attributes?.leftBanner?.data.map((item) => {
  //     if (item) {
  //       return {
  //         original: "https://backoffice.nodemy.vn" + item?.attributes?.url,
  //         thumbnail:
  //           "https://backoffice.nodemy.vn" +
  //           item?.attributes?.formats?.thumbnail?.url,
  //       };
  //     }
  //   }) || [];

  return (
    <div>
      <Menu
        mode="horizontal"
        items={[
          {
            key: 1,
            label: "Trang chủ",
          },
          {
            key: 2,
            label: "Danh sách",
          },
        ]}
      />
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
    </div>
  );
}
