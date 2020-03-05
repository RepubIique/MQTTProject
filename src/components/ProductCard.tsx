import React, { Component } from "react";
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

class ProductCard extends Component {
  render() {
    return (
      <div>
        {ProductInfo.map(postDetail => {
          return (
            <IonCard className="container">
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
              >
                + Add
              </IonButton>
            </IonCard>
          );
        })}
      </div>
    );
  }
}

export default ProductCard;
