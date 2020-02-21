import React from "react";
import {
    IonItem,
    IonLabel,
    IonInput
} from "@ionic/react";

interface TextFieldType {
    mandatory: boolean,
    fieldname: string,
    value: string,
    label: string,
    onChange: Function
}

export const TextField = ({ mandatory, fieldname, label, value, onChange }: TextFieldType) => {
    return (
        <IonItem>
            <IonLabel position="stacked">
                {label}{mandatory && <span style={{ color: "red" }}> * </span>}
            </IonLabel>
            <IonInput
                value={value}
                onIonChange={(e) => onChange({ key: fieldname, value: e.detail.value })}
            ></IonInput>
        </IonItem >
    );
};

export default { TextField };
