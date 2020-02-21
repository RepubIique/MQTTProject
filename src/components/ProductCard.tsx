import React from "react";
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
  IonLabel
} from "@ionic/react";
import "./ProductCard.css";

export const ProductCard: React.FC = () => (
  <IonCard className="container">
    <img src="https://via.placeholder.com/150"></img>
    <IonCardTitle className="productName">Product Name</IonCardTitle>
    <IonButton expand="block" fill="outline">
      $3.20
    </IonButton>
  </IonCard>
);

export default ProductCard;
