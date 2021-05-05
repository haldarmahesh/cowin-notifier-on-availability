# cowin-notifier-on-availability
This is a small node application, which notifies your laptop when there is the availability of covid vaccination slots in your preferred area Pin code and date.
Cowin is a government website where the Indians are supposed to book slots to get vaccinated.


## Output



<img width="1507" alt="Screenshot 2021-05-05 at 12 32 49 PM" src="https://user-images.githubusercontent.com/7925734/117106813-24df8b00-ad9e-11eb-9265-0801e75f035c.png">

<img width="802" alt="Screenshot 2021-05-05 at 12 36 58 PM" src="https://user-images.githubusercontent.com/7925734/117107072-a0413c80-ad9e-11eb-81c3-fe341f457281.png">

## How to run? 
* Make sure node is install in your machine
* Clone this and run `npm install`
* run `node index.js`
* Yayy your application is running, and wait for notification.
* You can change the Pin code and date configuration in the file `config.json`

### config.json
```
{
    "CHECK_AFTER_HOW_MANY_SECONDS": 4,                       // Interval to check after how many seconds
    "PIN_CODE": 271801,                                      // Your are pin code
    "CHECK_FROM_THIS_AND_NEXT_DAYS": "05-05-2021",           // Set from which date you want to check for availability
    "NOTIFY_WHNE_AVAILABILITY_CAPACITY_IS_GREATER_THAN": 1   // Set filter, how many availability you need.
}
