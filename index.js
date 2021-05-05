const notifier = require("node-notifier");
const path = require("path");
const request = require("supertest");
const config = require("./config.json");
const CHECKAFTER_SECONDS = config.CHECK_AFTER_HOW_MANY_SECONDS;
const PIN_CODE = config.PIN_CODE;
const DATE = config.CHECK_FROM_THIS_AND_NEXT_DAYS;
function check() {
  console.log("===============");
  console.log("Checking now");
  console.log("===============");
  return request("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public") // app server is an instance of Class: http.Server
    .get(`/calendarByPin?pincode=${PIN_CODE}&date=${DATE}`)
    .set("accept", "application/json")
    .set("Content-Type", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      const { body } = response;
      body.centers.forEach((item) => {
        item.sessions.forEach((sessionItem) => {
          if (
            sessionItem.available_capacity >
            config.NOTIFY_WHNE_AVAILABILITY_CAPACITY_IS_GREATER_THAN
          ) {
            notifier.notify({
              title: "Yayy, you got slots available now",
              message: "Please book now",
              sound: true, // Only Notification Center or Windows Toasters
              wait: true, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
            });

            console.log(
              "Available",
              item.name,
              "Availability ",
              item.sessions[0].available_capacity
            );
          }
        });
      });
    });
}

setInterval(check, CHECKAFTER_SECONDS * 1000);
