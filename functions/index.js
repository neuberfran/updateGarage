const functions = require("firebase-functions");
const { firestore } = require("./admin");

exports.updateGarage = functions.firestore
    .document("device-configs/garagem2")
    .onUpdate((change, context) => {

        //Get the latest value after update
        const newValue = change.after.data();

        //Current state of garage
        const garagestatev = newValue.garagestate;

        return firestore.doc(`device-configs/garagem`).get()
            .then((areaSnapshot) => areaSnapshot.data().value.openPercent)
            .then(targetDoc => {

                //Target doc has openPercent of other document ('garagem')
                if (garagestatev) {
                    console.log("garagestate is true = targetDodc" + targetDoc);

                    if (targetDoc === 100) {
                        console.log("vou mandar 0");
                        //Returning Promise inside of .then() block 
                        return firestore
                            .collection("device-configs")
                            .document("garagem")
                            .update({ "value.openPercent": 0 });
                    }

                } else {

                    console.log("garagestate is false = targetDodc" + targetDoc);

                    if (targetDoc === 0) {
                        console.log("vou mandar 100");
                        //Returning Promise inside of .then() block 
                        return firestore
                            .collection("device-configs")
                            .document("garagem")
                            .update({ "value.openPercent": 100 });
                    }
                }
            })

    });