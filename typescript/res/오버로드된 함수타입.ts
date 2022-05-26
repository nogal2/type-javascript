type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve:Reserve = (
    from: Date, 
    toOrDestination: Date | string, 
    destination?: string) => {
    if(toOrDestination instanceof Date && destination !== undefined) {
        console.log('편도여행 예약')
    } else if (typeof toOrDestination === 'string') {
        console.log('왕복여행 예약')
    }
}

