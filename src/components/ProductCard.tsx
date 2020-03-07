import React, { Component, useState, useContext } from "react";
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
  IonTitle
} from "@ionic/react";
import "./ProductCard.css";
import ProductInfo from "./products.json";
import { GlobalContext } from "../actions/globalContext";
import CartActions from "../actions/cartActions";

// class ProductCard extends Component {
export const ProductCard: React.FC = () => {
  const [state, setState] = useContext(GlobalContext);

  const { addToCart } = CartActions();

  return (
    <div>
      {ProductInfo.map(postDetail => {
        return (
          <IonCard className="container" key={postDetail.id}>
            <img className="productImg" src={postDetail.image}></img>
            <div className="priceName">
              <IonCardTitle className="priceSize">
                ${postDetail.price}.00
              </IonCardTitle>
              <h4 className="productName">{postDetail.name}</h4>
            </div>

            <IonButton
              color="medium"
              size="default"
              expand="block"
              fill="outline"
              onClick={e => {
                addToCart(postDetail);
              }}
            >
              + Add
            </IonButton>
          </IonCard>
        );
      })}
    </div>
  );
};

export default ProductCard;
