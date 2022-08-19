oops concept
const person = {
    name: 'Nehal Mahida',
    userName: '1234',
    password: 'password:)',
    login: function(userName, password) {
      if (userName === this.userName && password === this.password) {
        console.log('Login Successfully');
      }
       else {
        console.log('Authentication Failed!!');
      }
    }
  };
  
  
  user.login('1234', '1234');
  user.login('1234', 'password:)');
   
  class to calculate uber price

  class uber{
    constructor(distance,rate){
        this.distance=distance;
        this.rate=rate;

    }
    setdistance(dist){
        this.distance=dist;

    }
    getrigedetaild(){
        return(`distance ofride i ${this.distance}and rate 0f${this.rate}`)
    }
  }
  get price(){
    letprice+(tis.rate*this.distance)

  }
  let uber=new uber(10,20);
  console.log(uber.getprice());
  uber.setdistance(100);
  console.log(uber.etprice());