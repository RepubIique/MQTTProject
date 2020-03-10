import React, { Component, useState, useContext, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonTitle,
  useIonViewWillEnter,
  useIonViewDidEnter
} from "@ionic/react";
import "./ProductCard.css";
import { GlobalContext } from "../actions/globalContext";
import CartActions from "../actions/cartActions";
import { getAllProducts } from "../actions/api/products";

interface Product {
  id: number;
  name: string;
  image_url: string;
  price: number;
}

export const ProductCard: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = CartActions();

  useIonViewDidEnter(() => {
    getProductInfo();
  });

  const getProductInfo = async () => {
    const data = await getAllProducts();
    if (data) {
      setProducts(data);
    }
  };

  return (
    <div>
      {products!.map(product => {
        return (
          <IonCard className="container" key={product.id}>
            <img className="productImg" src={product.image_url}></img>
            <div className="priceName">
              <IonCardTitle className="priceSize">
                ${product.price}.00
              </IonCardTitle>
              <h4 className="productName">{product.name}</h4>
            </div>
            {state.cart.find((e: any) => e === product) ? (
              <IonButton
                color="warning"
                size="default"
                expand="block"
                fill="outline"
              >
                Added
              </IonButton>
            ) : (
              <IonButton
                color="medium"
                size="default"
                expand="block"
                fill="outline"
                onClick={e => {
                  addToCart(product);
                }}
              >
                + Add
              </IonButton>
            )}
          </IonCard>
        );
      })}
    </div>
  );
};

export default ProductCard;
