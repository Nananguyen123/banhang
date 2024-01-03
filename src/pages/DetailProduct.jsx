import { useParams } from "react-router-dom";
import { useFetch } from "../common/CustomeHook";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export function DetailProduct() {
  const params = useParams();
  const [listProduct, setListProduct] = useFetch(
    `https://backoffice.nodemy.vn/api/products/${params?.slug}?populate=*`
  );
  console.log("image", listProduct?.attributes?.image?.data);
  let listImage = listProduct?.attributes?.image?.data.map((item) => {
    return {
      original: `https://backoffice.nodemy.vn` + item?.attributes?.url,
      thumbnail:
        `https://backoffice.nodemy.vn` +
        item?.attributes?.formats?.thumbnail?.url,
    };
  });
  return <>{listImage ? <ImageGallery items={listImage} /> : null}</>;
}
