import { useState, useEffect } from "react";
import { useCamera } from "@ionic/react-hooks/camera";
import { useFilesystem, base64FromPath } from "@ionic/react-hooks/filesystem";
import { useStorage } from "@ionic/react-hooks/storage";
import { isPlatform } from "@ionic/react";
import {
  CameraResultType,
  CameraSource,
  CameraPhoto,
  Capacitor,
  FilesystemDirectory
} from "@capacitor/core";

// import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";

// class Camera {
//   qrScanner: QRScanner;

//   constructor(qrScannerHandle: QRScanner) {
//     this.qrScanner = qrScannerHandle;

//     // Optionally request the permission early
//     this.qrScanner
//       .prepare()
//       .then((status: QRScannerStatus) => {
//         if (status.authorized) {
//           // camera permission was granted

//           // start scanning
//           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
//             console.log("Scanned something", text);

//             this.qrScanner.hide(); // hide camera preview
//             scanSub.unsubscribe(); // stop scanning
//           });
//         } else if (status.denied) {
//           // camera permission was permanently denied
//           // you must use QRScanner.openSettings() method to guide the user to the settings page
//           // then they can grant the permission from there
//         } else {
//           // permission was denied, but not permanently. You can ask for permission again at a later time.
//         }
//       })
//       .catch((e: any) => console.log("Error is", e));
//   }

//   usePhotoGallery() {
//     const { getPhoto } = useCamera();

//     const takePhoto = async () => {
//       const cameraPhoto = await getPhoto({
//         resultType: CameraResultType.Uri,
//         source: CameraSource.Camera,
//         quality: 100
//       });
//     };

//     return {
//       takePhoto
//     };
//   }
// }

// export default Camera;

class Camera {}

export default Camera;

// export function usePhotoGallery() {
//   const { getPhoto } = useCamera();

//   const takePhoto = async () => {
//     const cameraPhoto = await getPhoto({
//       resultType: CameraResultType.Uri,
//       source: CameraSource.Camera,
//       quality: 100
//     });
//   };

//   return {
//     takePhoto
//   };
// }
