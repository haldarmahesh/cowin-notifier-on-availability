# Cowin Notifier on availability

This is a small node application, which notifies your laptop when there is the availability of covid vaccination slots in your preferred area Pin code and date.
Cowin is a government website where the Indians are supposed to book slots to get vaccinated.

## Output (See the notif on right top corner)

<img width="1507" alt="Screenshot 2021-05-05 at 12 32 49 PM" src="https://user-images.githubusercontent.com/7925734/117106813-24df8b00-ad9e-11eb-9265-0801e75f035c.png">

## How to run?

- Make sure node is install in your machine
- Clone this and run `npm install`
- run `node index.js`
- Yayy your application is running, and wait for notification.
- You can change the Pin code and date configuration in the file `config.json`

### config.json

```
{
    "RE_CHECK_AFTER_SECONDS": 4,                       // Re trigger the check, after these many seconds
    "PIN_CODE": 271801,                                      // Your are pin code
    "CHECK_FROM_THIS_AND_NEXT_SEVEN_DAYS": "05-05-2021",           // Set from which date you want to check for availability
    "NOTIFY_WHNE_AVAILABILITY_CAPACITY_IS_GREATER_THAN": 1   // Set filter, how many availability you need.
}
```
