//AZIONE: inizialiazzo il codice per il supporto di Vue js 
var app = new Vue({

  //AZIONE: richiamo il contenitore a cui voglio applicare Vue js 
  el: '#container',

  //AZIONE: assegno le var e valori
  data:{
    images : ['img/marsala.jpg','img/palermo.jpg','img/siracusa.jpg','img/agrigento.jpg'],
    nameCity : ['Marsala','Palermo','Sicacusa','Agrigento'],
    tittleImg :  ['Marsala','Palermo','Sicacusa','Agrigento'],
    counter : 0,
    intervalDown : '',
    keyCode: '',
    time: 3000
  },

  //AREA AZIONE: Area inserimento metodi da applicare al html al caricamento della pagina senza necessità di eseguire una evento
  created(){

    //AZIONE: creo un comando con un cambio foto ogni 3 secondi infinito se non viene eseguita l'azione di clearInterval sulle Icons pallini
    this.intervalDown = setInterval(this.next, this.time);

    // AZIONE: aggiungo questo elemento per incorporare la tastiera al programma 
    window.addEventListener('keydown', function(e) {
      app.handleGlobalKeyDown(e) 
    });

  },
  //FINE AREA AZIONE: Area inserimento metodi da applicare al html al caricamento della pagina senza necessità di eseguire una evento 

  //AREA AZIONE: Area inserimento metodi da applicare al html ad un eventuale evento
  methods:{

    // AZIONE: inserisco comando tastiera 
    // NOTA: aggiunto clearInterval per stoppare il comando setInterval una volta cliccato sulle freccie della tastiera
    handleGlobalKeyDown(e) {
      this.keyCode = e.keyCode
      if(this.keyCode == 39){
        this.next();
        clearInterval(this.intervalDown);
      }
      else if(this.keyCode == 37){
        this.prev();
        clearInterval(this.intervalDown);
      }
    },

    //AZIONE: creo una funzione che una volta eseguito il comando click sul pulsante html prev le img tornano indietro di un posto 
    prev(){
      (this.counter <= 0) ? this.counter = this.images.length -1 : this.counter-- ;
    },

    //AZIONE: creo una funzione che una volta eseguito il comando click sul pulsante html next le img vanno avanti di un posto 
    next(){
      (this.counter == this.images.length - 1) ? this.counter = 0 : this.counter++
    },

    //AZIONE: creo una funzione che una volta eseguito il comando click su di uno dei pallini html la posizine (index) img sarà equivalente alla posizione del pullino attivato quindi visibile.. 
    // NOTA: aggiunto clearInterval per stoppare il comando setInterval una volta cliccato sul pallino desiderato
    activeImg(position){
      this.counter = position;
      clearInterval(this.intervalDown);
    },
  }
  //FINE AZIONE: Area inserimento metodi da applicare al html ad un eventuale evento
  
});
//FINE AZIONE: inizialiazzo il codice per il supporto di vue js