const functions = require("firebase-functions");
const { firestore } = require("./admin");

exports.updateGarage = functions.firestore
  .document("device-configs/garagem2")
  .onUpdate((change, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = change.after.data();

    const garagestatev = newValue.garagestate;

      firestore
      .doc(`device-configs/garagem`)
      .get()
      .then((areaSnapshot) => {

        const garagestatev = areaSnapshot.data().garagestate

        firestore
        .doc("device-configs/garagem")
        .get
        .then((areaPercSnapshot) => {

            const targetDoc = areaPercSnapshot.data().value.openPercent

            if (garagestatev) {
                console.log("garagestate is true");
      
                if (targetDoc == 100) {
                  console.log("vou mandar 0");
      
                  firestore
                    .collection("device-confings")
                    .document("garagem")
                    .update(mapOf("value.openPercent", to, 0));
                }

            } else if (!garagestatev) {
                console.log("garagestate is true");
      
                if (targetDoc == 0) {
                  console.log("vou mandar 100");
                  firestore
                    .collection("device-confings")
                    .document("garagem")
                    .update(mapOf("value.openPercent", to, 100));
                }
              }
            
        });
   
      });
  });
