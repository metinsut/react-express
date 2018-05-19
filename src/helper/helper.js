class Helper {
      static guid = () => {
            let s4 = () => {
                  return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
            };
            return (
                  s4() +
                  s4() +
                  "-" +
                  s4() +
                  "-" +
                  s4() +
                  "-" +
                  s4() +
                  "-" +
                  s4() +
                  s4() +
                  s4()
            );
      };

      monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

}

export default Helper;
