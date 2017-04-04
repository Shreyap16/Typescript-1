class myfirsttypescript {
  constructor(public message:string){


  }
sayit(){

  return "<h1>"+this.message+"<h1>;

}

};

var hw = new myfirsttypescript("hello, world");
document.body.innerHTML=hw.sayit();
