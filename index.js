const notifier = require("node-notifier");
const path = require("path");
const axios = require("axios");
const config = require("./config.json");
const CHECKAFTER_SECONDS = config.CHECK_AFTER_HOW_MANY_SECONDS;
const PIN_CODE = config.PIN_CODE;
const DATE = config.CHECK_FROM_THIS_AND_NEXT_SEVEN_DAYS;
function check() {
  console.log("===============");
  console.log("Checking now");
  console.log("===============");
  axios
    .get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${PIN_CODE}&date=${DATE}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
        },
      }
    )
    .then((response) => {
      const body = response.data;
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
    })
    .catch((err) => {
      console.log("got err", err);
      if (err.response && err.response.status === 400) {
        console.log("!!!!! WRONG CONFIG");
        console.log("error details");
        console.log(err.response.data);
      }
    });
}

setInterval(check, CHECKAFTER_SECONDS * 1000);
