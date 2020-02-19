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
  IonLabel,
  IonInput
} from "@ionic/react";

export const SignUpForm: React.FC = () => (
  <IonCard>
    <IonCardHeader>
      {/*<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      <IonCardTitle>Sign up</IonCardTitle>*/}
    </IonCardHeader>
    <IonCardContent>
      <IonItem>
        <IonLabel position="stacked">Username</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Password</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">First Name</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Last Name</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Email</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <section>
        <IonButton expand="block">Sign Up</IonButton>
      </section>
    </IonCardContent>
  </IonCard>
);

export default SignUpForm;
