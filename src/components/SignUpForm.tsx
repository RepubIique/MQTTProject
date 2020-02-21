import React, { useState } from "react";
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

import { getUsers, login } from '../actions/accounts';


export const SignUpForm: React.FC = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();

  // console.log(`Username: ${username} | Password: ${password} | Firstname: ${firstname} | Lastname: ${lastname} | Email: ${email} `);

  const submit = async () => {

    // const data = await getUsers();
    // if (data) {
    //   console.log(data)
    // }

    const data = await login({ username, password });
    if (data) {
      console.log(data)
    }

  }



  return (
    <IonCard>
      <IonCardHeader>
        {/*<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      <IonCardTitle>Sign up</IonCardTitle>*/}
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel position="stacked">Username{<span style={{ color: 'red' }}> * </span>}</IonLabel>
          <IonInput id={'username'} value={username} onIonChange={(e) => setUsername(e.detail.value)} required></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Password{<span style={{ color: 'red' }}> * </span>}</IonLabel>
          <IonInput id={'password'} value={password} onIonChange={e => setPassword(e.detail.value)} required></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">First Name{<span style={{ color: 'red' }}> * </span>}</IonLabel>
          <IonInput id={'firstname'} value={firstname} onIonChange={e => setFirstname(e.detail.value)} required></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Last Name{<span style={{ color: 'red' }}> * </span>}</IonLabel>
          <IonInput id={'lastname'} value={lastname} onIonChange={e => setLastname(e.detail.value)} required></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Email{<span style={{ color: 'red' }}> * </span>}</IonLabel>
          <IonInput id={'email'} value={email} onIonChange={e => setEmail(e.detail.value)} required></IonInput>
        </IonItem>
        <section>
          <IonButton expand="block" onClick={submit}>Sign Up</IonButton>
        </section>
      </IonCardContent>
    </IonCard>
  )
};


export default SignUpForm;
