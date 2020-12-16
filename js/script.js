var app = new Vue(
  {
    el: "#root",
    data: {

      emails:[""],

    },
    methods:{

    },
    mounted: function(){
      const self = this.emails;
      for(var i = 0; i < 10; i++){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function(result) {
          console.log(result);
          self.push(result.data.response);
        })
      }
      }
  }
);


// .then((result) =>{
//   console.log(result);
//   this.emailList.push(result.data.response);
// })
