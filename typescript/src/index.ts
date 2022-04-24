type Reverse = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
};

let reserve: Reserve = (
  from: Date,
  to: Date | string,
  destination?: string
) => {};
